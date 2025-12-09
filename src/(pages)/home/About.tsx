import { LinkL } from "@/components/ui/LinkL";
import { SpanL } from "@/components/ui/SpanL";
import { motion } from "motion/react";
import Image from "next/image";
import AboutImage from "@/assets/images/home/about.jpg";

export const About = ({ index }: { index: number }) => {
    return (
        <section
            id="about"
            className="relative flex justify-between w-full pl-[15%] pr-[12%] gap-[8%] max-2xl:pl-[10%] max-2xl:pr-[8%] max-md:flex-col max-md:px-5"
        >
            <div className="absolute top-0 flex flex-col gap-2 max-md:ml-2">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="h-32 w-0.5 bg-primary z-10 max-md:h-20"
                />
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.6,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="-ml-2 text-secondary"
                >
                    <span className="">0{index}. </span>
                    <SpanL className="font-semibold">
                        Home.About.sectionTitle
                    </SpanL>
                </motion.div>
            </div>
            <div className="absolute bottom-0 flex flex-col gap-2 h-28 w-0.5 bg-primary z-10 max-md:h-16" />
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.5 }}
                className="flex flex-col gap-4 w-[65%] -ml-2 mt-52 mb-40 text-primary max-md:w-full max-md:ml-0 max-md:mt-36 max-md:mb-20"
            >
                <SpanL
                    variants={{
                        hidden: { opacity: 0, y: 24 },
                        show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="text-5xl mb-1 max-md:text-4xl"
                >
                    Home.About.title
                </SpanL>
                <SpanL
                    variants={{
                        hidden: { opacity: 0, y: 24 },
                        show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
                    className="text-lg"
                >
                    Home.About.description
                </SpanL>
                <LinkL
                    variants={{
                        hidden: { opacity: 0, y: 24 },
                        show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    href="/corporate"
                    className="bg-secondary text-on-secondary px-4 py-2 "
                >
                    Common.learnMore
                </LinkL>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="relative w-[35%] aspect-[0.65] self-end translate-y-32 z-10 rounded-sm overflow-hidden shadow-[0_0px_10px_0px_rgba(0,0,0,0.20)] max-md:hidden"
            >
                <Image
                    src={AboutImage}
                    alt="about-image"
                    fill
                    priority
                    sizes="100%"
                    className="object-cover"
                />
            </motion.div>
        </section>
    );
};
