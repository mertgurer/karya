import Image from "next/image";
import WelcomeImage from "@/assets/images/home/welcome2.jpg";
import { SpanL } from "@/components/ui/SpanL";
import { easeInOut, motion } from "motion/react";
import { ButtonL } from "@/components/ui/ButtonL";
import { useLenis } from "lenis/react";

export const Welcome = () => {
  const lenis = useLenis();

  if (!lenis) return;

  return (
    <section id="welcome" className="min-h-screen w-full flex items-end">
      <div className="absolute left-0 right-0 top-0 bottom-0 shadow-xl shadow-black/20 z-5">
        <Image
          src={WelcomeImage}
          alt={"welcome"}
          fill
          priority
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div
        className={`
            absolute inset-0 z-10            
            bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_8%,rgba(0,0,0,0.2)_20%,rgba(0,0,0,0.1)_100%)]
          `}
      />
      <div className="flex relative z-10 ml-[15%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="absolute h-full w-0.5 bg-on-primary z-10"
        />

        <ButtonL
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          onClick={() => {
            lenis.scrollTo(`#about`, {
              duration: 0.77,
              easing: easeInOut,
              offset: -72,
            });
          }}
          className="absolute left-0.5 -top-2 origin-left -rotate-90 font-medium hover:-top-4 duration-300"
        >
          Home.Welcome.explore
        </ButtonL>
        <div className="overflow-hidden mb-[25%] mt-5">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            className="
                flex flex-col pl-10 pr-8 py-10
                bg-linear-to-br from-primary/70 to-primary-variant/70"
          >
            <SpanL className="text-5xl mb-5 ">Home.Welcome.title</SpanL>
            <SpanL className="text-2xl text-secondary">
              Home.Welcome.subtitle
            </SpanL>
            <div>
              - <SpanL className="font-light italic">Home.Welcome.motto</SpanL>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
