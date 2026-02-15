"use client";

import { Link, routing, usePathname } from "@/i18n";
import Image from "next/image";
import { SpanL } from "@/components/ui/SpanL";
import Logo from "@/assets/images/logo.svg";
import { LinkL } from "@/components/ui/LinkL";
import { Addresses, Flags } from "@/constants";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMailOutline, MdOutlinePhoneEnabled } from "react-icons/md";

export const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="bg-primary-variant text-on-primary px-40 py-8 flex gap-20 max-2xl:px-20 max-2xl:py-6 max-md:px-6">
      <div className="flex items-center gap-10 justify-between w-full max-md:flex-col">
        <div className="flex w-1/2 text-sm max-md:flex-col max-md:w-full">
          {Addresses.map((address, index) => (
            <div key={index} className="flex flex-col gap-1 pr-5 py-7">
              <div className="flex gap-1 items-center">
                <FaMapMarkerAlt size={16} />
                <SpanL className="text-lg">{`Contact.Addresses.${address.key}.title`}</SpanL>
              </div>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${address.coordinates.lat},${address.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-light hover:text-secondary transition-colors cursor-pointer text-left max-md:w-1/2"
              >
                <SpanL className="font-light">{`Contact.Addresses.${address.key}.address`}</SpanL>
              </Link>
              <div className="flex flex-col mt-2">
                <Link href={`tel:${address.phone}`} className="flex gap-2 items-center hover:text-secondary transition-colors group">
                  <MdOutlinePhoneEnabled />
                  <span>{address.phone}</span>
                </Link>
                <Link href={`mailto:${address.email}`} className="flex gap-2 items-center hover:text-secondary transition-colors group">
                  <MdMailOutline />
                  <span>{address.email}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col text-sm gap-2 items-end max-md:items-center">
          <div className="flex items-center mb-10 gap-7">
            <div className="flex flex-col gap-2 max-2xl:mb-2">
              {routing.locales.map((locale) => {
                return (
                  <Link key={locale} href={pathname} locale={locale} className="font-light relative h-5 flex items-center gap-2">
                    <span className="font-bold">{locale.toUpperCase()}</span>
                    <div className="relative h-full aspect-[1.7]">
                      <Image src={Flags[locale as keyof typeof Flags]} alt={"logo"} fill priority sizes="100%" className="object-cover" />
                    </div>
                  </Link>
                );
              })}
            </div>
            <Link href={"/"} className="relative h-16 aspect-[2.29] max-md:hidden">
              <Image src={Logo} alt={"logo"} fill priority sizes="100%" className="object-contain" />
            </Link>
          </div>
          <div className="flex gap-7">
            <LinkL href="corporate?privacy" className="font-medium underline">
              Footer.privacyPolicy
            </LinkL>
            <LinkL href="corporate?privacy" className="font-medium underline">
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
