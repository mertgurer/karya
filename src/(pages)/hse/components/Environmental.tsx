import { SpanL } from "@/components/ui";
import Image from "next/image";
import CultureImage from "@/assets/images/hse/culture.jpg";

export const Environmental = () => {
  return (
    <div className="flex gap-10 px-[12%] py-28 max-2xl:px-[8%]">
      <div className="flex-1 relative rounded-sm overflow-hidden">
        <Image src={CultureImage} alt="hse-policy" fill priority sizes="100%" className="object-cover" />
      </div>
      <div className="flex-3 flex flex-col py-32">
        <SpanL className="text-4xl ml-1 font-medium mb-10 text-primary">Hse.Environmental.title</SpanL>
        <SpanL className="tracking-wider font-light max-2xl:text-sm">Hse.Environmental.description</SpanL>
      </div>
    </div>
  );
};
