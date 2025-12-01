import { SpanL } from "@/components/ui/SpanL";
import { motion } from "motion/react";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdElectricalServices, MdOutlineBookmarkAdded } from "react-icons/md";
import { PiBlueprintDuotone } from "react-icons/pi";
import React from "react";

const PerformanceStats = [
  {
    label: "yearsOfExperience",
    value: "25",
    icon: <MdOutlineBookmarkAdded size={64} />,
  },
  {
    label: "projectsCompleted",
    value: "150+",
    icon: <PiBlueprintDuotone size={72} />,
  },
  {
    label: "employees",
    value: "500",
    icon: <FaHelmetSafety size={64} />,
  },
  {
    label: "cablesInstalled",
    value: "200.000 +",
    icon: <MdElectricalServices size={72} />,
  },
];

export const Performance = () => {
  return (
    <section
      id="performance"
      className="relative w-full shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.20)]"
    >
      <div className="bg-primary px-[15%] z-10">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "288px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute top-0  w-0.5 bg-on-primary z-10"
        />
        <div className="flex flex-col gap-3 pt-32 pb-28 ml-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-secondary mb-4"
          >
            <span className="">02. </span>
            <SpanL className="font-semibold">
              Home.Performance.sectionTitle
            </SpanL>
          </motion.div>
          <SpanL
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-5xl"
          >
            Home.Performance.title
          </SpanL>
          <SpanL
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-on-primary/70 font-light leading-5 mb-20"
          >
            Home.Performance.description
          </SpanL>
          <div className="grid grid-cols-7 items-center">
            {PerformanceStats.map((stat, index) => {
              return (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay:
                        Math.abs((PerformanceStats.length - 1) / 2 - index) *
                        0.6,
                      ease: "easeInOut",
                    }}
                    className="flex flex-col items-center"
                  >
                    <div className="flex items-center justify-center text-secondary mb-5 w-[72px] aspect-square">
                      {stat.icon}
                    </div>
                    <SpanL className="text-on-primary mb-1">{`Home.Performance.${stat.label}`}</SpanL>
                    <span className="text-5xl text-on-primary whitespace-nowrap">
                      {stat.value}
                    </span>
                  </motion.div>
                  {index < PerformanceStats.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay:
                          Math.abs(PerformanceStats.length / 2 - 1 - index) *
                          0.6,
                        ease: "easeInOut",
                      }}
                      className="h-10 w-px bg-on-primary mx-auto"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      <div className="overflow-hidden h-48">
        <div className="bg-primary h-32 scale-150 -translate-y-[65%] -rotate-3 shadow-xl shadow-black/20 z-0" />
      </div>
    </section>
  );
};
