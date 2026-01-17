import { SpanL } from "@/components/ui";
import Image from "next/image";
import image from "@/assets/images/quality/documentation.jpg";
import { IoCheckmarkSharp } from "react-icons/io5";
import { motion } from "motion/react";
import { delay } from "motion";

const DocumentationPoints = [
  "records",
  "transparency",
  "traceability",
  "compliance",
  "continuousImprovement",
];

export const Documentation = () => {
  return (
    <div className="flex px-[12%] gap-[5%] my-40 max-2xl:px-[8%]">
      <div className="flex-8 relative h-auto rounded-md overflow-hidden shadow-md shadow-black/10">
        <Image
          src={image}
          alt="welcome-image"
          fill
          priority
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="flex-12 flex flex-col gap-7 py-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.8, once: true }}
          className="flex flex-col gap-7"
        >
          <SpanL
            variants={{
              hidden: { x: 40, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="text-4xl text-primary"
          >
            Quality.Documentation.title
          </SpanL>
          <SpanL
            variants={{
              hidden: { x: 40, opacity: 0 },
              visible: { x: 0, opacity: 0.7 },
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: "easeInOut",
            }}
            className=""
          >
            Quality.Documentation.description
          </SpanL>
        </motion.div>
        <div className="flex flex-col bg-surface p-7 rounded-md mx-2 mt-8 gap-4 shadow-sm shadow-black/10">
          {DocumentationPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + 0.2,
                ease: "easeInOut",
              }}
              className="flex gap-4 items-start"
            >
              <div className="rounded-full bg-secondary text-surface p-0.5">
                <IoCheckmarkSharp size={18} />
              </div>
              <SpanL noWrap className="opacity-70 font-medium">
                {`Quality.Documentation.Points.${point}`}
              </SpanL>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
