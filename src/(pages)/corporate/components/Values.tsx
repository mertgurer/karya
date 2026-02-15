import { SpanL } from "@/components/ui/SpanL";
import { motion } from "motion/react";
import { FaBalanceScale } from "react-icons/fa";
import { FaClipboardCheck, FaHelmetSafety } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

const ValueTypes = [
  { id: "excellence", icon: <IoStar size={20} /> },
  { id: "hse", icon: <FaHelmetSafety size={20} /> },
  { id: "reliability", icon: <FaClipboardCheck size={20} /> },
  { id: "integrity", icon: <FaBalanceScale size={20} /> },
];

export const Values = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      className="flex flex-col px-[20%] w-full gap-14 max-2xl:px-[13%] max-md:px-[6%]"
    >
      <div className="flex flex-col">
        <SpanL className="text-4xl font-extralight text-secondary">Corporate.Values.title</SpanL>
        <SpanL className="opacity-70">Corporate.Values.subtitle</SpanL>
      </div>
      <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
        {ValueTypes.map((value, index) => {
          return (
            <motion.div
              key={value.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.7,
                delay: 0.2 + 0.2 * index,
                ease: "easeInOut",
              }}
              className="flex flex-col gap-1"
            >
              <div className="flex gap-3 items-center">
                <span className="opacity-70">{value.icon}</span>
                <span className="ml-0.5 opacity-50">|</span>
                <SpanL className="text-2xl font-light">{`Corporate.Values.${value.id}.title`}</SpanL>
              </div>
              <SpanL className="opacity-90 font-light">{`Corporate.Values.${value.id}.description`}</SpanL>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
