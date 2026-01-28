"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

// UI Components
import { ButtonL } from "@/components/ui/ButtonL/ButtonL";
import { SpanL } from "@/components/ui/SpanL";
import { ServiceProps } from "./Service.types";

// Icons for visual helpers
import { IoCheckmarkCircle, IoArrowForward } from "react-icons/io5";
import { LuLayoutTemplate, LuShieldCheck, LuZap, LuUsers } from "react-icons/lu";
import { LinkL } from "@/components/ui";

// Visual Helper Icons Configuration
const FeatureIcons = [<LuLayoutTemplate key={1} size={32} />, <LuZap key={2} size={32} />, <LuShieldCheck key={3} size={32} />, <LuUsers key={4} size={32} />];

export const Service = ({ service }: ServiceProps) => {
  const t = useTranslations();

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* ------------------------------------------------
          1. HERO SECTION
          Full width, simple title focus.
      -------------------------------------------------- */}
      <div className="relative w-full h-[40vh] max-md:h-[35vh]">
        <Image src={service.image} alt={`${service.id}-hero`} fill priority className="object-cover brightness-[0.6]" />
        <div className="absolute items-center inset-0 flex flex-col px-4 max-w-5xl mx-auto mt-auto mb-16 h-max">
          <SpanL upperCase className="text-secondary text-sm bg-surface px-3 py-1 font-bold tracking-widest mb-3 w-max">
            Services.label
          </SpanL>
          <SpanL className="text-6xl font-bold text-on-primary max-md:text-4xl drop-shadow-xl">{`Services.${service.id}.title`}</SpanL>
        </div>
      </div>

      {/* ------------------------------------------------
          MAIN CONTENT CONTAINER
          Centered, max-width for readability (editorial style)
      -------------------------------------------------- */}
      <div className="flex flex-col self-center w-full max-w-5xl px-8 pt-16 pb-20 gap-20 max-md:px-5 max-md:py-12 max-md:gap-12">
        {/* 2. INTRODUCTION TEXT */}
        <div className="flex flex-col gap-6">
          <SpanL className="font-light text-lg leading-relaxed text-on-background max-md:text-2xl">{`Services.${service.id}.introduction`}</SpanL>
          <div className="w-24 h-0.5 bg-secondary mx-auto mt-4" />
        </div>
        {/* 3. VISUAL HELPER: ICON GRID (Key Features) */}
        <div className="flex flex-col gap-8">
          <SpanL className="text-2xl font-semibold text-primary">Services.keyFeatures</SpanL>
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {[0, 1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-5 items-start p-6 rounded-md bg-surface border border-black/5 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300"
              >
                <div className="text-secondary bg-secondary/10 p-3 rounded-full shrink-0">{FeatureIcons[idx]}</div>
                <div className="flex flex-col gap-2">
                  <SpanL className="text-xl font-medium text-primary">{`Services.${service.id}.features.${idx}.title`}</SpanL>
                  <SpanL className="text-on-background/70 leading-relaxed">{`Services.${service.id}.features.${idx}.description`}</SpanL>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. INTRODUCTION TEXT */}
        <div className="flex flex-col gap-6 text-center">
          <div className="w-24 h-0.5 bg-secondary mx-auto mt-4" />
          <SpanL className="text-3xl font-light leading-relaxed text-on-surface max-md:text-2xl">{`Services.${service.id}.longDescription`}</SpanL>
          <div className="w-24 h-0.5 bg-secondary mx-auto mt-4" />
        </div>

        {/* 5. VISUAL HELPER: BULLET POINTS (Benefits) */}
        <div className="flex flex-col gap-8">
          <SpanL className="text-2xl font-semibold text-primary">Services.benefitsTitle</SpanL>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 max-md:grid-cols-1">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-4 group"
              >
                <IoCheckmarkCircle className="text-secondary text-2xl shrink-0 group-hover:scale-110 transition-transform" />
                <SpanL className="text-lg text-on-background/80 font-light border-b border-black/5 pb-2 w-full group-hover:text-primary transition-colors">
                  {`Services.${service.id}.benefits.${idx}`}
                </SpanL>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
