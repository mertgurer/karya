"use client";

import { motion } from "motion/react";

interface LightningProps {
  height: number;
  reverse?: boolean;
  light?: boolean;
}

export const Lightning = ({
  height,
  reverse = false,
  light = false,
}: LightningProps) => {
  return (
    <div className="relative flex">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        style={{ height: height }}
        className={`w-0.5  origin-bottom ${
          light ? "bg-surface" : "bg-primary"
        }`}
      />
      <div className="absolute bottom-0">
        <div
          className={`absolute w-0.5 h-5 -translate-y-4.5 ${
            reverse
              ? "-rotate-45 -translate-x-[7px]"
              : "rotate-45 translate-x-[7px]"
          } ${light ? "bg-surface" : "bg-primary"}`}
        />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className={`absolute h-8 w-0.5 -top-4 bg-primary origin-top ${
            reverse ? "-left-3.5" : "left-3.5"
          } ${light ? "bg-surface" : "bg-primary"}`}
        />
      </div>
    </div>
  );
};
