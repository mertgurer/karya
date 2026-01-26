import { SpanL } from "@/components/ui";
import Image from "next/image";
import PolicyImage from "@/assets/images/hse/policy.jpg";
import PolicyImage2 from "@/assets/images/hse/policy-2.jpg";
import { PiCertificate, PiGraphFill, PiNotepad } from "react-icons/pi";
import { motion } from "motion/react";

export const Topics = () => {
  return (
    <div className="flex flex-col gap-24 pt-32 pb-48 px-[12%] max-2xl:px-[8%] bg-primary text-surface">
      <motion.div
        initial={{ opacity: 0, translateX: 16 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col gap-4"
      >
        <div className="flex gap-5 items-center">
          <PiGraphFill size={40} />
          <span className="opacity-50 h-5 w-0.5 bg-surface rounded-sm" />
          <SpanL className="text-3xl ml-1 font-medium">
            Hse.ManagementSystem.title
          </SpanL>
        </div>
        <SpanL className="tracking-wider opacity-90 text-justify font-light max-2xl:text-sm">
          Hse.ManagementSystem.text
        </SpanL>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: -16 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex gap-12"
      >
        <div className="relative w-[250%] aspect-[1.8]">
          <Image
            src={PolicyImage2}
            alt="hse-policy"
            fill
            priority
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 my-auto">
          <div className="flex gap-5 items-center">
            <PiCertificate size={40} />
            <span className="opacity-50 h-5 w-0.5 bg-surface rounded-sm" />
            <SpanL className="text-3xl ml-1 font-medium">
              Hse.Competency.title
            </SpanL>
          </div>
          <SpanL className="tracking-wider opacity-90 text-justify font-light mb-4 max-2xl:text-sm">
            Hse.Competency.text
          </SpanL>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 16 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex gap-12"
      >
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 items-center">
            <PiNotepad size={40} />
            <span className="opacity-50 h-5 w-0.5 bg-surface rounded-sm" />
            <SpanL className="text-3xl ml-1 font-medium">
              Hse.Procedures.title
            </SpanL>
          </div>
          <SpanL className="tracking-wider opacity-90 text-justify font-light max-2xl:text-sm">
            Hse.Procedures.text
          </SpanL>
        </div>
        <div className="relative w-[250%] aspect-[1.8]">
          <Image
            src={PolicyImage}
            alt="hse-policy"
            fill
            priority
            sizes="100%"
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};
