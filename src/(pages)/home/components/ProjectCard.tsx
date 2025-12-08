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
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 1.2,
        delay: index * 0.1,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={`group flex shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10)] shadow-background/20 rounded-xs overflow-hidden aspect-4/5 hover:-translate-y-4 duration-700`}
    >
      <Link href={"/"} className="relative flex w-full">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={project.image}
            alt={project.id}
            fill
            priority
            sizes="100%"
            className="object-cover transition-all duration-1000 ease-in-out grayscale-0 group-hover:grayscale-100"
          />
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-on-background/50 backdrop-blur-xs" />
        <div
          className={`
            absolute inset-0 z-0 group-hover:opacity-0 duration-1000 
            bg-[linear-gradient(to_top,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0)_80%)]
        `}
        />
        <div className="flex py-12 mx-10 gap-10 z-20 overflow-hidden h-full">
          <div className="absolute top-[80%] flex flex-col group-hover:top-12 duration-1000">
            <div className="flex items-center gap-1 -ml-0.5 text-on-primary">
              <IoMdPin size={16} />
              <SpanL className="font-light">{`Home.Projects.Projects.${project.id}.location`}</SpanL>
            </div>
            <SpanL className="font-semibold text-3xl">
              {`Home.Projects.Projects.${project.id}.title`}
            </SpanL>
          </div>

          <motion.div
            ref={contentRef}
            variants={descriptionVariants}
            initial={{ marginBottom: -300 }}
            animate={isHovered ? "expanded" : "collapsed"}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className={`flex flex-col gap-1 self-end`}
          >
            <span className="font-medium text-xl ml-1">{project.company}</span>
            <SpanL className="text-surface font-light text-sm">{`Home.Projects.Projects.${project.id}.description`}</SpanL>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
