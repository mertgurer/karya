import { SpanL } from "@/components/ui/SpanL";
import Image from "next/image";
import Team from "@/assets/images/corporate/team.jpg";
import { motion } from "motion/react";

export const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      className="flex flex-col px-[20%] w-full gap-6 max-2xl:px-[13%] max-md:px-[6%] max-md:flex-col max-md:gap-0"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -40, filter: "blur(5px)" },
          visible: { opacity: 1, x: 0, filter: "blur(0px)" },
        }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-2"
      >
        <div className="flex px-4 gap-3 text-4xl">
          <SpanL className="font-extralight">Corporate.About.title</SpanL>
          <span className="font-semibold">2007</span>
        </div>
      </motion.div>
      <SpanL
        variants={{
          hidden: { opacity: 0, x: 80, filter: "blur(5px)" },
          visible: { opacity: 1, x: 0, filter: "blur(0px)" },
        }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: "easeInOut",
        }}
        className=""
      >
        Corporate.About.description
      </SpanL>
      <div className="relative h-100 w-full max-md:w-full max-md:aspect-video">
        <Image src={Team} alt="team-image" fill priority sizes="100%" className="object-cover -scale-x-100" />
      </div>
    </motion.div>
  );
};
