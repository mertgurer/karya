import { Props } from "@/types";

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
