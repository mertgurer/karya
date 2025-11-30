import { LocaleButtonProps } from "@/types";
import { HTMLMotionProps } from "motion/react";

export type AnimatedLinkLProps = LinkLProps & HTMLMotionProps<"div">;

export interface LinkLProps extends LocaleButtonProps {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
