import { SpanL } from "@/components/ui";
import { motion } from "motion/react";

const PerformanceMetrics = [
  { value: "99%", description: "Quality.Performance.onTimeDelivery" },
  { value: "500+", description: "Quality.Performance.projectsCompleted" },
  { value: "10.000+", description: "Quality.Performance.customers" },
];

export const Performance = () => {
  return (
    <div
      className="bg-surface pl-[12%] pr-[8%] py-40 my-10 flex gap-20 max-2xl:pl-[7%] max-2xl:pr-[5%] 
                    shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.20),0_20px_25px_-5px_rgba(0,0,0,0.20)]"
    >
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
      <div className={`flex-4 flex gap-20`}>
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
            <SpanL noWrap className="text-lg font-semibold text-primary opacity-80 text-center whitespace-nowrap">
              {metric.description}
            </SpanL>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
