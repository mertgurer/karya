"use client";

import Welcome from "@/assets/images/corporate/welcome.jpg";
import { useState } from "react";
import { ButtonL } from "@/components/ui/ButtonL";
import { About } from "./components/About";
import { Values } from "./components/Values";
import { Mission } from "./components/Mission";
import { Brochure } from "./components/Brochure";
import { Privacy } from "./components/Privacy";
import { WelcomeHeader } from "@/components/layout/WelcomeHeader";
import { useSearchParams } from "next/navigation";

const CorporateTabs = [
  { id: "about", view: <About /> },
  { id: "values", view: <Values /> },
  { id: "mission", view: <Mission /> },
  { id: "brochure", view: <Brochure /> },
  { id: "privacyPolicy", view: <Privacy /> },
];

export const Corporate = () => {
  const searchParams = useSearchParams();

  const [selectedTabIndex, setSelectedTabIndex] = useState(() => {
    console.log(searchParams.has("privacy"));

    if (searchParams.has("privacy")) {
      return 4;
    }
    return 0;
  });

  return (
    <div className="flex flex-col w-full">
      <WelcomeHeader
        image={Welcome}
        title={"Corporate.title"}
        subtitle={"Corporate.subtitle"}
      />
      <div className="flex self-center max-md:w-full max-md:grid max-md:grid-cols-2">
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
              } duration-1000 ease-in-out`}
            >
              {tab.view}
            </div>
          );
        })}
      </div>
    </div>
  );
};
