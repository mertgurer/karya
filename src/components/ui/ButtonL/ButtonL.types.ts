import { LocaleButtonProps } from "@/types";
import { ButtonHTMLAttributes } from "react";

export interface ButtonLProps extends LocaleButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
