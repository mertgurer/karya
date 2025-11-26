"use client";

import { LocaleSwitch } from "@/components/ui/LocaleSwitch";
import { MenuButton } from "./MenuButton";
import { useState } from "react";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed flex justify-between items-center bg-primary text-on-primary w-full h-[72px] px-20 py-4 z-20 max-md:h-16 max-md:px-8">
      Navbar
      <div
        className={`
          flex gap-4 items-center justify-center
          max-md:absolute max-md:flex-col max-md:py-10 max-md:px-6
          max-md:bg-surface max-md:backdrop-blur-sm max-md:rounded-bl-xl 
          max-md:items-stretch max-md:top-16 max-md:right-0 max-md:w-max max-md:min-w-1/2  
          ${isMenuOpen ? "" : "max-md:translate-x-full"} duration-500`}
      >
        <ThemeSwitch />
        <LocaleSwitch />
      </div>
      {<MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />}
    </div>
  );
};
