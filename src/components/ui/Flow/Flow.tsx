"use client";

import { SpanL } from "@/components/ui";
import { motion } from "motion/react";
import { FlowProps } from ".";

export const Flow = ({ steps }: FlowProps) => {
  return (
    <div className={`grid grid-cols-${steps.length} my-10 -gap-10`}>
      {steps.map((step, index) => {
        const isFirst = index === 0;
        const isLast = index === steps.length - 1;

        const distanceToCenter = steps.length / 2 - index - 0.5;
        const moveAmount = distanceToCenter * 5;

        return (
          <motion.div
            key={step.key}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            viewport={{ amount: 0.5 }}
            className="flex flex-col"
          >
            <div
              className={`
                  h-full bg-primary-variant/20 py-10 flex flex-col justify-between max-2xl:py-8`}
              style={{
                clipPath: getClipPath(isFirst, isLast),
                transform: `translateX(${moveAmount}%)`,
              }}
            >
              <div className="flex items-start gap-5 pl-12 pr-10 max-2xl:pl-10 max-2xl:pr-6">
                <div className="flex items-center justify-center min-w-10 min-h-10 mt-2 rounded-md bg-surface/60 text-secondary shadow-sm">{step.icon}</div>
                <SpanL className="my-auto text-lg font-semibold text-secondary max-2xl:text-base">{`${step.localeSource}.title`}</SpanL>
              </div>

              <div className="flex flex-col gap-3 mt-6 mb-2 pl-14 pr-10 max-2xl:pl-10 max-2xl:pr-6">
                {Array(step.pointCount)
                  .fill(null)
                  .map((_, idx) => (
                    <div key={idx} className="text-sm font-medium text-slate-500 flex gap-2 items-start">
                      <span className="text-secondary font-bold shrink-0">{">"}</span>
                      <SpanL className="leading-snug">{`${step.localeSource}.Points.${idx}`}</SpanL>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const getClipPath = (isFirst: boolean, isLast: boolean) => {
  const dentPercentage = 7;

  if (isFirst) {
    return `polygon(0 0, ${100 - dentPercentage}% 0, 100% 50%, ${100 - dentPercentage}% 100%, 0 100%, 0 50%)`;
  } else if (isLast) {
    return `polygon(0 0, 100% 0, 100% 50%, 100% 99%, 0 100%, ${dentPercentage}% 50%)`;
  } else {
    return `polygon(0 0, ${100 - dentPercentage}% 0, 100% 50%, ${100 - dentPercentage}% 100%, 0 100%, ${dentPercentage}% 50%)`;
  }
};
