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
  children,
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
        flex items-start gap-3 w-full px-2 py-1 
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
        className="w-4 aspect-square accent-primary cursor-pointer mt-0.5 focus:ring-0"
      />

      <div className="flex gap-1 items-center [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:opacity-70 [&_a]:transition-opacity">
        {children ? (
          <span
            onClick={(e) => {
              if ((e.target as HTMLElement).tagName === "A") e.stopPropagation();
            }}
          >
            {children}
          </span>
        ) : label ? (
          <SpanL>{label}</SpanL>
        ) : (
          ""
        )}
        {required && <span className="text-red-500">*</span>}
      </div>
    </motion.label>
  );
};
