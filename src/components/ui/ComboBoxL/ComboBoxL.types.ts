import { Props } from "@/types";
import { HTMLMotionProps } from "motion/react";

export type AnimatedComboBoxLProps = ComboBoxLProps & HTMLMotionProps<"select">;

export interface SelectOption {
  value: string;
  label: string;
}

export interface ComboBoxLProps extends Props {
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  options: SelectOption[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  onBlur?: boolean;
}
