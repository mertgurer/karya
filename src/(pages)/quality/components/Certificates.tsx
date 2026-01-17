import { SpanL } from "@/components/ui";
import { Carousel } from "./Carousel";

export const Certificates = () => {
  return (
    <div className="flex flex-col my-32">
      <SpanL className="text-4xl text-primary px-[12%] max-2xl:px-[8%]">
        Quality.Certificates.title
      </SpanL>
      <SpanL className="text-primary px-[12%] opacity-80 mt-2 text-sm max-2xl:px-[8%]">
        Quality.Certificates.description
      </SpanL>
      <div className="px-[10%] max-2xl:px-[6%]">
        <Carousel />
      </div>
    </div>
  );
};
