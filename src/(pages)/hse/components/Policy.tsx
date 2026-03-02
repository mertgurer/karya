import { SpanL } from "@/components/ui";
import Image from "next/image";
import PolicyImage from "@/assets/images/hse/policy-2.jpg";

export const Policy = () => {
  return (
    <div className="flex flex-col px-[12%] py-20 max-2xl:px-[8%]">
      <SpanL className="text-5xl ml-1 font-semibold mb-12 text-primary">Hse.Policy.title</SpanL>
      <div className="flex gap-20">
        <SpanL className="flex-2 tracking-wider text-justify font-light">Hse.Policy.text</SpanL>
        <div className="relative flex-1 aspect-3/4 z-10 rounded-sm overflow-hidden -mb-[15%] max-2xl:-mb-[12%]">
          <Image src={PolicyImage} alt="hse-policy" fill priority sizes="100%" className="object-cover" />
        </div>
      </div>
    </div>
  );
};
