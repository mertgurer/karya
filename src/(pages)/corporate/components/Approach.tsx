import { SpanL } from "@/components/ui/SpanL";
import { FaBalanceScale } from "react-icons/fa";
import {
  FaBriefcase,
  FaClipboardCheck,
  FaHandshake,
  FaUsers,
} from "react-icons/fa6";

const ApproachTypes = [
  { id: "commitment", icon: <FaHandshake size={20} /> },
  { id: "sprit", icon: <FaUsers size={20} /> },
  { id: "integrity", icon: <FaBalanceScale size={20} /> },
  { id: "professionalism", icon: <FaBriefcase size={20} /> },
  { id: "accountability", icon: <FaClipboardCheck size={20} /> },
];

export const Approach = () => {
  return (
    <div className="flex flex-col px-[20%] w-full gap-14 max-2xl:px-[13%] max-md:px-[6%]">
      <div className="flex flex-col">
        <SpanL className="text-4xl font-extralight text-secondary">
          Corporate.Approach.title
        </SpanL>
        <SpanL className="opacity-70">Corporate.Approach.subtitle</SpanL>
      </div>
      <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
        {ApproachTypes.map((approach, index) => {
          return (
            <div key={approach.id} className="flex flex-col gap-1">
              <div className="flex gap-3 items-center">
                <span className="opacity-70">{approach.icon}</span>
                <span className="ml-0.5 opacity-50">|</span>
                <SpanL className="text-2xl font-light">{`Corporate.Approach.${approach.id}.title`}</SpanL>
              </div>
              <SpanL className="opacity-90 font-light">{`Corporate.Approach.${approach.id}.description`}</SpanL>
            </div>
          );
        })}
      </div>
    </div>
  );
};
