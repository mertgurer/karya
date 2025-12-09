import { SpanL } from "@/components/ui/SpanL";
import Image from "next/image";
import { ServiceCardProps } from "../Home.types";
import { useState } from "react";
import { motion } from "motion/react";

function ServiceCard({ service }: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            key={service.id}
            className="group flex relative w-full aspect-[3.8] max-2xl:aspect-[3.3]"
        >
            <motion.div
                initial={{ filter: "grayscale(1)" }}
                animate={{
                    filter: isHovered ? "grayscale(0)" : "grayscale(1)",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
            >
                <Image
                    src={service.image}
                    alt={service.id}
                    fill
                    priority
                    sizes="100%"
                    className="object-cover"
                />
            </motion.div>
            <div className="absolute inset-0 bg-on-surface/40" />
            <div className="relative flex self-end mb-10 ml-10 z-10 w-max max-md:mb-4 max-md:ml-4">
                <SpanL className="text-surface font-medium text-4xl max-md:text-2xl">{`Home.Services.${service.id}.title`}</SpanL>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? "100%" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute -bottom-7 left-0 bg-surface h-1 origin-left max-md:-bottom-3"
                />
            </div>
        </div>
    );
}

export default ServiceCard;
