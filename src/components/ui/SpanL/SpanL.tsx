"use client";

import { useTranslations } from "next-intl";
import { AnimatedSpanLProps } from "./SpanL.types";
import { motion } from "motion/react";

export const SpanL = ({
  children,
  className,
  style,
  noWrap = false,
  upperCase = false,
  ...rest
}: AnimatedSpanLProps) => {
  const t = useTranslations();

  const text = upperCase ? t(children).toUpperCase() : t(children);
  const lines = text.split(/<br\s*\/?>/i);

  return (
    <motion.span
      style={style}
      className={`${noWrap ? "" : "text-balance"} ${className}`}
      {...rest}
    >
      {lines.map((line, index) => (
        <span key={index}>
          {line}
          {index < lines.length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </span>
      ))}
    </motion.span>
  );
};
