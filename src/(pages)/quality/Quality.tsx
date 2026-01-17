"use client";

import { WelcomeHeader } from "@/components/layout/WelcomeHeader";
import Welcome from "@/assets/images/quality/welcome.jpg";
import {
  Certificates,
  Documentation,
  Improvement,
  Performance,
  Policy,
  Process,
} from ".";

export const Quality = () => {
  return (
    <div className="flex flex-col w-full">
      <WelcomeHeader
        image={Welcome}
        title={"Quality.title"}
        subtitle={"Quality.subtitle"}
      />
      <Policy />
      <Process />
      <Performance />
      <Documentation />
      <Improvement />
      <Certificates />
    </div>
  );
};
