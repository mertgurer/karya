import { SpanL } from "@/components/ui/SpanL";
import { motion } from "motion/react";

export const Mission = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      className="flex flex-col px-[30%] justify-between gap-16 max-2xl:px-[13%] max-md:px-[6%] max-md:gap-10"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, filter: "blur(5px)" },
          visible: { opacity: 1, filter: "blur(0px)" },
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-4"
      >
        <SpanL className="text-4xl font-extralight text-secondary">
          Corporate.Mission.missionTitle
        </SpanL>
        <SpanL noWrap>Corporate.Mission.missionDescription</SpanL>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, filter: "blur(5px)" },
          visible: { opacity: 1, filter: "blur(0px)" },
        }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: "easeInOut",
        }}
        className="w-1/2 h-px bg-secondary mx-auto"
      />
      <motion.div
        initial={{ opacity: 0, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-4"
      >
        <SpanL className="text-4xl font-extralight text-secondary">
          Corporate.Mission.visionTitle
        </SpanL>
        <SpanL noWrap>Corporate.Mission.visionDescription</SpanL>
      </motion.div>
    </motion.div>
  );
};
