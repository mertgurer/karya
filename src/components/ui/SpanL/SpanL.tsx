"use client";

import { useTranslations } from "next-intl";
import { AnimatedSpanLProps } from "./SpanL.types";
import { motion } from "motion/react";
import { Fragment } from "react";

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
      className={`${noWrap ? "2" : "text-balance 1"} ${
        className ? className : ""
      }`}
      {...rest}
    >
      {lines.map((line, index) => (
        <Fragment key={index}>
          {line}
          {index < lines.length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </Fragment>
      ))}
    </motion.span>
  );
};
