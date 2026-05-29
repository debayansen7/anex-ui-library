import { useState, useRef } from "react";
import { cn } from "../../../lib/cn";
import type { CodeBlockProps } from "./CodeBlock.Type";
import styles from "./CodeBlock.module.css";

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function CodeBlock({ children, language, className }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = preRef.current?.innerText ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.header}>
        {language && <span className={styles.language}>{language}</span>}
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? "Copied!" : "Copy code"}
          className={cn(styles.copyBtn, copied && styles.copyBtnCopied)}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre ref={preRef} className={styles.pre}>
        <code className={styles.code}>{children}</code>
      </pre>
    </div>
  );
}
