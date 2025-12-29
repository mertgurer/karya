import { Props } from "@/types";
import { HTMLMotionProps } from "motion/react";

export type AnimatedFileUploaderProps = FileUploaderLProps &
  HTMLMotionProps<"input">;

export interface FileUploaderLProps extends Props {
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  acceptedFileTypes?: string[];
  value?: File | null;
  onFileChange?: (file: File | null) => void;
  disabled?: boolean;
}
