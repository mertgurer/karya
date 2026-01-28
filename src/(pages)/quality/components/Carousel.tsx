"use client";

import useEmblaCarousel from "embla-carousel-react";
import { SpanL } from "@/components/ui/SpanL";
import { IoRocketOutline, IoDiamondOutline, IoConstructOutline, IoLeafOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { motion } from "motion/react";

const carouselItems = [
  {
    id: "ISO 9001:2015",
    title: "Quality.Certificates.qualityManagement",
    registered: "Reg. No: QMS/1234/5678",
    icon: <IoConstructOutline size={40} />,
  },
  {
    id: "ISO 45001:2018",
    title: "Quality.Certificates.occupationalHealth",
    registered: "Reg. No: OHS/1234/5678",
    icon: <IoShieldCheckmarkOutline size={40} />,
  },
  {
    id: "ISO 14001:2015",
    title: "Quality.Certificates.environmentalManagement",
    registered: "Reg. No: EMS/1234/5678",
    icon: <IoDiamondOutline size={40} />,
  },
  {
    id: "ASME U Stamp",
    title: "Quality.Certificates.uStamp",
    registered: "Cert. No: U-1234-5678",
    icon: <IoRocketOutline size={40} />,
  },
  {
    id: "API 6D",
    title: "Quality.Certificates.api6D",
    registered: "Reg. No: API6D/1234/5678",
    icon: <IoLeafOutline size={40} />,
  },
  {
    id: "API 650",
    title: "Quality.Certificates.api650",
    registered: "Reg. No: API650/1234/5678",
    icon: <IoLeafOutline size={40} />,
  },
];

export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <div className="w-full py-10 bg-background">
      <motion.div ref={emblaRef} initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }} className="overflow-hidden">
        <div className="flex select-none">
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: { opacity: 1 },
              }}
              transition={{
                duration: 0.7,
                delay: 0.15 * index,
                ease: "easeInOut",
              }}
              className={`min-w-0 flex-[0_0_30%] pr-6`}
            >
              <div
                className="
                flex flex-col items-center p-8 h-full
                bg-surface rounded-sm text-center
                shadow-md shadow-black/5 
                border-t-4 border-transparent hover:border-primary
                transition-all duration-300 group
              "
              >
                <div className="bg-surface rounded-full border border-secondary p-1 text-secondary group-hover:scale-110 duration-300">
                  <div className="bg-surface rounded-full border border-secondary p-3">{item.icon}</div>
                </div>
                <span className="text-2xl font-semibold text-primary mt-5 mb-1">{item.id}</span>
                <div className="font-medium text-sm opacity-70">{item.registered}</div>
                <div className="h-1 w-[90%] bg-primary/10 my-8" />
                <div className="italic font-light tracking-wide">
                  "<SpanL>{item.title}</SpanL>"
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
