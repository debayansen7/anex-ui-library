import React, { useState, useRef } from "react";
import { cn } from "../../../lib/cn";
import type { FileUploadProps } from "./FileUpload.Type";
import styles from "./FileUpload.module.css";

function UploadIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M10.667 21.333A5.333 5.333 0 0 1 8 11.467a8 8 0 0 1 15.68-1.134A5.333 5.333 0 0 1 22.667 21.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.333 21.333L16 18.667l2.667 2.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 18.667V26.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M9.333 1.333H4a1.333 1.333 0 0 0-1.333 1.334v10.666A1.333 1.333 0 0 0 4 14.667h8a1.333 1.333 0 0 0 1.333-1.334V5.333L9.333 1.333z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.333 1.333v4h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function FileUpload({
  accept,
  multiple = false,
  maxSize,
  onChange,
  disabled = false,
  label = "Click to upload or drag and drop",
  hint,
  className,
  name,
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFiles = (incoming: FileList | null) => {
    if (!incoming || disabled) return;

    const newErrors: string[] = [];
    const accepted: File[] = [];

    Array.from(incoming).forEach((file) => {
      if (maxSize && file.size > maxSize) {
        newErrors.push(`"${file.name}" exceeds the maximum size of ${formatBytes(maxSize)}.`);
      } else {
        accepted.push(file);
      }
    });

    setErrors(newErrors);

    if (accepted.length === 0) return;

    const updated = multiple ? [...files, ...accepted] : accepted;
    setFiles(updated);
    onChange?.(updated);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    processFiles(e.dataTransfer.files);
  };

  const handleClick = () => {
    if (!disabled) inputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    processFiles(e.target.files);
    // Reset input so same file can be re-selected
    e.target.value = "";
  };

  const handleRemove = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onChange?.(updated);
  };

  return (
    <div className={cn(styles.root, className)}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        name={name}
        disabled={disabled}
        onChange={handleInputChange}
        style={{ display: "none" }}
        aria-label={label}
      />

      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        className={cn(
          styles.zone,
          dragOver && styles.zoneDragOver,
          disabled && styles.zoneDisabled
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
        aria-disabled={disabled}
      >
        <span className={styles.zoneIcon}>
          <UploadIcon />
        </span>
        <span className={styles.zoneLabel}>{label}</span>
        {hint && <span className={styles.zoneHint}>{hint}</span>}
        {accept && !hint && (
          <span className={styles.zoneHint}>Accepted: {accept}</span>
        )}
        {maxSize && (
          <span className={styles.zoneHint}>Max size: {formatBytes(maxSize)}</span>
        )}
      </div>

      {files.length > 0 && (
        <ul className={styles.fileList} role="list" aria-label="Selected files">
          {files.map((file, index) => (
            <li key={`${file.name}-${index}`} className={styles.fileItem}>
              <span className={styles.fileIcon}>
                <FileIcon />
              </span>
              <div className={styles.fileInfo}>
                <p className={styles.fileName}>{file.name}</p>
                <p className={styles.fileSize}>{formatBytes(file.size)}</p>
              </div>
              <button
                type="button"
                className={styles.removeBtn}
                onClick={() => handleRemove(index)}
                aria-label={`Remove ${file.name}`}
              >
                <XIcon />
              </button>
            </li>
          ))}
        </ul>
      )}

      {errors.length > 0 && (
        <ul className={styles.errors} role="alert" aria-label="Upload errors">
          {errors.map((err, i) => (
            <li key={i} className={styles.error}>{err}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
