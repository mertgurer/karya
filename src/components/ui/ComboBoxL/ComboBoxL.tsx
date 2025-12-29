"use client";

import React, { useState, useEffect } from "react";
import { AnimatedComboBoxLProps } from "./ComboBoxL.types";
import { useTranslations } from "next-intl";
import { SpanL } from "../SpanL";
import { motion } from "motion/react";
import { FaChevronDown } from "react-icons/fa6";

export const ComboBoxL = ({
  className,
  style,
  name,
  label,
  placeholder,
  required,
  options,
  defaultValue,
  value,
  onValueChange,
  onBlur,
  ...rest
}: AnimatedComboBoxLProps) => {
  const t = useTranslations();
  const placeHolderText = placeholder ? t(placeholder) : null;

  const [internalValue, setInternalValue] = useState(defaultValue || "");

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const currentValue = value !== undefined ? value : internalValue;
  const isPlaceholderActive = currentValue === "";

  const commonProps = {
    className: `bg-surface rounded-sm w-full px-4 py-3 shadow-md shadow-black/10 appearance-none cursor-pointer ${
      isPlaceholderActive ? "text-primary/50" : "text-primary"
    } ${className || ""}`,

    style,
    name,
    required,
    value: currentValue,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newVal = e.target.value;
      setInternalValue(newVal);
      if (onValueChange && !onBlur) {
        onValueChange(newVal);
      }
    },
    onBlur:
      onValueChange && onBlur
        ? (e: React.FocusEvent<HTMLSelectElement>) =>
            onValueChange(e.target.value)
        : undefined,
    ...rest,
  };

  return (
    <div className="flex flex-col gap-1 w-full text-primary relative">
      {label && (
        <div className="flex gap-1 ml-1">
          <SpanL>{label}</SpanL> {required && "*"}
        </div>
      )}

      <div className="relative w-full">
        <motion.select {...commonProps}>
          <option value="" disabled hidden className="text-primary/40">
            {placeHolderText
              ? `${placeHolderText}${required && !label ? " *" : ""}`
              : ""}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-primary"
            >
              {t(option.label)}
            </option>
          ))}
        </motion.select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary/60">
          <FaChevronDown size={12} />
        </div>
      </div>
    </div>
  );
};
