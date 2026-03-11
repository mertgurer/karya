import { SpanL } from "@/components/ui";
import { motion } from "motion/react";
import { RxDotFilled } from "react-icons/rx";

const FocusAreaDetails = [
  {
    title: "Hse.FocusAreas.FocusAreaOne.title",
    description: "Hse.FocusAreas.FocusAreaOne.text",
  },
  {
    title: "Hse.FocusAreas.FocusAreaTwo.title",
    description: "Hse.FocusAreas.FocusAreaTwo.text",
  },
  {
    title: "Hse.FocusAreas.FocusAreaThree.title",
    description: "Hse.FocusAreas.FocusAreaThree.text",
  },
  {
    title: "Hse.FocusAreas.FocusAreaFour.title",
    description: "Hse.FocusAreas.FocusAreaFour.text",
  },
];

export const FocusAreas = () => {
  return (
    <div className="flex flex-col gap-20 my-60 px-[8%] max-2xl:px-[4%] max-md:my-20">
      <div className="flex items-center text-primary">
        <SpanL className="text-4xl font-bold px-2 pb-2">Hse.FocusAreas.title</SpanL>
      </div>
      <div className="flex justify-between gap-14 max-md:flex-col">
        {FocusAreaDetails.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateY: 16 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: "easeInOut" }}
            className="flex flex-col flex-1 gap-7 border-l-4 border-primary pl-6"
          >
            <SpanL className="text-3xl font-medium text-primary mt-2">{area.title}</SpanL>
            <SpanL className="text-sm opacity-80">{area.description}</SpanL>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
