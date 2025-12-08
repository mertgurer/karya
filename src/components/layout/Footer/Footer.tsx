"use client";

import { Link, routing, usePathname } from "@/i18n";
import Image from "next/image";
import { SpanL } from "@/components/ui/SpanL";
import Logo from "@/assets/images/logo.png";
import TrFlag from "@/assets/images/flags/tr.png";
import UkFlag from "@/assets/images/flags/uk.png";
import { LinkL } from "@/components/ui/LinkL";

const Flags = {
  tr: TrFlag,
  en: UkFlag,
};

export const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="bg-primary text-on-primary px-40 py-8 flex gap-20">
      <div className="flex items-center gap-10 justify-between w-full">
        <Link href={"/"} className="relative h-16 aspect-[2]">
          <Image
            src={Logo}
            alt={"logo"}
            fill
            priority
            sizes="100%"
            className="object-contain"
          />
        </Link>
        <div className="flex flex-col text-sm gap-2 items-end">
          <div className="flex gap-2 mb-5">
            {routing.locales.map((locale) => {
              return (
                <Link
                  key={locale}
                  href={pathname}
                  locale={locale}
                  className="font-light relative h-7 aspect-[1.7]"
                >
                  <Image
                    src={Flags[locale as keyof typeof Flags]}
                    alt={"logo"}
                    fill
                    priority
                    sizes="100%"
                    className="object-cover"
                  />
                </Link>
              );
            })}
          </div>
          <div className="flex gap-7">
            <LinkL href="privacy-policy" className="font-medium underline">
              Footer.privacyPolicy
            </LinkL>
            <LinkL href="terms-of-service" className="font-medium underline">
              Footer.termsOfService
            </LinkL>
          </div>
          <SpanL className="font-light">Footer.copyRight</SpanL>
        </div>
      </div>
      {/* <div className="flex flex-col self-end text-sm font-light">
        {NavigationLinks.map((link, index) => (
          <LinkL key={index} href={link.href}>
            {`Navbar.${link.label}`}
          </LinkL>
        ))}
      </div> */}
    </div>
  );
};
