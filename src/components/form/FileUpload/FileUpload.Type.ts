export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  /** Max file size in bytes */
  maxSize?: number;
  onChange?: (files: File[]) => void;
  disabled?: boolean;
  label?: string;
  hint?: string;
  className?: string;
  name?: string;
}
