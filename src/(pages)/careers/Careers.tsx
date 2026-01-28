"use client";

import { WelcomeHeader } from "@/components/layout/WelcomeHeader";
import Welcome from "@/assets/images/careers/welcome.jpg";
import { ButtonL, CheckboxL, ComboBoxL, FileUploaderL, InputL, InputType, SpanL } from "@/components/ui";
import { motion } from "motion/react";
import { FaChartLine, FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { RadioGroupL } from "@/components/ui/RadioGroupL";

const formPositionOptions = [
  { value: "intern", label: "Careers.Form.Positions.intern" },
  { value: "engineer", label: "Careers.Form.Positions.engineer" },
  { value: "projectManager", label: "Careers.Form.Positions.projectManager" },
  { value: "manager", label: "Careers.Form.Positions.manager" },
];

const haveYouWorkedOptions = [
  { id: "yes", label: "Common.yes" },
  { id: "no", label: "Common.no" },
];

const blockVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  console.log("Form Data:", data);
};

export const Careers = () => {
  return (
    <div className="flex flex-col w-full">
      <WelcomeHeader image={Welcome} title={"Careers.title"} subtitle={"Careers.subtitle"} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex px-[11%] py-32 gap-20 bg-surface max-2xl:px-[8%] max-2xl:py-20 max-md:flex-col-reverse max-md:px-[3%] max-md:py-12"
      >
        <form onSubmit={HandleSubmit} className="flex flex-col gap-3 flex-5 bg-background p-8 rounded-sm max-md:px-4">
          <div className="flex flex-col gap-1 mb-10 ml-2">
            <SpanL className="text-3xl text-primary-variant font-medium">Careers.formTitle</SpanL>
            <SpanL className="text-sm opacity-70">Careers.formDescription</SpanL>
          </div>
          <div className="flex gap-3 max-md:flex-col">
            <InputL variants={blockVariants} transition={{ delay: 0.3, duration: 0.3 }} required name="nameSurname" placeholder="Careers.Form.nameSurname" />
            <ComboBoxL
              variants={blockVariants}
              transition={{ delay: 0.4, duration: 0.3 }}
              options={formPositionOptions}
              placeholder="Careers.Form.position"
              required
            />
          </div>
          <div className="flex gap-3 max-md:flex-col">
            <InputL variants={blockVariants} transition={{ delay: 0.5, duration: 0.3 }} required name="email" placeholder="Careers.Form.email" />
            <InputL variants={blockVariants} transition={{ delay: 0.6, duration: 0.3 }} name="phone" placeholder="Careers.Form.phone" />
          </div>
          <InputL
            variants={blockVariants}
            transition={{ delay: 0.7, duration: 0.3 }}
            required
            type={InputType.TEXT_AREA}
            name="message"
            placeholder="Careers.Form.message"
          />
          <FileUploaderL
            name="cv"
            variants={blockVariants}
            transition={{ delay: 0.8, duration: 0.3 }}
            placeholder="Careers.Form.resume"
            required
            acceptedFileTypes={["pdf"]}
          />
          <RadioGroupL name={"workedHere"} label="Careers.Form.workedHere" options={haveYouWorkedOptions} required className="mt-7 mb-2 ml-2" />
          <ButtonL upperCase type="submit" className="bg-primary-variant text-on-primary text-sm font-medium px-6 py-3 h-max min-w-max mr-auto mt-5">
            Careers.Form.submit
          </ButtonL>
        </form>
        <div className="flex flex-3 flex-col gap-12 sticky top-1/4 h-max mt-2 max-2xl:gap-8 max-2xl:top-1/5 max-md:static max-md:px-[5%]">
          <SpanL className="opacity-70">Careers.description</SpanL>
          <div className="flex flex-col gap-8 text-xl max-2xl:gap-4 max-2xl:-ml-10">
            <motion.div variants={blockVariants} transition={{ delay: 0.3, duration: 0.3 }} className="flex items-center gap-4 max-2xl:scale-80">
              <FaMoneyBillTrendUp size={48} className="text-secondary bg-background p-2 rounded-sm" />
              <SpanL>Careers.Benefits.competitiveSalary</SpanL>
            </motion.div>
            <motion.div variants={blockVariants} transition={{ delay: 0.4, duration: 0.3 }} className="flex items-center gap-4 max-2xl:scale-80">
              <MdHealthAndSafety size={48} className="text-secondary bg-background p-2 rounded-sm" />
              <SpanL>Careers.Benefits.healthInsurance</SpanL>
            </motion.div>
            <motion.div variants={blockVariants} transition={{ delay: 0.5, duration: 0.3 }} className="flex items-center gap-4 max-2xl:scale-80">
              <FaChartLine size={48} className="text-secondary bg-background p-2 rounded-sm" />
              <SpanL>Careers.Benefits.careerGrowth</SpanL>
            </motion.div>
            <motion.div variants={blockVariants} transition={{ delay: 0.6, duration: 0.3 }} className="flex items-center gap-4 max-2xl:scale-80">
              <GiTeamIdea size={48} className="text-secondary bg-background p-2 rounded-sm" />
              <SpanL>Careers.Benefits.inclusiveEnvironment</SpanL>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
