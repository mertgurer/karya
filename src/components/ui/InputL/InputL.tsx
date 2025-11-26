"use client";

import React from "react";
import { InputLProps, InputType } from "./InputL.types";
import { useTranslations } from "next-intl";
import { SpanL } from "../SpanL";

export const InputL = ({
  className,
  style,
  name,
  label,
  placeholder,
  required,
  type = InputType.TEXT,
  defaultValue,
  value,
  onValueChange,
  onBlur,
}: InputLProps) => {
  const t = useTranslations();

  const commonProps = {
    className: `border border-primary/30 rounded-xl px-4 py-2 ${
      className || ""
    }`,
    style,
    name,
    placeholder: placeholder ? t(placeholder) : "",
    required,
    value,
    defaultValue,
    onChange:
      onValueChange && !onBlur
        ? (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            onValueChange(e.target.value)
        : undefined,
    onBlur:
      onValueChange && onBlur
        ? (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            onValueChange(e.target.value)
        : undefined,
  };

  return (
    <div className="flex flex-col gap-1 w-full text-primary">
      {label && (
        <div className="flex gap-1 ml-1">
          <SpanL>{label}</SpanL> {required && "*"}
        </div>
      )}

      {type === "text-area" ? (
        <textarea
          {...commonProps}
          className={`${commonProps.className} min-h-44 max-md:min-h-32`}
        />
      ) : (
        <input
          {...commonProps}
          type={type === InputType.PASSWORD ? "password" : "text"}
        />
      )}
    </div>
  );
};
