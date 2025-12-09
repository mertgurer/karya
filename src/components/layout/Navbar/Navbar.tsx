"use client";

import { MenuButton } from "./MenuButton";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { NavigationLinks, SCROLL_UPDATE_THRESHOLD } from "@/constants";
import { NavigationButton } from "./NavigationButton";
import { useLenis } from "lenis/react";
import { Link } from "@/i18n";
import { motion } from "motion/react";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className={`
        fixed flex justify-between items-center text-on-primary w-full z-20 px-32
         ${
             isScrolled || isMenuOpen
                 ? "bg-primary/80 backdrop-blur-sm h-[72px] shadow-lg shadow-black/10"
                 : "h-20 md:pt-6 max-md:-translate-y-full"
         }
        max-md:h-20 max-md:px-8 max-2xl:px-14 duration-500`}
        >
            <Link href={"/"} className="relative h-[52px] aspect-[2]">
                <Image
                    src={Logo}
                    alt={"logo"}
                    fill
                    priority
                    sizes="100%"
                    className="object-contain"
                />
            </Link>
            <div
                className={`
                    flex gap-3 items-center justify-center max-md:flex-col
                    max-md:absolute max-md:py-10 max-md:pl-12 max-md:pr-8 max-md:gap-5
                    max-md:bg-primary/95 max-md:backdrop-blur-sm max-md:rounded-bl-xl 
                    max-md:items-center max-md:top-20 max-md:right-0 max-md:w-max max-md:shadow-xl max-md:shadow-black/20
                    ${!isMenuOpen ? "max-md:translate-x-full" : ""}
                    ${isScrolled ? "md:pt-2" : ""} duration-300`}
            >
                {NavigationLinks.map((link) => (
                    <NavigationButton
                        key={link.label}
                        label={link.label}
                        href={link.href}
                    />
                ))}
            </div>
            {<MenuButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />}
        </motion.div>
    );
};
