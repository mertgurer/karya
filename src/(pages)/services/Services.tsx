"use client";

import { WelcomeHeader } from "@/components/layout/WelcomeHeader";
import Welcome from "@/assets/images/services/welcome.jpg";
import { ServiceDetails } from "@/constants";
import { ServiceSplitRow } from "./components/ServiceSplitRow";
import { SpanL } from "@/components/ui";
import ServiceCard from "../home/components/ServiceCard";

export const Services = () => {
  const servicePairs = [];
  for (let i = 0; i < ServiceDetails.length; i += 2) {
    servicePairs.push(ServiceDetails.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col w-full">
      <WelcomeHeader image={Welcome} title={"Services.title"} subtitle={"Services.subtitle"} />
      <div className="flex flex-col gap-5 h-[50vh] pb-[5%] my-10 mx-[5%] max-md:h-auto max-md:pb-[3%]">
        <SpanL
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl mt-auto max-md:text-3xl"
        >
          Services.secondTitle
        </SpanL>
        <SpanL
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="opacity-80 max-md:text-sm"
        >
          Services.description
        </SpanL>
      </div>
      <div className="flex flex-col w-full mb-[0.5vw] gap-[0.5vw] max-md:hidden">
        {servicePairs.map((pair, index) => {
          if (pair.length < 2) return null;

          return <ServiceSplitRow key={index} leftService={pair[0]} rightService={pair[1]} reverse={index % 2 === 1} />;
        })}
      </div>
      <div className="flex flex-col w-full md:hidden">
        {ServiceDetails.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
