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

export const Project = ({ project }: ProjectProps) => {
  const locale = useLocale();

  return (
    <div className="flex flex-col">
      <div className="relative inset-0 h-[60vh]">
        <Image
          src={project.image}
          alt={`${project.id}-image`}
          fill
          priority
          sizes="100%"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
      </div>
      <div className="flex gap-[12%] pl-[10%] pr-[13%] -mt-32 mb-20 z-10 ">
        <div className="flex flex-col flex-62">
          <SpanL
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="px-7 pb-5 text-5xl font-semibold text-on-primary"
          >{`Projects.Project.${project.id}.location`}</SpanL>
          <div className="flex flex-col px-7 pt-20 mb-10 bg-background text-on-background">
            <SpanL className="text-secondary font-semibold">
              Projects.summary
            </SpanL>
            <SpanL className="text-4xl">{`Projects.Project.${project.id}.title`}</SpanL>
            <SpanL
              noWrap
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              className="text-lg mt-10 font-light"
            >{`Projects.Project.${project.id}.description`}</SpanL>
          </div>
          <div className="flex flex-col gap-3 px-7 mb-16">
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
          </div>
          <div className="flex flex-col gap-8 px-7">
            <SpanL className="text-secondary font-semibold">
              Projects.services
            </SpanL>
            <div className="grid grid-cols-3">
              {project.services.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col items-center gap-3 text-secondary"
                >
                  <div className="relative flex items-center">
                    <div className="absolute right-full w-1/2 scale-x-[0.7] -translate-x-1 overflow-hidden text-primary opacity-80">
                      <GiLaurels size={72} />
                    </div>
                    <div className="text-primary">{service.icon}</div>
                    <div className="absolute left-full w-1/2 -scale-x-[0.7] translate-x-1 overflow-hidden text-primary opacity-80">
                      <GiLaurels size={72} />
                    </div>
                  </div>
                  <SpanL className="text-primary">{service.label}</SpanL>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-38 p-10 bg-primary shadow-[0_10px_25px_5px_rgba(0,0,0,0.15)]">
          <div className="flex gap-1 items-center">
            |<SpanL className="font-medium text-sm">Projects.details</SpanL>
          </div>
          <SpanL className="font-medium text-xl mt-5">
            {`Projects.Project.${project.id}.location`}
          </SpanL>
          <SpanL noWrap className="font-light mt-2 mb-7">
            {`Projects.Project.${project.id}.smallDescription`}
          </SpanL>
          <div className="flex flex-col gap-5">
            {DetailFields.map((field, index) => (
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
                  <SpanL upperCase className="text-sm font-extralight">
                    {field.label}
                  </SpanL>
                  <div className="flex gap-1 items-center font-semibold">
                    {field.valueForm === "object" ? (
                      <span>{project[field.key as keyof typeof Project]}</span>
                    ) : field.valueForm === "date" ? (
                      <span>
                        {formatProjectDate(
                          project[field.key as keyof typeof Project],
                          locale
                        )}
                      </span>
                    ) : field.valueForm === "number" ? (
                      <span>
                        {formatProjectNumber(
                          project[field.key as keyof typeof Project],
                          locale
                        )}
                      </span>
                    ) : (
                      <span>No value</span>
                    )}
                    {field.unit && <SpanL>{`Common.${field.unit}`}</SpanL>}
                  </div>
                </motion.div>
              </Fragment>
            ))}
          </div>
          <ButtonL
            afterElement={<IoCloudDownloadOutline size={24} />}
            className="self-stretch w-full! py-3 px-6 rounded-none! font-medium text-lg justify-between bg-secondary mt-20 shadow-md shadow-black/20 hover:-translate-y-1 duration-300"
          >
            Projects.projectPresentation
          </ButtonL>
        </div>
      </div>
    </div>
  );
};
