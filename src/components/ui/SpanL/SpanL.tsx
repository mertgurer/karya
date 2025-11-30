"use client";

import { useTranslations } from "next-intl";
import { AnimatedSpanLProps } from "./SpanL.types";
import { motion } from "motion/react";

export const SpanL = ({
  children,
  className,
  style,
  ...rest
}: AnimatedSpanLProps) => {
  const t = useTranslations();

  return (
    <motion.span
      style={style}
      className={`text-balance ${className}`}
      {...rest}
    >
      {t(children)}
    </motion.span>
  );
};
