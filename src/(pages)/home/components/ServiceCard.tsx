import { SpanL } from "@/components/ui/SpanL";
import Image from "next/image";
import { ServiceCardProps } from "../Home.types";

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div key={service.id} className="group flex relative w-full aspect-[3.8]">
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
  );
}

export default ServiceCard;
