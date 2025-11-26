import { LocaleButtonProps } from "@/types";

export interface LinkLProps extends LocaleButtonProps {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
