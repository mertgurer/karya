import { LocaleButtonProps } from "@/types";
import { ButtonHTMLAttributes } from "react";
import { HTMLMotionProps } from "motion/react";

export type AnimatedButtonLProps = ButtonLProps & HTMLMotionProps<"button">;

export interface ButtonLProps extends LocaleButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
