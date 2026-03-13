"use client";

import { MenuButton } from "./MenuButton";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import { Flags, NavigationLinks, SCROLL_UPDATE_THRESHOLD } from "@/constants";
import { NavigationButton } from "./NavigationButton";
import { useLenis } from "lenis/react";
import { Link, routing, usePathname } from "@/i18n";
import { easeInOut, motion } from "motion/react";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";

export const Navbar = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileLanguage, setMobileLanguage] = useState(false);

  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onScroll = ({ scroll }: { scroll: number }) => {
      setIsScrolled(scroll >= SCROLL_UPDATE_THRESHOLD);
    };

    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  useEffect(() => {
    if (!isScrolled) {
      setIsMenuOpen(false);
    }
  }, [isScrolled]);

  useEffect(() => {
    if (!mobileLanguage) return;
    const handler = (e: MouseEvent) => setMobileLanguage(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [mobileLanguage]);

  const hiddenNavbarPaths = ["/", "/projects"];
  const hideNavbar = hiddenNavbarPaths.some((path) => pathname.includes(path));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.7 }}
      className={`
        fixed flex justify-between items-center text-on-primary w-full z-30 px-32
         ${
           isScrolled || !hideNavbar || isMenuOpen
             ? "bg-primary-variant/90 backdrop-blur-sm h-[72px] shadow-lg shadow-black/10"
             : "h-20 md:pt-6 max-md:-translate-y-full"
         }
        max-md:h-20 max-md:px-8 max-2xl:px-14 duration-500`}
    >
      <Link href={"/"} className={`relative h-[52px] aspect-[2.29] ${isScrolled || !hideNavbar ? "" : "scale-110"} duration-300`}>
        <Image src={Logo} alt={"logo"} fill priority sizes="100%" className="object-contain" />
      </Link>
      <div
        className={`
                    flex gap-3 items-center justify-center max-md:flex-col
                    max-md:absolute max-md:py-10 max-md:pl-12 max-md:pr-8 max-md:gap-5
                    max-md:bg-primary-variant/90 max-md:backdrop-blur-sm max-md:rounded-bl-xl 
                    max-md:items-center max-md:top-20 max-md:right-0 max-md:w-max max-md:shadow-xl max-md:shadow-black/20
                    ${!isMenuOpen ? "max-md:translate-x-full" : ""}
                    ${isScrolled || !hideNavbar ? "md:pt-2" : ""} duration-300`}
      >
        {NavigationLinks.map((link) => (
          <NavigationButton key={link.label} label={link.label} href={link.href} />
        ))}
        <div className="h-5 w-px bg-on-primary/80 max-md:h-px max-md:w-full" />
        <div
          className={`group relative flex flex-col cursor-pointer mt-6 max-md:mt-0
            ${mobileLanguage ? "max-md:mb-8" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setMobileLanguage((prev) => !prev);
          }}
        >
          <Globe
            size={24}
            strokeWidth="2"
            className={`opacity-70 ml-2 group-hover:opacity-100 duration-200 max-md:opacity-100 max-md:ml-0 max-md:scale-150 
            ${mobileLanguage ? "max-md:opacity-0!" : ""}`}
          />
          <div className="w-full h-6 max-md:hidden" />
          <div
            className={`absolute flex flex-col px-3 py-5 gap-3 top-full self-center bg-primary-variant/90 rounded-md duration-300
      opacity-0 -translate-y-2 pointer-events-none max-md:bg-transparent
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
      ${mobileLanguage ? "max-md:opacity-100! max-md:-translate-y-6! max-md:pointer-events-auto! max-md:py-0" : ""}`}
          >
            {routing.locales.map((locale) => (
              <Link
                key={locale}
                href={pathname}
                locale={locale}
                className="font-light relative h-9 px-2 py-2 flex items-center gap-2 hover:-translate-x-1 duration-200"
              >
                <span className="font-bold">{locale.toLocaleUpperCase(locale)}</span>
                <div className="relative h-full aspect-[1.7]">
                  <Image src={Flags[locale as keyof typeof Flags]} alt={"logo"} fill priority sizes="100%" className="object-cover" />
                </div>
              </Link>
            ))}
          </div>
          <motion.div
            animate={!isScrolled ? { opacity: 0.8, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="absolute left-[125%] my-auto mt-px"
          >
            {locale.toLocaleUpperCase(locale)}
          </motion.div>
        </div>
      </div>
      {<MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />}
    </motion.div>
  );
};
