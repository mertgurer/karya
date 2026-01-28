import { Props } from "@/types";
import { HTMLMotionProps } from "motion/react";

export interface FileUploaderLProps extends Omit<Props, "className" | "style"> {
  name?: string;
  label?: string;
  placeholder?: string;
  buttonLabel?: string;
  required?: boolean;
  acceptedFileTypes?: string[];
  value?: File | null;
  onFileChange?: (file: File | null) => void;
  disabled?: boolean;
}

export type AnimatedFileUploaderProps = FileUploaderLProps & Omit<HTMLMotionProps<"input">, "value" | "onChange" | "type">;
