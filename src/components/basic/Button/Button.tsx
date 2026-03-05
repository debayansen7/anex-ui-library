import React from "react";
import type { ButtonProps } from "./Button.Type";

const Button = ({ className, text, onClickFunction, size }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClickFunction}
      data-size={size || "md"}
    >
      {text}
    </button>
  );
};

export default Button;
