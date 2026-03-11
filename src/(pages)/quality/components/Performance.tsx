import { SpanL } from "@/components/ui";
import { motion } from "motion/react";

const PerformanceMetrics = [
  { value: "%93.07", description: "Quality.Performance.approveRate" },
  { value: "3", description: "Quality.Performance.reports" },
];

const PunchMetrics = [
  { value: "4,69", description: "Quality.Performance.aPunch" },
  { value: "19,85", description: "Quality.Performance.bPunch" },
  { value: "24,57", description: "Quality.Performance.cPunch" },
];

export const Performance = () => {
  return (
    <div
      className="flex flex-col bg-surface pl-[12%] pr-[8%] py-40 my-10 gap-40 max-2xl:pl-[7%] max-2xl:pr-[5%] max-md:py-32 max-md:px-[5%]
                    shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.20),0_20px_25px_-5px_rgba(0,0,0,0.20)]"
    >
      <div className="flex max-md:flex-col max-md:gap-10">
        <div className="flex flex-col flex-3 gap-5">
          <SpanL
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-4xl text-primary"
          >
            Quality.Performance.title
          </SpanL>
          <SpanL
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            viewport={{ once: true }}
            noWrap
            className="text-sm opacity-80"
          >
            Quality.Performance.description
          </SpanL>
        </div>
        <div className="flex flex-col gap-24 flex-4">
          <div className={`gap-10 grid grid-cols-2 items-start max-md:grid-cols-1`}>
            {PerformanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.4,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center justify-center flex-1"
              >
                <span className="text-7xl font-extrabold text-secondary max-2xl:text-6xl max-2xl:font-bold">{metric.value}</span>
                <SpanL noWrap className="text-lg font-semibold text-primary opacity-80 text-center">
                  {metric.description}
                </SpanL>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20 max-md:gap-10">
        <div className="flex flex-col items-start gap-2">
          <SpanL className="text-4xl text-primary">Quality.Performance.punchMetrics</SpanL>
          <SpanL className="text-xs opacity-60">Quality.Performance.disclaimer</SpanL>
        </div>
        <div className={`gap-10 grid grid-cols-3 items-start max-md:grid-cols-1`}>
          {PunchMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + 0.4,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center justify-center flex-1"
            >
              <span className="text-7xl font-extrabold text-secondary max-2xl:text-6xl max-2xl:font-bold">{metric.value}</span>
              <SpanL noWrap className="text-lg font-semibold text-primary opacity-80 text-center">
                {metric.description}
              </SpanL>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
