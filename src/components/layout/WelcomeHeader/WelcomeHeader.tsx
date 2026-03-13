"use client";

import { SpanL } from "@/components/ui/SpanL";
import { motion } from "motion/react";
import Image from "next/image";
import { WelcomeHeaderProps } from "./WelcomeHeader.types";

export const WelcomeHeader = ({ image, title, subtitle }: WelcomeHeaderProps) => {
  return (
    <div className="relative flex h-[50vh] items-end text-on-primary max-md:h-[40vh]">
      <div className="absolute inset-0">
        <Image src={image} alt="welcome-image" fill priority sizes="100%" className="object-cover -scale-x-100" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col pl-[14%] pb-16 gap-2 z-10 max-2xl:pl-[8%] max-md:pl-0 max-md:mx-4 max-md:pb-8"
      >
        <SpanL className="text-5xl font-bold max-2xl:text-4xl max-md:self-start">{title}</SpanL>
        <SpanL className="text-xl text-primary-variant bg-surface px-4 py-1 max-2xl:text-lg max-md:self-start ">{subtitle}</SpanL>
      </motion.div>
    </div>
  );
};
