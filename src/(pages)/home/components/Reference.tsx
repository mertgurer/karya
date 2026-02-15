import Image from "next/image";

import Pearl from "@/assets/images/home/references/pearl.png";
import HKN from "@/assets/images/home/references/hkn.png";
import Taqa from "@/assets/images/home/references/taqa.png";
import Gama from "@/assets/images/home/references/gama.png";
import Havatek from "@/assets/images/home/references/havatek.png";
import Calik from "@/assets/images/home/references/calik.png";
import Tupras from "@/assets/images/home/references/tupras.png";
import Shell from "@/assets/images/home/references/shell.png";
import PO from "@/assets/images/home/references/po.png";
import BP from "@/assets/images/home/references/bp.png";
import { motion } from "motion/react";
import { SpanL } from "@/components/ui/SpanL";
import { Lightning } from "./Lightning";

const References = [
  { name: "Pearl Petroleum Company", image: Pearl },
  { name: "HKN Energy", image: HKN },
  { name: "TAQA Industrial Energy", image: Taqa },
  { name: "GAMA Power Systems", image: Gama },
  { name: "Havatek", image: Havatek },
  { name: "Çalık Enerji", image: Calik },
  { name: "Tupras", image: Tupras },
  { name: "Shell", image: Shell },
  { name: "Petrol Ofisi", image: PO },
  { name: "BP", image: BP },
];

export const Reference = ({ index }: { index: number }) => {
  return (
    <section id="reference" className="flex items-center w-full px-[5%] py-32 max-2xl:gap-8 max-2xl:pl-[7%] max-md:flex-col max-md:py-10 max-md:px-10">
      <motion.div initial="hidden" whileInView="visible" className="relative flex flex-col h-max w-[40%] max-md:w-full">
        {/* <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="text-secondary"
        >
          <span className="">0{index}. </span>
          <SpanL className="font-semibold">Home.References.sectionTitle</SpanL>
        </motion.div> */}
        <div className="relative flex">
          <SpanL
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-5xl text-primary "
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
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-on-surface/90 text-lg mt-6 ml-5 max-2xl:text-base max-md:text-sm max-md:ml-2"
        >
          Home.References.description
        </SpanL>
      </motion.div>
      <div className="grid grid-cols-5 gap-0.5 flex-1 mx-[7%] max-2xl:mx-0 max-md:grid-cols-2 max-md:w-full">
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
            className="w-full h-full p-8 aspect-square overflow-hidden"
          >
            <div className="relative w-full h-full">
              <Image src={reference.image} alt={reference.name} fill priority sizes="100%" className="object-contain" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
