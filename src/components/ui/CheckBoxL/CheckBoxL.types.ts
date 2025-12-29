import { Props } from "@/types";
import { HTMLMotionProps } from "motion/react";

export type AnimatedCheckboxLProps = CheckboxLProps & HTMLMotionProps<"label">;

export interface CheckboxLProps extends Props {
  name?: string;
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}
