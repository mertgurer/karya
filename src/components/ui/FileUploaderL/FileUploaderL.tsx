"use client";

import React, { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { SpanL } from "../SpanL";
import { motion } from "motion/react";
import { AnimatedFileUploaderProps } from "./FileUploaderL.types";
import toast from "react-hot-toast";

export const FileUploaderL = ({
  className,
  style,
  name,
  label,
  placeholder,
  buttonLabel,
  required,
  acceptedFileTypes = [],
  value,
  onFileChange,
  ...rest
}: AnimatedFileUploaderProps) => {
  const t = useTranslations();
  const locale = useLocale();
  const [internalFile, setInternalFile] = useState<File | null>(null);
  const currentValidFile = value !== undefined ? value : internalFile;

  const acceptString = useMemo(() => {
    return acceptedFileTypes.length > 0 ? acceptedFileTypes.join(",") : undefined;
  }, [acceptedFileTypes]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files?.[0] || null;

    if (newFile && acceptedFileTypes.length > 0) {
      const isAllowed = acceptedFileTypes.some((type) => newFile.name.toLowerCase().endsWith(type.toLowerCase()));

      if (!isAllowed) {
        toast.error(
          t("Common.invalidFileType", {
            types: acceptedFileTypes.join(", ").toLocaleUpperCase(locale),
          }),
        );

        const dt = new DataTransfer();

        if (currentValidFile) {
          dt.items.add(currentValidFile);
        }
        e.target.files = dt.files;
        return;
      }
    }

    setInternalFile(newFile);

    if (onFileChange) {
      onFileChange(newFile);
    }
  };

  const displayText = currentValidFile?.name ? currentValidFile.name : placeholder ? t(placeholder) : t("Common.noFileChosen");

  const buttonText = buttonLabel ? t(buttonLabel) : t("Common.chooseFile");

  return (
    <motion.div className="flex flex-col gap-1 w-full" {...rest}>
      {label && (
        <div className="flex gap-1 ml-1">
          <SpanL>{label}</SpanL> {required && "*"}
        </div>
      )}

      <motion.label
        style={style}
        className={`
          group flex items-center gap-4
          bg-surface rounded-sm px-4 py-3 shadow-md shadow-black/10 cursor-pointer
          text-sm
          transition-colors duration-200
          hover:bg-surface/80
          ${className || ""}
        `}
      >
        <input type="file" name={name} required={required && !currentValidFile} accept={acceptString} onChange={handleFileChange} className="hidden" />

        <span className="py-1 px-3 rounded-sm text-xs font-semibold bg-primary/10 text-primary whitespace-nowrap group-hover:bg-primary/20 transition-colors">
          {buttonText}
        </span>

        <span className={`truncate ${!currentValidFile ? "opacity-60" : ""}`}>{displayText}</span>
      </motion.label>

      {acceptedFileTypes.length > 0 && (
        <span className="text-xs text-primary/50 ml-1">
          {t("Common.acceptedFormats")}: {acceptedFileTypes.join(", ")}
        </span>
      )}
    </motion.div>
  );
};
