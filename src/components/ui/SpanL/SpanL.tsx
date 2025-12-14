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

  return (
    <motion.span
      style={style}
      className={`${noWrap ? "" : "text-balance"} ${className}`}
      {...rest}
    >
      {upperCase ? t(children).toUpperCase() : t(children)}
    </motion.span>
  );
};
