import { SpanL } from "@/components/ui/SpanL";
import { motion } from "motion/react";
import ProjectImage1 from "@/assets/images/home/projects/project1.jpg";
import ProjectImage2 from "@/assets/images/home/projects/project2.jpg";
import ProjectImage3 from "@/assets/images/home/projects/project3.jpg";
import ProjectImage4 from "@/assets/images/home/projects/project4.jpg";
import ProjectImage5 from "@/assets/images/home/projects/project5.jpg";
import Image from "next/image";
import { IoMdPin } from "react-icons/io";
import { Link } from "@/i18n";
import { BiSolidCircleHalf } from "react-icons/bi";

const ProjectDetails = [
  {
    key: "Alpha",
    company: "Inoventa",
    image: ProjectImage1,
    size: "col-span-1 row-span-9",
    variants: { hidden: { x: 30, y: 30 }, show: { x: 0, y: 0 } },
  },
  {
    key: "Beta",
    company: "Inoventa",
    image: ProjectImage2,
    size: "col-span-1 row-span-11",
    variants: { hidden: { y: 30 }, show: { y: 0 } },
  },
  {
    key: "Gamma",
    company: "Inoventa",
    image: ProjectImage3,
    size: "col-span-1 row-span-20",
    variants: { hidden: { x: -30, y: 30 }, show: { x: 0, y: 0 } },
  },
  {
    key: "Delta",
    company: "Inoventa",
    image: ProjectImage4,
    size: "col-span-1 row-span-11",
    variants: { hidden: { x: 30, y: -30 }, show: { x: 0, y: 0 } },
  },
  {
    key: "Epsilon",
    company: "Inoventa",
    image: ProjectImage5,
    size: "col-span-1 row-span-9",
    variants: { hidden: { y: -30 }, show: { y: 0 } },
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col w-full px-[15%] gap-10 mb-32"
    >
      <motion.div
        variants={{ hidden: {}, show: {} }}
        initial="hidden"
        whileInView="show"
        className="relative flex flex-col w-[40%] self-end"
      >
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
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="text-4xl text-primary"
        >
          Home.Projects.title
        </SpanL>
        <motion.div
          variants={{
            hidden: { y: "-100%" },
            show: { y: 0 },
          }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="absolute h-56 w-0.5 bg-primary -left-4 bottom-2"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ amount: 0.5 }}
        className="relative grid grid-cols-3 grid-rows-[repeat(20,22px)] gap-2"
      >
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="absolute w-0.5 h-28 left-0 -bottom-32 bg-primary"
        />
        {ProjectDetails.map((project, index) => {
          return (
            <motion.div
              key={project.key}
              variants={project.variants}
              transition={{
                duration: 1.2,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
              className={`group flex shadow-lg rounded-xs overflow-hidden z-${
                ProjectDetails.length - index
              } ${project.size}`}
            >
              <Link href={"/"} className="relative flex flex-col">
                <div className="absolute inset-0 h-full w-full">
                  <Image
                    src={project.image}
                    alt={project.key}
                    fill
                    priority
                    sizes="100%"
                    className="object-cover transition-all duration-700 ease-in-out grayscale-0 group-hover:grayscale-75"
                  />
                </div>
                <div className="absolute bottom-0 -rotate-6 scale-200 bg-on-surface/30 backdrop-blur-xs w-full h-10" />
                <div className="absolute flex items-center gap-4 bottom-5 -right-3 group-hover:opacity-0 duration-200">
                  <SpanL className="font-semibold">
                    {`Home.Projects.Projects.${project.key}.title`}
                  </SpanL>
                  <BiSolidCircleHalf size={24} className="rotate-180" />
                </div>
                <div className="z-10 flex flex-col justify-between h-full">
                  <div
                    className="
                      flex items-center m-8 gap-2 text-surface bg-on-surface/30 backdrop-blur-md px-2 py-1 w-max 
                      opacity-0 group-hover:opacity-100 duration-700"
                  >
                    <BiSolidCircleHalf size={12} />
                    <SpanL className="font-semibold">
                      {`Home.Projects.Projects.${project.key}.title`}
                    </SpanL>
                  </div>
                  <div
                    className="
                    flex flex-col gap-2 bg-on-surface/50 backdrop-blur-sm pt-7 pb-12 px-10 
                    translate-y-full group-hover:translate-0 duration-500"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium ml-1">
                        {project.company}
                      </span>
                      <div className="flex items-center gap-1">
                        <SpanL className="font-extralight text-sm">{`Home.Projects.Projects.${project.key}.location`}</SpanL>
                        <IoMdPin size={16} className="mb-0.5" />
                      </div>
                    </div>
                    <SpanL className="text-surface font-extralight text-xs">{`Home.Projects.Projects.${project.key}.description`}</SpanL>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
