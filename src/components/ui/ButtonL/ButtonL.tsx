"use client";

import { AnimatedButtonLProps } from "./ButtonL.types";
import { SpanL } from "../SpanL/SpanL";
import { motion } from "motion/react";

export const ButtonL = ({
  children,
  style,
  className,
  beforeElement,
  afterElement,
  disabled = false,
  onClick,
  type = "button",
  ...rest
}: AnimatedButtonLProps) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      style={{ ...style }}
      disabled={disabled}
      className={`flex items-center gap-2 text-balance w-max px-4 py-1 rounded-sm ${className} ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
      {...rest}
    >
      {beforeElement}
      <SpanL>{children}</SpanL>
      {afterElement}
    </motion.button>
  );
};
