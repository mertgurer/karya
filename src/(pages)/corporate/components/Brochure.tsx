import { ButtonL } from "@/components/ui/ButtonL";
import { SpanL } from "@/components/ui/SpanL";
import { Link } from "@/i18n";
import { useTranslations } from "next-intl";
import { IoMdCloudDownload } from "react-icons/io";

export const Brochure = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col px-[30%] justify-between w-full gap-3 max-2xl:px-[13%] max-md:px-[6%]">
      <SpanL className="text-4xl font-extralight text-secondary">Corporate.Brochure.title</SpanL>
      <SpanL className="opacity-70 mb-10">Corporate.Brochure.description</SpanL>
      <Link
        href="/documents/Karya Engineering Company Brochure.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-balance w-max bg-secondary text-on-secondary shadow-md shadow-black/10 px-4 py-2 rounded-md hover:translate-x-1 duration-500"
      >
        {t("Corporate.Brochure.download")}
        <IoMdCloudDownload size={20} />
      </Link>
    </div>
  );
};
