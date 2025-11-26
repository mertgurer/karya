"use client";

import { Link } from "@/i18n";
import { LinkLProps } from "./LinkL.types";
import { SpanL } from "../SpanL";

export const LinkL = ({
  children,
  style,
  className,
  beforeElement,
  afterElement,
  disabled = false,
  onClick,
  href,
}: LinkLProps) => {
  return (
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
      className={`flex items-center gap-2 text-balance w-max bg-primary px-4 py-1 rounded-sm ${className} ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      {beforeElement}
      <SpanL>{children}</SpanL>
      {afterElement}
    </Link>
  );
};
