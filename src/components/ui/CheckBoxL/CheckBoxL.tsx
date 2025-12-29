"use client";

import React from "react";
import { SpanL } from "../SpanL";
import { motion } from "motion/react";
import { AnimatedCheckboxLProps } from "./CheckBoxL.types";

export const CheckboxL = ({
  className,
  style,
  name,
  label,
  required,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  ...rest
}: AnimatedCheckboxLProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onCheckedChange) {
      onCheckedChange(e.target.checked);
    }
  };

  return (
    <motion.label
      className={`
        flex items-center gap-3 w-max px-2 py-1 
        cursor-pointer select-none
        transition-colors
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className || ""}
      `}
      style={style}
      {...rest}
    >
      <input
        type="checkbox"
        name={name}
        required={required}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={handleChange}
        disabled={disabled}
        className="w-4 aspect-square accent-primary cursor-pointer focus:ring-0"
      />

      <div className="flex gap-1 text-primary">
        <SpanL>{label}</SpanL>
        {required && <span className="text-red-500">*</span>}
      </div>
    </motion.label>
  );
};
