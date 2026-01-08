"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { SpanL } from "@/components/ui";
import { useTranslations } from "next-intl";
import { ServiceSplitRowProps } from "../Services.types";
import { Link } from "@/i18n";

export const ServiceSplitRow = ({
  leftService,
  rightService,
  reverse = false,
}: ServiceSplitRowProps) => {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  const defaultSplit = { top: reverse ? 55 : 45, bottom: reverse ? 45 : 55 };
  const leftHoverSplit = { top: reverse ? 75 : 65, bottom: reverse ? 65 : 75 };
  const rightHoverSplit = { top: reverse ? 35 : 25, bottom: reverse ? 25 : 35 };

  const currentSplit =
    hoveredSide === "left"
      ? leftHoverSplit
      : hoveredSide === "right"
      ? rightHoverSplit
      : defaultSplit;

  return (
    <div className="relative w-full h-[360px] overflow-hidden text-surface">
      {/* ---------------- LEFT SERVICE ---------------- */}
      <Link href={`/services/${leftService.id}`}>
        <motion.div
          className="absolute inset-0 z-10 group"
          initial={false}
          animate={{
            clipPath: `polygon(0% 0%, ${currentSplit.top - 0.3}% 0%, ${
              currentSplit.bottom - 0.3
            }% 100%, 0% 100%)`,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          onMouseEnter={() => setHoveredSide("left")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <div className="relative w-full h-full grayscale-80 group-hover:grayscale-0 duration-500">
            <Image
              src={leftService.image}
              alt={leftService.id}
              fill
              className="object-cover group-hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-on-surface/40 group-hover:bg-on-surface/20 duration-500" />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-10 text-center pointer-events-none">
              <div
                className="max-w-[40%] ml-10 mr-auto text-left p-6 rounded-md
                            group-hover:bg-surface/70 group-hover:backdrop-blur-lg group-hover:text-on-surface/80 group-hover:translate-x-20 
                            duration-500"
              >
                <SpanL className="text-5xl font-medium block mb-2 translate-y-full group-hover:translate-y-0 group-hover:translate-x-4 duration-500">
                  {`Services.${leftService.id}.title`}
                </SpanL>
                <SpanL className="font-medium opacity-0 text-on-surface/80 group-hover:opacity-90 duration-300 group-hover:delay-200">
                  {`Services.${leftService.id}.description`}
                </SpanL>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>

      {/* ---------------- RIGHT SERVICE ---------------- */}
      <Link href={`/services/${rightService.id}`}>
        <motion.div
          className="absolute inset-0 z-10 group"
          initial={false}
          animate={{
            clipPath: `polygon(${
              currentSplit.top + 0.3
            }% 0%, 100% 0%, 100% 100%, ${currentSplit.bottom + 0.3}% 100%)`,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          onMouseEnter={() => setHoveredSide("right")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <div className="relative w-full h-full grayscale-80 group-hover:grayscale-0 duration-500">
            <Image
              src={rightService.image}
              alt={rightService.id}
              fill
              className="object-cover group-hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-on-surface/40 group-hover:bg-on-surface/20 duration-500" />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-10 text-center pointer-events-none">
              <div
                className="max-w-[40%] gap-5 mr-10 ml-auto text-right p-6 rounded-md
                            group-hover:bg-surface/70 group-hover:backdrop-blur-lg group-hover:text-on-surface/80 group-hover:-translate-x-20 
                            duration-500"
              >
                <SpanL className="text-5xl font-medium block mb-2 translate-y-full group-hover:translate-y-0 group-hover:-translate-x-4 duration-500">
                  {`Services.${rightService.id}.title`}
                </SpanL>
                <SpanL className="font-medium opacity-0 text-on-surface/80 group-hover:opacity-90 duration-300 group-hover:delay-200">
                  {`Services.${rightService.id}.description`}
                </SpanL>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};
