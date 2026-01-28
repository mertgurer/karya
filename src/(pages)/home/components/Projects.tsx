"use client";

import { SpanL } from "@/components/ui/SpanL";
import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { ProjectDetails } from "@/constants";

export const Projects = ({ index }: { index: number }) => {
  return (
    <section id="projects" className="relative flex flex-col w-full gap-10 pb-48 pt-10 backdrop-blur-md max-2xl:pt-36 max-2xl:pb-40 max-md:py-20 max-md:gap-4">
      <motion.div
        variants={{ hidden: {}, show: {} }}
        initial="hidden"
        whileInView="show"
        className="relative flex flex-col w-[34%] -translate-x-[5px] self-end max-2xl:w-[33.6%] max-md:w-full max-md:px-8"
      >
        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="text-secondary"
        >
          <span className="">0{index}. </span>
          <SpanL className="font-semibold">Home.Projects.sectionTitle</SpanL>
        </motion.div> */}
        <SpanL
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="text-4xl text-primary mb-10"
        >
          Home.Projects.title
        </SpanL>
        <motion.div
          variants={{
            hidden: { y: "-100%" },
            show: { y: 0 },
          }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="absolute h-[300px] w-0.5 bg-primary -left-4 bottom-2 max-md:left-4 max-md:h-96"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ amount: 0.5 }}
        className="relative grid grid-cols-4 gap-2 px-[5%] max-2xl:px-[3%] max-md:grid-cols-1"
      >
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="absolute w-0.5 h-44 right-[13.35%] -bottom-48 bg-primary max-2xl:h-36 max-2xl:-bottom-40 max-md:right-[3.9%]"
        />
        {ProjectDetails.slice(0, 4).map((project, index) => {
          return <ProjectCard key={project.id} index={index} project={project} />;
        })}
      </motion.div>
    </section>
  );
};
