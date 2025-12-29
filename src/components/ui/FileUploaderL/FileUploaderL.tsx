"use client";

import React, { useMemo } from "react";
import { useTranslations } from "next-intl";
import { SpanL } from "../SpanL";
import { motion } from "motion/react";
import { AnimatedFileUploaderProps } from "./FileUploaderL.types";

export const FileUploaderL = ({
  className,
  style,
  name,
  label,
  placeholder,
  required,
  acceptedFileTypes = [],
  value,
  onFileChange,
  ...rest
}: AnimatedFileUploaderProps) => {
  const t = useTranslations();

  const acceptString = useMemo(() => {
    return acceptedFileTypes.length > 0
      ? acceptedFileTypes.join(",")
      : undefined;
  }, [acceptedFileTypes]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (onFileChange) {
      onFileChange(file);
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full text-primary">
      {label && (
        <div className="flex gap-1 ml-1">
          <SpanL>{label}</SpanL> {required && "*"}
        </div>
      )}

      <motion.input
        type="file"
        name={name}
        required={required}
        accept={acceptString}
        onChange={handleFileChange}
        style={style}
        value={value === null ? "" : undefined}
        className={`
          bg-surface rounded-sm px-4 py-3 shadow-md shadow-black/10 cursor-pointer
          text-sm text-primary/80
          file:mr-4 file:py-1 file:px-3
          file:rounded-sm file:border-0
          file:text-xs file:font-semibold
          file:bg-primary/10 file:text-primary
          hover:file:bg-primary/20
          transition-all duration-200
          ${className || ""}
        `}
        {...rest}
      />

      {acceptedFileTypes.length > 0 && (
        <span className="text-xs text-primary/50 ml-1">
          {t("Common.acceptedFormats")}: {acceptedFileTypes.join(", ")}
        </span>
      )}
    </div>
  );
};
