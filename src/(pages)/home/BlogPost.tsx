"use client";

import Image from "next/image";
import { BlogProps } from "./Home.types";
import { SpanL } from "@/components/ui/SpanL";
import { motion } from "motion/react";
import { Lightning } from "./components/Lightning";
import { Link } from "@/i18n";
import { HiArrowRight } from "react-icons/hi";

export const BlogPost = ({ blog, reverse = false }: BlogProps) => {
  const { id, image, link } = blog;

  return (
    <section
      id={id}
      className="relative w-full bg-surface shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.10),0_20px_25px_-5px_rgba(0,0,0,0.10)] z-10"
    >
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 120 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        className={`absolute w-0.5 top-0 bg-primary ${
          reverse ? "right-[5%]" : "left-[5%]"
        }`}
      />
      <div
        className={`flex flex-col my-32 gap-5 ${
          reverse ? "items-end pr-30" : "items-start pl-30"
        }`}
      >
        <SpanL
          className={`bg-primary text-on-primary py-2 px-10 ${
            reverse ? "-mr-7" : "-ml-7"
          }`}
        >{`Home.Blogs.${id}.motto`}</SpanL>
        <SpanL className="text-primary text-5xl">{`Home.Blogs.${id}.title`}</SpanL>
      </div>
      <div
        className={`absolute top-44 ${reverse ? "right-[5%]" : "left-[5%]"}`}
      >
        <Lightning height={100} reverse={reverse} />
      </div>
      <div
        className={`flex items-center ${
          reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <motion.div
          initial={{ filter: "blur(8px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: false }}
          className="relative w-[65%] aspect-[2.5] shrink-0"
        >
          <Image
            src={image}
            alt={"logo"}
            fill
            priority
            sizes="100%"
            className="object-cover"
          />
        </motion.div>
        <div className="flex flex-col mx-20 mb-20 gap-6 items-start">
          <SpanL className="text-4xl text-primary font-medium mb-8">{`Home.Blogs.${id}.subtitle`}</SpanL>
          <SpanL className="text-on-surface text-sm">{`Home.Blogs.${id}.description`}</SpanL>
          <Link href={link} className="group flex gap-0 items-center py-2">
            <SpanL className="bg-secondary text-on-secondary px-2 py-1 text-lg group-hover:translate-x-2 duration-700">
              Common.learnMore
            </SpanL>
            <div className="bg-secondary text-on-secondary p-2 -translate-x-1 group-hover:translate-x-6 duration-700">
              <HiArrowRight size={20} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
