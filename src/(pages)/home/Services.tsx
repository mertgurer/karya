import Image from "next/image";

import ServiceImage1 from "@/assets/images/home/services/service1.jpg";
import ServiceImage2 from "@/assets/images/home/services/service2.jpg";
import ServiceImage3 from "@/assets/images/home/services/service3.jpg";
import ServiceImage4 from "@/assets/images/home/services/service4.jpg";
import { SpanL } from "@/components/ui/SpanL";
import { motion } from "motion/react";
import { Lightning } from "./components/Lightning";
import { LinkL } from "@/components/ui/LinkL";

const ServiceDetails = [
  {
    id: "ElectricalPower",
    image: ServiceImage1,
  },
  {
    id: "UndergroundUtilities",
    image: ServiceImage2,
  },
  {
    id: "RenewableEnergy",
    image: ServiceImage3,
  },
  {
    id: "Specialty",
    image: ServiceImage4,
  },
];

export const Services = () => {
  return (
    <section id="services" className="flex w-full py-80 bg-primary">
      <div className="ml-[10%] mr-[5%] flex-1">
        <motion.div
          variants={{ hidden: {}, show: {} }}
          initial="hidden"
          whileInView="show"
          className="relative flex flex-col self-end"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-secondary"
          >
            <span className="">04. </span>
            <SpanL className="font-semibold">Home.Services.sectionTitle</SpanL>
          </motion.div>
          <SpanL
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-5xl text-surface"
          >
            Home.Services.title
          </SpanL>
          <div className="absolute -left-4 -bottom-10">
            <Lightning height={500} light />
          </div>
        </motion.div>
        <div className="sticky top-40 ml-10 mt-30 ">
          <SpanL
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            className="text-3xl text-surface"
          >
            Home.Services.subtitle
          </SpanL>
          <div className="w-full h-0.5 bg-secondary mt-8 mb-4" />
          <SpanL
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            className="text-xl text-surface"
          >
            Home.Services.description
          </SpanL>
          <LinkL
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            href="/corporate"
            className="bg-secondary text-on-secondary px-4 py-2 mt-7"
          >
            Common.seeAll
          </LinkL>
        </div>
      </div>
      <div className="flex flex-col w-1/2 mr-[10%]">
        {ServiceDetails.map((service) => (
          <div
            key={service.id}
            className="group flex relative w-full aspect-[3.8]"
          >
            <div className="absolute inset-0 grayscale-100 group-hover:grayscale-0 duration-500">
              <Image
                src={service.image}
                alt={service.id}
                fill
                priority
                sizes="100%"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-on-surface/40" />
            <div className="relative flex self-end mb-10 ml-10 z-10 w-max">
              <SpanL className="text-surface font-medium text-4xl">{`Home.Services.${service.id}.title`}</SpanL>
              <div className="absolute -bottom-7 left-0 bg-surface h-1 origin-left w-0 group-hover:w-full duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
