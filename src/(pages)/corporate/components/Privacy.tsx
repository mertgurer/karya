import { SpanL } from "@/components/ui/SpanL";

const PrivacySections = [
  "dataCollection",
  "dataUsage",
  "dataProtection",
  "cookies",
  "thirdPartySharing",
  "yourRights",
];

export const Privacy = () => {
  return (
    <div className="flex flex-col px-[20%] w-full gap-7 max-2xl:px-[13%] max-md:px-[6%]">
      <SpanL className="text-4xl font-extralight text-secondary">
        Corporate.Privacy.title
      </SpanL>
      <div className="flex flex-col gap-16 mt-20 max-md:mt-7 max-2xl:gap-8 max-2xl:mt-10">
        {PrivacySections.map((section) => (
          <div key={section} className="flex flex-col gap-2">
            <SpanL className="text-xl font-light">{`Corporate.Privacy.Sections.${section}.title`}</SpanL>
            <SpanL
              noWrap
              className="opacity-70 font-medium text-sm"
            >{`Corporate.Privacy.Sections.${section}.content`}</SpanL>
          </div>
        ))}
      </div>
    </div>
  );
};
