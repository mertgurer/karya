"use client";

import { ButtonL } from "@/components/ui/ButtonL/ButtonL";
import { ProjectProps } from "./Project.types";
import { SpanL } from "@/components/ui/SpanL";
import { DetailFields } from "@/constants/constants";
import { formatProjectDate, formatProjectNumber } from "@/lib/helper";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { GiLaurels } from "react-icons/gi";
import { Dot } from "lucide-react";

export const Project = ({ project }: ProjectProps) => {
  const locale = useLocale();

  return (
    <div className="flex flex-col">
      <div className="relative inset-0 h-[60vh] max-md:h-[40vh]">
        <Image src={project.image} alt={`${project.id}-image`} fill priority sizes="100%" className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
      </div>
      <div className="flex gap-[12%] pl-[10%] pr-[13%] -mt-32 mb-20 z-10 max-2xl:pl-[6%] max-2xl:pr-[9%] max-2xl:gap-[8%] max-md:flex-col max-md:gap-10 max-md:px-[3%]">
        <div className="flex flex-col flex-62">
          <SpanL
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="px-7 pb-5 text-5xl font-semibold text-on-primary max-2xl:text-4xl max-md:px-5"
          >{`Projects.Project.${project.id}.location`}</SpanL>
          <div className="flex flex-col px-7 pt-20 mb-16 bg-background text-on-background max-2xl:pt-16 max-2xl:mb-12 max-md:pt-10 max-md:px-5">
            <SpanL className="text-primary-variant font-semibold">Projects.summary</SpanL>
            <SpanL className="text-4xl max-2xl:text-3xl">{`Projects.Project.${project.id}.title`}</SpanL>
            <SpanL
              noWrap
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              className="text-lg mt-10 font-light max-2xl:text-base"
            >{`Projects.Project.${project.id}.description`}</SpanL>
          </div>
          {/* <div className="flex flex-col gap-3 px-7 mb-16 max-md:px-5">
            <SpanL className="text-secondary font-semibold">
              Projects.certificates
            </SpanL>
            <div className="flex gap-3">
              {project.certificates.map((certificate) => (
                <button
                  key={certificate}
                  className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium shadow-md shadow-black/10 hover:-translate-y-1 duration-300"
                >
                  {certificate}
                </button>
              ))}
            </div>
          </div> */}
          <div className="flex flex-col gap-4 px-7 mb-16">
            <SpanL className="text-primary-variant font-semibold">Projects.scope</SpanL>
            <div className="flex flex-col gap-1">
              {Array.from({ length: project.scopeCount }, (_, i) => i + 1).map((num) => (
                <div key={num} className="flex gap-1">
                  <Dot size={20} className="text-primary" />
                  <SpanL>{`Projects.Project.${project.id}.scope.${num}`}</SpanL>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 px-7 max-2xl:gap-4 max-md:px-5">
            <SpanL className="text-primary-variant font-semibold">Projects.services</SpanL>
            <div className="grid grid-cols-4 w-[120%] max-md:grid-cols-2">
              {project.services.map((service) => (
                <div key={service.id} className="flex flex-col items-center gap-3 text-secondary max-2xl:scale-85">
                  <div className="relative flex items-center">
                    <div className="absolute right-full w-1/2 scale-x-[0.7] -translate-x-1 overflow-hidden  opacity-80">
                      <GiLaurels size={72} />
                    </div>
                    <div>{service.icon}</div>
                    <div className="absolute left-full w-1/2 -scale-x-[0.7] translate-x-1 overflow-hidden opacity-80">
                      <GiLaurels size={72} />
                    </div>
                  </div>
                  <SpanL noWrap className=" text-center whitespace-nowrap px-2">
                    {service.label}
                  </SpanL>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-38 p-10 bg-primary text-on-primary h-max shadow-[0_10px_25px_5px_rgba(0,0,0,0.15)] max-md:p-8">
          <div className="flex gap-1 items-center">
            |<SpanL className="font-medium text-sm">Projects.details</SpanL>
          </div>
          <SpanL className="font-medium text-xl mt-5">{`Projects.Project.${project.id}.location`}</SpanL>
          <SpanL noWrap className="mb-2 opacity-80 max-2xl:text-sm">
            {`Projects.Project.${project.id}.scopeDescription`}
          </SpanL>
          <SpanL noWrap className="font-light mt-4 mb-7 max-2xl:text-sm">
            {`Projects.Project.${project.id}.smallDescription`}
          </SpanL>
          <div className="flex flex-col gap-5">
            {DetailFields.map((field, index) => {
              if (field.valueForm === "number" && !(field.key in project)) return null;

              return (
                <Fragment key={field.key}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 2 * 0.1 }}
                    className="bg-on-primary w-full h-px"
                  />
                  <motion.div
                    key={field.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: (index * 2 + 1) * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <SpanL upperCase noWrap className="text-sm font-extralight whitespace-nowrap max-2xl:text-xs">
                      {field.label}
                    </SpanL>
                    <div className="flex gap-1 items-center font-semibold max-2xl:text-sm">
                      {field.valueForm === "object" ? (
                        <span>{project[field.key as keyof typeof Project]}</span>
                      ) : field.valueForm === "startDate" || field.valueForm === "endDate" ? (
                        <span>
                          {project[field.key as keyof typeof Project] == null ? "-" : formatProjectDate(project[field.key as keyof typeof Project], locale)}
                        </span>
                      ) : field.valueForm === "number" ? (
                        <span>{formatProjectNumber(project[field.key as keyof typeof Project], locale)}</span>
                      ) : field.valueForm === "localeString" ? (
                        <SpanL className="text-end">{`Projects.Project.${project.id}.${field.key}`}</SpanL>
                      ) : field.valueForm === "ProjectStatus" ? (
                        <SpanL className={`text-end ${project[field.key as keyof typeof Project] ? "text-green-500 font-bold" : ""}`}>
                          {`Common.${project[field.key as keyof typeof Project] ? "completed" : "onGoing"}`}
                        </SpanL>
                      ) : (
                        <span>No value</span>
                      )}
                      {field.unit && <SpanL>{`Common.${field.unit}`}</SpanL>}
                    </div>
                  </motion.div>
                </Fragment>
              );
            })}
          </div>
          {/* <ButtonL
            afterElement={<IoCloudDownloadOutline size={24} />}
            className="
              self-stretch w-full! py-3 px-6 rounded-none! font-medium text-lg justify-between bg-secondary mt-20 
              shadow-md shadow-black/20 hover:-translate-y-1 duration-300 max-2xl:text-base max-md:mt-10"
          >
            Projects.projectPresentation
          </ButtonL> */}
        </div>
      </div>
    </div>
  );
};
