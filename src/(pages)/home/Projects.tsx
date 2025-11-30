import { SpanL } from "@/components/ui/SpanL";
import { motion } from "motion/react";
import ProjectImage1 from "@/assets/images/home/project1.jpg";
import Image from "next/image";

const ProjectDetails = [
  {
    title: "Project Alpha",
    description: "A groundbreaking infrastructure project.",
    company: "BuildCorp",
    image: ProjectImage1,
  },
  {
    title: "Project Beta",
    description: "Innovative solutions for modern challenges.",
    company: "Innovatech",
    image: ProjectImage1,
  },
  {
    title: "Project Gamma",
    description: "Sustainable development for future generations.",
    company: "EcoBuild",
    image: ProjectImage1,
  },
  {
    title: "Project Delta",
    description: "Revolutionizing urban landscapes.",
    company: "UrbanWorks",
    image: ProjectImage1,
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col w-full h-screen px-[10%] gap-10"
    >
      <div className="flex flex-col w-[40%] self-end">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-secondary"
        >
          <span className="">03. </span>
          <SpanL className="font-semibold">Home.Projects.sectionTitle</SpanL>
        </motion.div>
        <SpanL
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: "easeInOut" }}
          className="text-4xl text-primary"
        >
          Home.Projects.title
        </SpanL>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {ProjectDetails.map((project, index) => {
          return (
            <div
              key={index}
              className="group bg-surface shadow-xl rounded-xs flex flex-col overflow-hidden duration-1000"
            >
              <div className="relative aspect-[0.65] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="100%"
                  className="object-cover transition-all duration-700 ease-in-out grayscale-0 group-hover:grayscale-50"
                />
                <div
                  className={`
                    absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 duration-300
                    p-10 flex flex-col`}
                >
                  <SpanL className="text-secondary">{project.title}</SpanL>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
