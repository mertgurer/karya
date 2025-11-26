"use client";

import { MenuButtonProps } from "./Navbar.types";

export const MenuButton = ({ isOpen, setIsOpen }: MenuButtonProps) => {
  return (
    <button
      onClick={async () => setIsOpen(!isOpen)}
      className="flex flex-col gap-1 p-1 z-20 aspect-square justify-center md:hidden"
    >
      <div
        className={`w-6 h-0.5 duration-500 ease-in-out bg-on-primary ${
          isOpen
            ? "origin-left rotate-45 scale-x-35 -translate-y-[2.5px] translate-x-[3.5px]"
            : ""
        }`}
      ></div>
      <div
        className={`w-6 h-0.5 duration-700 ease-in-out bg-on-primary ${
          isOpen ? "-rotate-45" : ""
        }`}
      ></div>
      <div
        className={`w-6 h-0.5 duration-500 ease-in-out bg-on-primary ${
          isOpen
            ? "origin-right rotate-45 scale-x-35 translate-y-[2.5px] -translate-x-[3.5px]"
            : ""
        }`}
      ></div>
    </button>
  );
};
