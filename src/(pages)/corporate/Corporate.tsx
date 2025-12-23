"use client";

import Image from "next/image";
import Welcome from "@/assets/images/corporate/welcome.jpg";
import { SpanL } from "@/components/ui/SpanL";
import { useState } from "react";
import { ButtonL } from "@/components/ui/ButtonL";
import { About } from "./components/About";
import { Approach } from "./components/Approach";
import { History } from "./components/History";
import { motion } from "motion/react";

const CorporateTabs = [
  { id: "about", view: <About /> },
  { id: "approach", view: <Approach /> },
  { id: "history", view: <History /> },
];

export const Corporate = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div className="flex flex-col w-full">
      <div className="relative flex h-[50vh] items-end">
        <div className="absolute inset-0">
          <Image
            src={Welcome}
            alt="welcome-image"
            fill
            priority
            sizes="100%"
            className="object-cover -scale-x-100"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col pl-[14%] pb-16 gap-2 z-10 max-2xl:pl-[8%]"
        >
          <SpanL className="text-5xl font-bold max-2xl:text-4xl">
            Corporate.title
          </SpanL>
          <SpanL className="text-xl text-primary bg-surface w-max px-4 py-1 max-2xl:text-lg">
            Corporate.subtitle
          </SpanL>
        </motion.div>
      </div>
      <div className="flex self-center max-md:w-full">
        {CorporateTabs.map((tab, index) => {
          return (
            <ButtonL
              key={tab.id}
              onClick={() => setSelectedTabIndex(index)}
              upperCase
              className={`border-r border-r-primary/30 py-4 px-6 font-medium text-sm rounded-none! max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:px-0 ${
                index === selectedTabIndex
                  ? "text-secondary bg-surface"
                  : "text-on-background"
              } ${
                index === 0 ? "border-l border-l-primary/30" : ""
              } hover:text-secondary hover:bg-surface duration-300`}
            >
              {`Corporate.${tab.id}`}
            </ButtonL>
          );
        })}
      </div>
      <div className="relative flex w-full h-max bg-surface overflow-hidden">
        {/* {CorporateTabs.map((tab, index) => {
          return (
            <div
              key={tab.id}
              className={`flex w-full text-on-background py-20 ${
                index < selectedTabIndex
                  ? "-translate-x-full opacity-0 absolute"
                  : index > selectedTabIndex
                  ? "translate-x-full opacity-0 absolute"
                  : ""
              } duration-700`}
            >
              {tab.view}
            </div>
          );
        })} */}
        {CorporateTabs.map((tab, index) => {
          const translate = -100 * (selectedTabIndex - index);

          return (
            <div
              key={tab.id}
              style={{
                transform: `translateX(${translate}%)`,
              }}
              className={`flex w-full text-on-background py-20 max-md:py-10 ${
                index !== selectedTabIndex ? `absolute` : "relative"
              } duration-700`}
            >
              {tab.view}
            </div>
          );
        })}
      </div>
    </div>
  );
};
