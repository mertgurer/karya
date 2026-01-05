import { WelcomeHeader } from "@/components/layout/WelcomeHeader";
import Welcome from "@/assets/images/services/welcome.jpg";
import { ServiceDetails } from "@/constants";
import { ServiceSplitRow } from "./components/ServiceSplitRow";
import { SpanL } from "@/components/ui";

export const Services = () => {
  const servicePairs = [];
  for (let i = 0; i < ServiceDetails.length; i += 2) {
    servicePairs.push(ServiceDetails.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col w-full">
      <WelcomeHeader
        image={Welcome}
        title={"Services.title"}
        subtitle={"Services.subtitle"}
      />
      <div className="flex flex-col gap-5 h-[50vh] pb-[5%] mx-[5%]">
        <SpanL className="text-5xl mt-auto">Services.secondTitle</SpanL>
        <SpanL className="opacity-80">Services.description</SpanL>
      </div>
      <div className="flex flex-col w-full mb-[0.5vw] gap-[0.5vw]">
        {servicePairs.map((pair, index) => {
          if (pair.length < 2) return null;

          return (
            <ServiceSplitRow
              key={index}
              leftService={pair[0]}
              rightService={pair[1]}
              reverse={index % 2 === 1}
            />
          );
        })}
      </div>
    </div>
  );
};
