import { Dispatch, SetStateAction } from "react";

export interface MenuButtonProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
