import { LocaleProps } from "@/types/localeProps";
import { HTMLMotionProps } from "motion/react";

export type AnimatedSpanLProps = SpanLProps & HTMLMotionProps<"span">;
export interface SpanLProps extends LocaleProps {
  noWrap?: boolean;
  upperCase?: boolean;
}
