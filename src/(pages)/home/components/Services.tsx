"use client";

import { SpanL } from "@/components/ui/SpanL";
import { easeInOut, motion } from "motion/react";
import { Lightning } from "./Lightning";
import ServiceCard from "./ServiceCard";
import { ButtonL } from "@/components/ui/ButtonL";
import { Link } from "@/i18n";
import { HiArrowRight } from "react-icons/hi";
import { useLenis } from "lenis/react";
import { ServiceDetails } from "@/constants";
import { LinkL } from "@/components/ui";

export const Services = ({ index }: { index: number }) => {
  const lenis = useLenis();

  if (!lenis) return;

  return (
    <section
      id="services"
      className="flex w-full pb-40 pt-80 z-10 flex-row-reverse bg-primary-variant text-surface max-2xl:pt-36 max-md:pt-44 max-md:pb-0 max-md:flex-col max-md:gap-20"
    >
      <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }} className="mr-[10%] ml-[3%] flex-1 max-2xl:mr-[5%] max-md:mx-5">
        <div className="relative flex flex-col self-end text-end -mt-40 mr-20 max-md:mr-5">
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="text-secondary"
          >
            <span className="">0{index}. </span>
            <SpanL className="font-semibold">Home.Services.sectionTitle</SpanL>
          </motion.div> */}
          <SpanL
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="text-5xl max-md:text-4xl"
          >
            Home.Services.title
          </SpanL>
          <div className="absolute -right-4 -bottom-10 max-2xl:-right-6 max-2xl:-bottom-8">
            <Lightning height={248} reverse light />
          </div>
        </div>
        <div className="sticky top-1/4 mr-10 mt-32 max-2xl:top-1/5 max-2xl:mt-24 max-md:static max-md:mx-0">
          <SpanL
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeInOut",
            }}
            className="text-4xl"
          >
            Home.Services.subtitle
          </SpanL>
          <div className="w-full h-0.5 bg-surface/30 mt-6 mb-6" />
          <SpanL
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-xl max-2xl:text-lg"
          >
            Home.Services.description
          </SpanL>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            <Link href="/services" className="group flex items-center gap-3 text-secondary mt-6 w-max">
              <SpanL className="group-hover:translate-x-2 duration-700">Common.seeAll</SpanL>
              <div className="bg-secondary text-on-secondary p-1 group-hover:translate-x-6 duration-700">
                <HiArrowRight size={16} />
              </div>
            </Link>
          </motion.div>
          <div className="w-full h-0.5 bg-surface/30 mt-6 mb-20" />
          <SpanL
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-lg font-medium max-2xl:text-base"
          >
            Home.Services.linkText
          </SpanL>
          {/* <LinkL
            href="/projects"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            onClick={() => {
              lenis.scrollTo(`#projects`, {
                duration: 0.77,
                easing: easeInOut,
                offset: -72,
              });
            }}
            className="bg-secondary text-on-secondary rounded-none! py-1.5 mt-5"
          >
            Home.Services.seeProject
          </LinkL> */}
        </div>
      </motion.div>
      <div className="flex flex-col w-1/2 ml-[10%] max-2xl:ml-[7%] max-md:w-full max-md:mx-0">
        {ServiceDetails.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};
