#!/usr/bin/env node
// @ts-check
"use strict";

import { createWriteStream, existsSync, mkdirSync } from "node:fs";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { get } from "node:https";
import { fileURLToPath } from "node:url";
import process from "node:process";

const REGISTRY_BASE = "https://anexui.com/registry";
const REGISTRY_JSON = `${REGISTRY_BASE}/registry.json`;
const COMPONENTS_BASE = `${REGISTRY_BASE}/components`;
const LIB_BASE = `${REGISTRY_BASE}/lib`;

// ── ANSI colours ──────────────────────────────────────────────────────────────
const c = {
  reset:  "\x1b[0m",
  bold:   "\x1b[1m",
  dim:    "\x1b[2m",
  green:  "\x1b[32m",
  cyan:   "\x1b[36m",
  yellow: "\x1b[33m",
  red:    "\x1b[31m",
  violet: "\x1b[35m",
};

const ok    = (msg) => console.log(`${c.green}✔${c.reset} ${msg}`);
const info  = (msg) => console.log(`${c.cyan}ℹ${c.reset} ${msg}`);
const warn  = (msg) => console.log(`${c.yellow}⚠${c.reset} ${msg}`);
const err   = (msg) => console.error(`${c.red}✖${c.reset} ${msg}`);
const bold  = (msg) => `${c.bold}${msg}${c.reset}`;
const dim   = (msg) => `${c.dim}${msg}${c.reset}`;

// ── HTTP helper ───────────────────────────────────────────────────────────────
function fetchText(url) {
  return new Promise((resolve, reject) => {
    get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchText(res.headers.location).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} — ${url}`));
      }
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => resolve(body));
    }).on("error", reject);
  });
}

// ── Dependency resolver ───────────────────────────────────────────────────────
function resolveDeps(ids, allComponents) {
  const map = new Map(allComponents.map((c) => [c.id, c]));
  const resolved = new Set(ids);
  let changed = true;
  while (changed) {
    changed = false;
    for (const id of resolved) {
      const comp = map.get(id);
      if (!comp) continue;
      for (const dep of comp.requires ?? []) {
        if (!resolved.has(dep)) { resolved.add(dep); changed = true; }
      }
    }
  }
  return [...resolved].map((id) => map.get(id)).filter(Boolean);
}

// ── Main commands ─────────────────────────────────────────────────────────────

async function cmdAdd(ids) {
  if (!ids.length) {
    err("Usage: npx anexui add <component-id> [more-ids...]");
    err(`Example: ${dim("npx anexui add button input modal")}`);
    process.exit(1);
  }

  info(`Fetching registry…`);
  let registry;
  try {
    const json = await fetchText(REGISTRY_JSON);
    registry = JSON.parse(json);
  } catch (e) {
    err(`Could not fetch registry: ${e.message}`);
    process.exit(1);
  }

  // Validate requested ids
  const allComponents = registry.components;
  const allIds = new Set(allComponents.map((c) => c.id));
  const invalid = ids.filter((id) => !allIds.has(id));
  if (invalid.length) {
    err(`Unknown component(s): ${bold(invalid.join(", "))}`);
    info(`Run ${bold("npx anexui list")} to see all available components.`);
    process.exit(1);
  }

  // Resolve deps
  const toInstall = resolveDeps(ids, allComponents);
  const extras = toInstall.filter((c) => !ids.includes(c.id));
  if (extras.length) {
    info(`Also adding required dependencies: ${bold(extras.map((c) => c.label).join(", "))}`);
  }

  // Detect output dir
  const cwd = process.cwd();
  const srcExists = existsSync(join(cwd, "src"));
  const outDir = srcExists ? join(cwd, "src", "components") : join(cwd, "components");

  console.log();
  info(`Writing to ${bold(outDir.replace(cwd, "."))}`);
  console.log();

  // Ensure lib/cn.ts
  const cnPath = srcExists ? join(cwd, "src", "lib", "cn.ts") : join(cwd, "lib", "cn.ts");
  if (!existsSync(cnPath)) {
    try {
      const cnContent = await fetchText(`${LIB_BASE}/cn.ts`);
      await mkdir(dirname(cnPath), { recursive: true });
      await writeFile(cnPath, cnContent, "utf8");
      ok(`lib/cn.ts`);
    } catch (e) {
      warn(`Could not fetch lib/cn.ts: ${e.message}`);
    }
  }

  // Download each component
  for (const comp of toInstall) {
    const destDir = join(outDir, comp.folderName);
    await mkdir(destDir, { recursive: true });

    for (const file of comp.files) {
      const url = `${COMPONENTS_BASE}/${comp.categorySlug}/${comp.folderName}/${file}`;
      try {
        const content = await fetchText(url);
        await writeFile(join(destDir, file), content, "utf8");
      } catch (e) {
        err(`Failed to fetch ${comp.folderName}/${file}: ${e.message}`);
        process.exit(1);
      }
    }
    ok(`${bold(comp.label)} ${dim(`→ components/${comp.folderName}/`)}`);
  }

  console.log();
  console.log(`${c.green}${c.bold}Done!${c.reset} ${toInstall.length} component(s) added.`);
  console.log();
  console.log(dim("Make sure you have Tailwind CSS v4 configured in your project."));
  console.log(dim(`Docs: https://anexui.com/docs/getting-started`));
}

async function cmdList(filter) {
  info(`Fetching registry…`);
  let registry;
  try {
    const json = await fetchText(REGISTRY_JSON);
    registry = JSON.parse(json);
  } catch (e) {
    err(`Could not fetch registry: ${e.message}`);
    process.exit(1);
  }

  const allComponents = registry.components;
  let items = allComponents;
  if (filter) {
    const q = filter.toLowerCase();
    items = allComponents.filter(
      (c) =>
        c.id.includes(q) ||
        c.label.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );
  }

  if (!items.length) {
    warn(`No components match "${filter}".`);
    return;
  }

  // Group by category
  const grouped = new Map();
  for (const comp of items) {
    if (!grouped.has(comp.category)) grouped.set(comp.category, []);
    grouped.get(comp.category).push(comp);
  }

  console.log();
  console.log(`${c.violet}${c.bold}Anex UI — ${allComponents.length} components${c.reset}`);
  console.log();
  for (const [category, comps] of grouped) {
    console.log(`${c.bold}${category}${c.reset}`);
    for (const comp of comps) {
      const deps = comp.requires?.length ? dim(` (requires: ${comp.requires.join(", ")})`) : "";
      console.log(`  ${c.cyan}${comp.id.padEnd(16)}${c.reset} ${comp.description}${deps}`);
    }
    console.log();
  }
}

function cmdHelp() {
  console.log();
  console.log(`${c.violet}${c.bold}Anex UI CLI${c.reset}  ${dim(`v0.1.0`)}`);
  console.log();
  console.log(`${c.bold}Usage${c.reset}`);
  console.log(`  npx anexui add <component-id> [more-ids...]`);
  console.log(`  npx anexui list [filter]`);
  console.log(`  npx anexui help`);
  console.log();
  console.log(`${c.bold}Examples${c.reset}`);
  console.log(`  ${dim("npx anexui add button")}`);
  console.log(`  ${dim("npx anexui add modal drawer tooltip")}`);
  console.log(`  ${dim("npx anexui list form")}`);
  console.log();
  console.log(`${c.bold}Docs${c.reset}  https://anexui.com/docs/getting-started`);
  console.log();
}

// ── Entry point ───────────────────────────────────────────────────────────────

const [,, cmd, ...args] = process.argv;

switch (cmd) {
  case "add":
    cmdAdd(args);
    break;
  case "list":
    cmdList(args[0]);
    break;
  case "help":
  case "--help":
  case "-h":
  case undefined:
    cmdHelp();
    break;
  default:
    err(`Unknown command: ${bold(cmd)}`);
    cmdHelp();
    process.exit(1);
}
