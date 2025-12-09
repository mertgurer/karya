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
            className="relative w-full flex flex-col bg-surface shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.10),0_20px_25px_-5px_rgba(0,0,0,0.10)] z-10 overflow-hidden"
        >
            <div
                className={`absolute top-44 max-md:top-28  ${
                    reverse ? "right-[5%]" : "left-[5%]"
                }`}
            >
                <Lightning height={100} reverse={reverse} />
            </div>
            <motion.div
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                className={`absolute w-0.5 top-0 bg-primary h-[120px] max-md:h-14 ${
                    reverse ? "right-[5%]" : "left-[5%]"
                }`}
            />
            <div
                className={`flex flex-col my-32 gap-5 max-md:my-16 ${
                    reverse
                        ? "items-end pr-[7%] max-md:pr-[12%]"
                        : "items-start pl-[7%] max-md:pl-[12%]"
                }`}
            >
                <SpanL
                    className={`bg-primary text-on-primary py-2 px-10 ${
                        reverse
                            ? "-mr-[2.2%] max-md:-mr-[8%]"
                            : "-ml-[2.2%] max-md:-ml-[8%]"
                    }`}
                >{`Home.Blogs.${id}.motto`}</SpanL>
                <SpanL
                    className={`text-primary text-5xl max-md:text-4xl ${
                        reverse ? "max-md:text-right" : ""
                    }`}
                >{`Home.Blogs.${id}.title`}</SpanL>
            </div>
            <div
                className={`flex items-center ${
                    reverse ? "flex-row-reverse" : "flex-row"
                } max-md:flex-col`}
            >
                <motion.div
                    initial={{ filter: "blur(8px)" }}
                    whileInView={{ filter: "blur(0px)" }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className={`relative w-[65%] aspect-[2.5] shrink-0 border-primary max-2xl:aspect-[2] max-md:w-full ${
                        reverse ? "border-l-2" : "border-r-2"
                    }`}
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
                <div className="flex flex-col mx-20 mb-20 gap-6 items-start max-2xl:mx-10 max-md:mx-5 max-md:gap-3 max-md:mb-16">
                    <SpanL className="text-4xl text-primary font-medium mb-8 max-md:mt-5">{`Home.Blogs.${id}.subtitle`}</SpanL>
                    <SpanL className="text-on-surface text-sm max-2xl:text-base">{`Home.Blogs.${id}.description`}</SpanL>
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
                        <Link
                            href={link}
                            className="group flex items-center gap-3 text-secondary mt-6 w-max"
                        >
                            <SpanL className="group-hover:translate-x-2 duration-700">
                                Common.learnMore
                            </SpanL>
                            <div className="bg-secondary text-on-secondary p-1 group-hover:translate-x-6 duration-700">
                                <HiArrowRight size={16} />
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
