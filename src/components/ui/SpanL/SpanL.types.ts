import { LocaleProps } from "@/types/localeProps";
import { HTMLMotionProps } from "motion/react";

export type AnimatedSpanLProps = SpanLProps & HTMLMotionProps<"span">;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SpanLProps extends LocaleProps {}
