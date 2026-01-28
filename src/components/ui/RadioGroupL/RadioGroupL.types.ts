import { Props } from "@/types";
import { HTMLMotionProps } from "motion/react";

export interface RadioOption {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupLProps extends Omit<Props, "className" | "style"> {
  name: string;
  options: RadioOption[];
  label?: string;
  required?: boolean;
  disabled?: boolean;
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];

  onValueChange?: (value: string | string[]) => void;
}

export type AnimatedRadioGroupProps = RadioGroupLProps & Omit<HTMLMotionProps<"div">, "onChange">;
