"use client";

import { useTranslations } from "next-intl";
import { SpanLProps } from "./SpanL.types";

export const SpanL = ({ children, className, style }: SpanLProps) => {
  const t = useTranslations();

  return (
    <span style={style} className={`text-balance ${className}`}>
      {t(children)}
    </span>
  );
};
