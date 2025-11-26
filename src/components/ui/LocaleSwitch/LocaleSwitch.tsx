"use client";

import { ChangeEvent } from "react";
import { routing, usePathname, useRouter } from "@/i18n";
import { useLocale, useTranslations } from "next-intl";
import { MdArrowDropDown } from "react-icons/md";

export const LocaleSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();

  const locale = useLocale();
  const t = useTranslations("Locale");

  return (
    <div className="flex relative items-center rounded overflow-hidden bg-background text-on-background">
      <select
        className="pl-4 pr-8 py-1 appearance-none bg-background"
        defaultValue={locale}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          const nextLocale = event.target
            .value as (typeof routing.locales)[number];

          if (nextLocale !== locale) {
            router.replace(pathname, { locale: nextLocale });
          }
        }}
      >
        {routing.locales.map((x) => (
          <option key={x} value={x} className="font-light">
            {t(x)}
          </option>
        ))}
      </select>
      <MdArrowDropDown
        size={30}
        className="absolute right-1 pointer-events-none"
      />
    </div>
  );
};
