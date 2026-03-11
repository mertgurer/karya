import { SpanL } from "@/components/ui";
import { TrendingUp } from "lucide-react";

export const Improvement = () => {
  return (
    <div className="flex flex-col my-32 px-[12%] max-2xl:px-[8%] max-md:px-[5%] max-md:my-20">
      <div className="flex flex-col bg-surface px-20 py-16 rounded-md shadow-md shadow-black/10 max-2xl:px-16 max-2xl:py-12 max-md:px-6 max-md:py-10">
        <div className="flex gap-4 items-center">
          <div className="bg-secondary text-surface shadow-sm rounded-full p-2">
            <TrendingUp size={28} />
          </div>
          <SpanL className="text-2xl text-primary">Quality.Improvement.title</SpanL>
        </div>
        <SpanL className="text-3xl italic mt-10 mb-4 ml-1 max-2xl:mt-8">Quality.Improvement.motto</SpanL>
        <SpanL>Quality.Improvement.text</SpanL>
      </div>
    </div>
  );
};
