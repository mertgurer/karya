"use client";

import { Themes, useTheme } from "@/hooks/useTheme";
import { useTranslations } from "next-intl";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations("Theme");

  return (
    <button
      className="flex items-center gap-2 relative pl-4 pr-10 py-1 rounded bg-background text-on-background"
      onClick={toggleTheme}
    >
      {t(theme === Themes.LIGHT ? "darkMode" : "lightMode")}
      <div className="absolute right-2">
        {theme === Themes.LIGHT ? (
          <MdDarkMode size={20} />
        ) : (
          <MdLightMode size={20} />
        )}
      </div>
    </button>
  );
};
