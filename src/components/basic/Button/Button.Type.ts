export type ButtonType = {
  text: string;
  onClickFunctions?: () => void;
  className: string;
  size?: "xs" | "sm" | "md" | "lg";
};

export type ButtonProps = Partial<ButtonType>;
