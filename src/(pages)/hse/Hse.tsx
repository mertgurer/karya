"use client";

import Welcome from "@/assets/images/hse/welcome.jpg";
import { WelcomeHeader } from "@/components/layout/WelcomeHeader";
import { Policy } from "./components/Policy";
import { Culture } from "./components/Culture";
import { Topics } from "./components/Topics";
import { FocusAreas } from "./components/FocusAreas";
import { Performance } from "./components/Performance";
import { Environmental } from "./components/Environmental";
import { Process } from "./components/Process";
export const Hse = () => {
  return (
    <div className="flex flex-col w-full">
      <WelcomeHeader image={Welcome} title={"Hse.title"} subtitle={"Hse.subtitle"} />
      <Policy />
      <Performance />
      <div className="h-32 w-full overflow-hidden">
        <div className="h-32 scale-200 -translate-y-full -rotate-3 bg-primary-variant" />
      </div>
      <Process />
      <Culture />
      <FocusAreas />
      {/* <div className="h-32 w-full overflow-hidden">
        <div className="h-32 scale-200 translate-y-full -rotate-3 bg-primary" />
      </div>
      <Topics />
      <div className="h-32 w-full overflow-hidden">
        <div className="h-32 scale-200 -translate-y-full -rotate-3 bg-primary" />
      </div> */}
      <Environmental />
    </div>
  );
};
