import { SpanL } from "@/components/ui/SpanL";
import Image from "next/image";
import Team from "@/assets/images/corporate/team.jpg";

export const About = () => {
  return (
    <div className="flex flex-col px-[20%] w-full gap-7 max-2xl:px-[13%] max-md:px-[6%]">
      <div className="flex ml-1 gap-3 text-4xl">
        <SpanL className="font-extralight">Corporate.About.title</SpanL>
        <span className="font-semibold">2007</span>
      </div>
      <SpanL>Corporate.About.description</SpanL>
      <div className="flex gap-10 max-md:flex-col-reverse max-md:gap-5">
        <div className="relative flex-1 h-full max-md:w-full max-md:aspect-video">
          <Image
            src={Team}
            alt="team-image"
            fill
            priority
            sizes="100%"
            className="object-cover -scale-x-100"
          />
        </div>
        <SpanL className="flex-2 py-4 max-md:py-0">Corporate.About.team</SpanL>
      </div>
    </div>
  );
};
