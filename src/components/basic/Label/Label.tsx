import React from "react";
import { LabelProps } from "./Label";
const Label = ({ text, className }: LabelProps) => {
  return <label className={className}>{text}</label>;
};

export default Label;
