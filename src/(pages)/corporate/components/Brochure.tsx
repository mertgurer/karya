import { ButtonL } from "@/components/ui/ButtonL";
import { SpanL } from "@/components/ui/SpanL";
import { IoMdCloudDownload } from "react-icons/io";

export const Brochure = () => {
  return (
    <div className="flex flex-col px-[30%] justify-between w-full gap-3 max-2xl:px-[13%] max-md:px-[6%]">
      <SpanL className="text-4xl font-extralight text-secondary">
        Corporate.Brochure.title
      </SpanL>
      <SpanL className="opacity-70 mb-10">Corporate.Brochure.description</SpanL>
      <ButtonL
        afterElement={<IoMdCloudDownload size={20} />}
        className="bg-secondary text-on-secondary shadow-md shadow-black/10 px-4 py-2 rounded-md hover:translate-x-1 duration-500"
      >
        Corporate.Brochure.download
      </ButtonL>
    </div>
  );
};
