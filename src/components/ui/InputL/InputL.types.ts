import { Props } from "@/types";
import { HTMLMotionProps } from "motion/react";

export type AnimatedInputLProps = InputLProps &
  HTMLMotionProps<"input"> &
  HTMLMotionProps<"textarea">;

export enum InputType {
  TEXT = "text",
  TEXT_AREA = "text-area",
  PASSWORD = "password",
  EMAIL = "email",
}

export interface InputLProps extends Props {
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: InputType;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  onBlur?: boolean;
}
