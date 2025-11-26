import { LocaleProps } from "./localeProps";

export interface LocaleButtonProps extends LocaleProps {
  beforeElement?: React.ReactNode;
  afterElement?: React.ReactNode;
  disabled?: boolean;
}
