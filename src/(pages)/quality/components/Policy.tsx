import { SpanL } from "@/components/ui";

export const Policy = () => {
  return (
    <div className="my-20 mx-[17%] flex flex-col max-2xl:mx-[10%] max-md:mx-[4%]">
      <SpanL className="text-5xl ml-1 font-semibold mb-12 text-primary max-2xl:4xl">Quality.Policy.title</SpanL>
      <SpanL className="tracking-wider font-light">Quality.Policy.text</SpanL>
    </div>
  );
};
