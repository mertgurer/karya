"use client";

import { SpanL } from "@/components/ui/SpanL";
import { motion } from "motion/react";
import ProjectImage1 from "@/assets/images/home/projects/project1.jpg";
import ProjectImage2 from "@/assets/images/home/projects/project2.jpg";
import ProjectImage3 from "@/assets/images/home/projects/project3.jpg";
import ProjectImage4 from "@/assets/images/home/projects/project4.jpg";
import { Project } from "./Home.types";
import ProjectCard from "./components/ProjectCard";

const ProjectDetails = [
  {
    id: "Alpha",
    company: "Inoventa",
    image: ProjectImage1,
  },
  {
    id: "Beta",
    company: "Inoventa",
    image: ProjectImage2,
  },
  {
    id: "Gamma",
    company: "Inoventa",
    image: ProjectImage3,
  },
  {
    id: "Delta",
    company: "Inoventa",
    image: ProjectImage4,
  },
] as Project[];

export const Projects = ({ index }: { index: number }) => {
  return (
    <section
      id="projects"
      className="relative flex flex-col w-full gap-10 pb-48 pt-44 bg-primary/80 backdrop-blur-md"
    >
      <motion.div
        variants={{ hidden: {}, show: {} }}
        initial="hidden"
        whileInView="show"
        className="relative flex flex-col w-[34%] -translate-x-[5px] self-end"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-secondary"
        >
          <span className="">0{index}. </span>
          <SpanL className="font-semibold">Home.Projects.sectionTitle</SpanL>
        </motion.div>
        <SpanL
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="text-4xl text-on-primary"
        >
          Home.Projects.title
        </SpanL>
        <motion.div
          variants={{
            hidden: { y: "-100%" },
            show: { y: 0 },
          }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="absolute h-[300px] w-0.5 bg-on-primary -left-4 bottom-2"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ amount: 0.5 }}
        className="relative grid grid-cols-4 gap-2 px-[5%]"
      >
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="absolute w-0.5 h-44 left-[5%] -bottom-48 bg-on-primary"
        />
        {ProjectDetails.map((project, index) => {
          return (
            <ProjectCard key={project.id} index={index} project={project} />
          );
        })}
      </motion.div>
    </section>
  );
};
