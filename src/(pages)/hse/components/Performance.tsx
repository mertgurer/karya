import { SpanL } from "@/components/ui";
import { motion } from "motion/react";
import React, { Fragment } from "react";

const PerformanceDetails = [
  "safetyAudits",
  "safetyTrainingHours",
  "incidentReduction",
];

export const Performance = () => {
  return (
    <div className="flex flex-col px-[12%] py-36 bg-primary">
      <SpanL className="text-4xl text-surface">Hse.Performance.title</SpanL>
      <SpanL className="mt-8 mb-20 text-surface">
        Hse.Performance.description
      </SpanL>
      <div className="flex justify-between items-center">
        {PerformanceDetails.map((item, index) => (
          <Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, translateY: 16 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              className="flex flex-col gap-3"
            >
              <SpanL className="font-light text-justify text-surface text-8xl">
                {`Hse.Performance.${item}.value`}
              </SpanL>
              <SpanL className="font-medium text-xl bg-surface px-2 py-1 rounded-sm text-secondary">
                {`Hse.Performance.${item}.title`}
              </SpanL>
            </motion.div>
            {index < PerformanceDetails.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2 + 0.1,
                  ease: "easeInOut",
                }}
                className="bg-surface/20 w-1 h-48 rotate-15 rounded-sm"
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
