"use client";

import { ButtonLProps } from "./ButtonL.types";
import { SpanL } from "../SpanL/SpanL";

export const ButtonL = ({
  children,
  style,
  className,
  beforeElement,
  afterElement,
  disabled = false,
  onClick,
  type = "button",
}: ButtonLProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...style }}
      disabled={disabled}
      className={`flex items-center gap-2 text-balance w-max bg-primary px-4 py-1 rounded-sm ${className} ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      {beforeElement}
      <SpanL>{children}</SpanL>
      {afterElement}
    </button>
  );
};
