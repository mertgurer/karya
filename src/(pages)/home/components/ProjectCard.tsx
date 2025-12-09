"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ProjectCardProps } from "../Home.types";
import { Link } from "@/i18n";
import Image from "next/image";
import { IoMdPin } from "react-icons/io";
import { SpanL } from "@/components/ui/SpanL";

function ProjectCard({ index, project }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, []);

    const descriptionVariants = {
        collapsed: { marginBottom: -contentHeight - 52 },
        expanded: { marginBottom: 0 },
    };

    return (
        <motion.div
            key={project.id}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
                duration: 1.2,
                delay: index * 0.1,
                ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className={`flex shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10)] shadow-background/20 rounded-xs overflow-hidden aspect-4/5 max-2xl:aspect-[0.65] max-md:aspect-[0.86] hover:-translate-y-2 hover:max-2xl:-translate-y-1 duration-700`}
        >
            <Link href={"/"} className="relative flex w-full">
                <motion.div
                    initial={{ filter: "grayscale(0)" }}
                    animate={{
                        filter: isHovered ? "grayscale(1)" : "grayscale(0)",
                    }}
                    transition={{ duration: 1.0, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full"
                >
                    <Image
                        src={project.image}
                        alt={project.id}
                        fill
                        priority
                        sizes="100%"
                        className="object-cover"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0  bg-on-background/50 backdrop-blur-xs"
                />
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isHovered ? 0 : 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className={`
            absolute inset-0 z-0 
            bg-[linear-gradient(to_top,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0)_80%)]
        `}
                />
                <div className="flex py-12 mx-10 gap-10 z-20 overflow-hidden h-full max-2xl:py-8 max-2xl:mx-5">
                    <motion.div
                        initial={{ top: "80%" }}
                        animate={{ top: isHovered ? 48 : "80%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute flex flex-col"
                    >
                        <div className="flex items-center gap-1 -ml-0.5 text-on-primary">
                            <IoMdPin size={16} />
                            <SpanL className="font-light max-2xl:text-sm">{`Home.Projects.Projects.${project.id}.location`}</SpanL>
                        </div>
                        <SpanL className="font-semibold text-3xl max-2xl:text-2xl">
                            {`Home.Projects.Projects.${project.id}.title`}
                        </SpanL>
                    </motion.div>

                    <motion.div
                        ref={contentRef}
                        variants={descriptionVariants}
                        initial={{ marginBottom: -340 }}
                        animate={isHovered ? "expanded" : "collapsed"}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                        className={`flex flex-col gap-1 self-end`}
                    >
                        <span className="font-medium text-xl ml-1">
                            {project.company}
                        </span>
                        <SpanL className="text-surface font-light text-sm">{`Home.Projects.Projects.${project.id}.description`}</SpanL>
                    </motion.div>
                </div>
            </Link>
        </motion.div>
    );
}

export default ProjectCard;
