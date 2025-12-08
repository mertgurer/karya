import Image from "next/image";

import DUK from "@/assets/images/home/references/DUK.png";
import GEV from "@/assets/images/home/references/GEV.png";
import KEP from "@/assets/images/home/references/KEP.png";
import LG from "@/assets/images/home/references/LG.png";
import NEE from "@/assets/images/home/references/NEE.png";
import SO from "@/assets/images/home/references/SO.png";
import TRN from "@/assets/images/home/references/TRN.png";
import XEL from "@/assets/images/home/references/XEL.png";
import ENR from "@/assets/images/home/references/ENR.png";
import FORTUM from "@/assets/images/home/references/FORTUM.png";
import { motion } from "motion/react";
import { SpanL } from "@/components/ui/SpanL";
import { Lightning } from "./components/Lightning";

const References = [
  { name: "Duke Energy", image: DUK },
  { name: "GE Vernova", image: GEV },
  { name: "Korea Electric Power", image: KEP },
  { name: "LG Energy Solution", image: LG },
  { name: "Nextera Energy", image: NEE },
  { name: "Southern Company", image: SO },
  { name: "Terna", image: TRN },
  { name: "XEL", image: XEL },
  { name: "Siemens Energy", image: ENR },
  { name: "Fortum", image: FORTUM },
];

export const Reference = ({ index }: { index: number }) => {
  return (
    <section id="reference" className="flex items-center w-full px-[5%] py-32">
      <motion.div
        variants={{ hidden: {}, show: {} }}
        initial="hidden"
        whileInView="show"
        className="relative flex flex-col h-max w-[40%]"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-secondary"
        >
          <span className="">0{index}. </span>
          <SpanL className="font-semibold">Home.References.sectionTitle</SpanL>
        </motion.div>
        <div className="relative">
          <SpanL
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-5xl text-primary w-2/3"
          >
            Home.References.title
          </SpanL>
          <div className="absolute -left-4 -bottom-10">
            <Lightning height={320} />
          </div>
        </div>
        <SpanL
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-primary/80 text-lg mt-6 ml-5"
        >
          Home.References.description
        </SpanL>
      </motion.div>
      <div className="grid grid-cols-5 gap-0.5 flex-1 mx-[7%]">
        {References.map((reference, index) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: (index % 5) * 0.1 + (index / 5) * 0.1,
              ease: "easeInOut",
            }}
            key={reference.name}
            className="w-full h-full p-10 aspect-square overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image
                src={reference.image}
                alt={reference.name}
                fill
                priority
                sizes="100%"
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
