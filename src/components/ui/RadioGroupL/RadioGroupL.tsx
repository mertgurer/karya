"use client";

import React, { useState, useEffect } from "react";
import { SpanL } from "../SpanL";
import { motion } from "motion/react";
import { AnimatedRadioGroupProps } from "./RadioGroupL.types";

export const RadioGroupL = ({
  className,
  style,
  name,
  label,
  required,
  options,
  type = "single",
  value: controlledValue, // Renamed to distinguish
  defaultValue,
  onValueChange,
  disabled: groupDisabled,
  ...rest
}: AnimatedRadioGroupProps) => {
  // 1. Determine if the component is controlled
  const isControlled = controlledValue !== undefined;

  // 2. Initialize internal state for Uncontrolled mode
  //    - Single: defaults to string (defaultValue or "")
  //    - Multiple: defaults to array (defaultValue or [])
  const [internalValue, setInternalValue] = useState<string | string[]>(() => {
    if (defaultValue !== undefined) return defaultValue;
    return type === "single" ? "" : [];
  });

  // 3. Calculate the "Effective Value" (The one we actually use)
  const effectiveValue = isControlled ? controlledValue : internalValue;

  // Helper: Check if an option is selected
  const isChecked = (optionId: string) => {
    if (Array.isArray(effectiveValue)) {
      return effectiveValue.includes(optionId);
    }
    return effectiveValue === optionId;
  };

  // Helper: Handle clicks
  const handleChange = (optionId: string, isSelected: boolean) => {
    let newValue: string | string[];

    if (type === "single") {
      // Radio Logic: Once clicked, it's set. Cannot uncheck a radio by clicking it.
      if (!isSelected) return;
      newValue = optionId;
    } else {
      // Checkbox Logic: Add or Remove
      const currentArray = Array.isArray(effectiveValue) ? [...effectiveValue] : [];
      if (isSelected) {
        if (!currentArray.includes(optionId)) newValue = [...currentArray, optionId];
        else newValue = currentArray;
      } else {
        newValue = currentArray.filter((id) => id !== optionId);
      }
    }

    // A. Update internal state (if uncontrolled)
    if (!isControlled) {
      setInternalValue(newValue);
    }

    // B. Notify parent (always)
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <motion.div className={`flex flex-col gap-2 ${className || ""}`} style={style} {...rest}>
      {label && (
        <div className="flex gap-1 mb-1 text-primary">
          <SpanL className="font-medium">{label}</SpanL>
          {required && <span className="text-red-500">*</span>}
        </div>
      )}

      <div className="flex gap-16">
        {options.map((option) => {
          const isDisabled = groupDisabled || option.disabled;
          const active = isChecked(option.id);

          return (
            <motion.label
              key={option.id}
              className={`
                group flex items-center gap-3 w-max px-2 py-1 
                cursor-pointer select-none
                transition-opacity duration-200
                ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"}
              `}
            >
              {/* THE REAL INPUT 
                  This ensures it works with standard HTML <form> submission.
              */}
              <input
                type={type === "single" ? "radio" : "checkbox"}
                name={name} // All inputs share the name so forms group them
                value={option.id}
                disabled={isDisabled}
                checked={active}
                onChange={(e) => handleChange(option.id, e.target.checked)}
                className="w-4 aspect-square accent-primary cursor-pointer focus:ring-0"
                // If required, only the radio group technically needs one required input,
                // but standard HTML allows putting it on all.
                required={required && type === "single" ? true : undefined}
              />

              <div className="flex gap-1 text-primary group-hover:translate-x-0.5 duration-200">
                <SpanL>{option.label}</SpanL>
              </div>
            </motion.label>
          );
        })}
      </div>
    </motion.div>
  );
};
