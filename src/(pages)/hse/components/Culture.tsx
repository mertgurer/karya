import Image from "next/image";
import PolicyImage from "@/assets/images/hse/policy.jpg";
import { SpanL } from "@/components/ui";
import { motion } from "motion/react";
import CultureImage from "@/assets/images/hse/culture.jpg";

export const Culture = () => {
  return (
    <div className="relative flex flex-col bg-primary px-[12%] pt-100 max-2xl:px-[2%]">
      <div className="absolute w-[50%] top-0 right-[10%] aspect-[1.6] -translate-y-[42%] rounded-sm overflow-hidden">
        <Image
          src={PolicyImage}
          alt="hse-policy"
          fill
          priority
          sizes="100%"
          className="object-cover"
        />
      </div>
      <SpanL className="text-5xl ml-1 font-semibold text-surface max-2xl:ml-10">
        Hse.Culture.title
      </SpanL>
      <motion.div
        initial={"hide"}
        whileInView={"show"}
        viewport={{ amount: 0.1 }}
        className="flex flex-col gap-20 mt-24 mb-32 max-2xl:mt-12 max-2xl:gap-10"
      >
        <motion.div
          variants={{
            hide: { translateY: 32 },
            show: { translateY: 0 },
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="flex mx-20 bg-surface shadow-md shadow-surface/20 rounded-sm overflow-hidden"
        >
          <div className="relative w-[180%] aspect-[1.5]">
            <Image
              src={CultureImage}
              alt="hse-policy"
              fill
              priority
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 my-auto pl-10 pr-5 text-justify py-8">
            <SpanL className="text-3xl text-secondary font-medium">
              Hse.Culture.subtitleOne
            </SpanL>
            <SpanL className="mb-2 max-2xl:text-sm">Hse.Culture.textOne</SpanL>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hide: { translateY: -32 },
            show: { translateY: 0 },
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="flex flex-row-reverse mx-20 bg-surface shadow-md shadow-surface/20 rounded-sm overflow-hidden"
        >
          <div className="relative w-[180%] aspect-[1.5]">
            <Image
              src={PolicyImage}
              alt="hse-policy"
              fill
              priority
              sizes="100%"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 my-auto pl-5 pr-10 text-justify py-8">
            <SpanL className="text-3xl text-secondary font-medium">
              Hse.Culture.subtitleTwo
            </SpanL>
            <SpanL className="mb-2 max-2xl:text-sm">Hse.Culture.textTwo</SpanL>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
