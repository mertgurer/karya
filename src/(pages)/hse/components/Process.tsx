import { Flow, StepItem } from "@/components/ui/Flow";
import { SpanL } from "@/components/ui";
import { CheckCircle, FileText, HardHat, PencilRuler, ShieldQuestionMark } from "lucide-react";

const HseSteps: StepItem[] = [
  {
    key: "Preparation",
    localeSource: "Hse.Process.Preparation",
    icon: <FileText size={20} />,
    pointCount: 3,
  },
  {
    key: "Toolbox",
    localeSource: "Hse.Process.Toolbox",
    icon: <PencilRuler size={20} />,
    pointCount: 3,
  },
  {
    key: "FieldInspection",
    localeSource: "Hse.Process.FieldInspection",
    icon: <HardHat size={20} />,
    pointCount: 3,
  },
  {
    key: "Reporting",
    localeSource: "Hse.Process.Reporting",
    icon: <CheckCircle size={20} />,
    pointCount: 3,
  },
  {
    key: "Actions",
    localeSource: "Hse.Process.Actions",
    icon: <ShieldQuestionMark size={20} />,
    pointCount: 3,
  },
];

export const Process = () => {
  return (
    <div className="mb-32 mt-48 mx-[6%] flex flex-col gap-2 max-2xl:mx-[2%] max-md:my-20">
      <SpanL className="text-4xl self-center text-center text-primary">Hse.Process.title</SpanL>
      <SpanL className="self-center text-center tracking-wider font-light w-1/2 max-2xl:w-2/3">Hse.Process.text</SpanL>
      <div>
        <Flow steps={HseSteps} />
      </div>
    </div>
  );
};
