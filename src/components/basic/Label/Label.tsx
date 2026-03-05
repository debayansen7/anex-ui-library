import React from "react";
import type { LabelProps } from "./Label.Type";
const Label = ({ text, className }: LabelProps) => {
  return <label className={className}>{text}</label>;
};

export default Label;
