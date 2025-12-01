"use client";

import { Link } from "@/i18n";
import { AnimatedLinkLProps } from "./LinkL.types";
import { SpanL } from "../SpanL";
import { motion } from "motion/react";

export const LinkL = ({
  children,
  style,
  className,
  beforeElement,
  afterElement,
  disabled = false,
  onClick,
  href,
  ...rest
}: AnimatedLinkLProps) => {
  return (
    <motion.div {...rest}>
      <Link
        href={disabled ? "#" : href}
        style={{ ...style }}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          onClick?.(e);
        }}
        className={`flex items-center gap-2 text-balance w-max px-2 py-1 ${className} ${
          disabled ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        {beforeElement}
        <SpanL>{children}</SpanL>
        {afterElement}
      </Link>
    </motion.div>
  );
};
