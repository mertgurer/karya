"use client";

import Welcome from "@/assets/images/projects/welcome.jpg";
import Image from "next/image";
import { ProjectDetails } from "@/constants";
import { IoMdPin } from "react-icons/io";
import { Link } from "@/i18n";
import { motion } from "motion/react";
import { SpanL } from "@/components/ui/SpanL";
import { useLocale } from "next-intl";
import { WelcomeHeader } from "@/components/layout/WelcomeHeader";

export const Projects = () => {
  return (
    <div className="flex flex-col w-full">
      <WelcomeHeader image={Welcome} title={"Projects.title"} subtitle={"Projects.subtitle"} />
      <div className="grid grid-cols-3 w-full px-[14%] py-32 gap-10 max-2xl:px-[8%] max-md:grid-cols-1 max-md:gap-5 max-md:py-20">
        {ProjectDetails.map((x, index) => (
          <motion.div
            key={x.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          >
            <Link href={`projects/${x.id}`} className="group flex flex-col w-full aspect-[1.1] rounded-sm overflow-hidden">
              <div className="relative w-full h-[66%] overflow-hidden">
                <Image src={x.image} alt={`${x.id}-image`} fill priority sizes="100%" className="object-cover" />
                {(() => {
                  const startYear = new Date(x.startDate).getFullYear();
                  const endYear = x.endDate ? new Date(x.endDate).getFullYear() : null;

                  return (
                    <div className="absolute flex top-3 right-3 p-1 rounded-xs text-on-primary text-sm bg-black/20 backdrop-blur-md opacity-0 group-hover:opacity-100 duration-300">
                      {startYear === endYear || !endYear ? startYear : `${startYear} - ${endYear}`}
                    </div>
                  );
                })()}
                <div className="absolute bottom-0 p-5 text-sm bg-black/20 backdrop-blur-md w-full translate-y-full group-hover:translate-0 duration-300">
                  <SpanL className="text-on-primary line-clamp-4">{`Projects.Project.${x.id}.description`}</SpanL>
                </div>
              </div>
              <div className="flex flex-col group-hover:translate-x-2 duration-300">
                <div className="flex items-center gap-1 opacity-70 my-2 text-primary">
                  <IoMdPin size={16} />
                  <SpanL className="max-2xl:text-sm">{`Projects.Project.${x.id}.location`}</SpanL>
                </div>
                <SpanL className="text-3xl max-2xl:text-2xl">{`Projects.Project.${x.id}.title`}</SpanL>
                <span className="font-medium opacity-70">{x.client}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
