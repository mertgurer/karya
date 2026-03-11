import { SpanL } from "@/components/ui";
import { Flow, StepItem } from "@/components/ui/Flow";
import { FileText, ClipboardList, HardHat, CheckCircle } from "lucide-react";

const QualitySteps: StepItem[] = [
  {
    key: "Preparation",
    localeSource: "Quality.Process.Preparation",
    icon: <FileText size={20} />,
    pointCount: 3,
  },
  {
    key: "Inspection",
    localeSource: "Quality.Process.Inspection",
    icon: <ClipboardList size={20} />,
    pointCount: 3,
  },
  {
    key: "Execution",
    localeSource: "Quality.Process.Execution",
    icon: <HardHat size={20} />,
    pointCount: 3,
  },
  {
    key: "Reporting",
    localeSource: "Quality.Process.Reporting",
    icon: <CheckCircle size={20} />,
    pointCount: 3,
  },
];

export const Process = () => {
  return (
    <div className="my-32 mx-[6%] flex flex-col gap-2 max-2xl:mx-[2%] max-md:mx-[4%] max-md:my-20">
      <SpanL className="text-4xl self-center text-center text-primary">Quality.Process.title</SpanL>
      <SpanL className="self-center text-center tracking-wider font-light w-1/2 max-2xl:w-2/3 max-md:w-full">Quality.Process.text</SpanL>
      <div>
        <Flow steps={QualitySteps} />
      </div>
    </div>
  );
};
