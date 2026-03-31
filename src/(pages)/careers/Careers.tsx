"use client";

import { WelcomeHeader } from "@/components/layout/WelcomeHeader";
import Welcome from "@/assets/images/careers/welcome.jpg";
import { ButtonL, CheckboxL, ComboBoxL, FileUploaderL, InputL, InputType, SpanL } from "@/components/ui";
import { motion } from "motion/react";
import { FaChartLine } from "react-icons/fa6";
import { GiProgression, GiTeamIdea } from "react-icons/gi";
import { RadioGroupL } from "@/components/ui/RadioGroupL";
import { RiTeamFill } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { useState } from "react";
import toast from "react-hot-toast";

const formPositionOptions = [
  { value: "siteEngineer", label: "Careers.Form.Positions.siteEngineer" },
  { value: "qaQcEngineer", label: "Careers.Form.Positions.qaQcEngineer" },
  { value: "hseSupervisor", label: "Careers.Form.Positions.hseSupervisor" },
  { value: "inspector", label: "Careers.Form.Positions.inspector" },
  { value: "sitePersonnel", label: "Careers.Form.Positions.sitePersonnel" },
  { value: "intern", label: "Careers.Form.Positions.intern" },
];

const haveYouWorkedOptions = [
  { id: "yes", label: "Common.yes" },
  { id: "no", label: "Common.no" },
];

const blockVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const toBase64 = (file: File): Promise<string> =>
  new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res((r.result as string).split(",")[1]);
    r.onerror = rej;
    r.readAsDataURL(file);
  });

export const Careers = () => {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        data[key] = value.trim();
      }
    }

    const cvFile = formData.get("cv") as File | null;

    const requiredFields = ["fullName", "position", "email", "workedHere"];
    for (const field of requiredFields) {
      if (!data[field]) {
        toast.error(t("Careers.Error.required"));
        return;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error(t("Careers.Error.invalidEmail"));
      return;
    }

    console.log("CV FILE", cvFile);
    if (!cvFile || cvFile.size === 0) {
      toast.error(t("Careers.Error.resumeRequired"));
      return;
    }

    setLoading(true);

    toast
      .promise(
        (async () => {
          const resumeBase64 = await toBase64(cvFile);

          const res = await fetch("/api/send-mail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              type: "application",
              fullName: data.fullName,
              position: t(`Careers.Form.Positions.${data.position}`),
              email: data.email,
              phone: data.phone ?? "",
              message: data.message ?? "",
              workedWithUsBefore: data.workedHere === "yes",
              resumeBase64,
              resumeFileName: cvFile.name,
            }),
          });

          const result = await res.json();
          if (!result.success) throw new Error("Failed to send application");

          setFormKey((k) => k + 1);
          return result;
        })(),
        {
          loading: t("Careers.sending"),
          success: t("Careers.Success.applicationSent"),
          error: t("Careers.Error.applicationFailed"),
        },
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col w-full">
      <WelcomeHeader image={Welcome} title={"Careers.title"} subtitle={"Careers.subtitle"} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex px-[11%] py-32 gap-20 bg-surface max-2xl:px-[8%] max-2xl:py-20 max-md:flex-col-reverse max-md:px-[3%] max-md:py-12"
      >
        <form key={formKey} onSubmit={handleSubmit} className="flex flex-col gap-3 flex-5 bg-background p-8 rounded-sm max-md:px-4">
          <div className="flex flex-col gap-1 mb-10 ml-2">
            <SpanL className="text-3xl text-primary-variant font-medium">Careers.formTitle</SpanL>
            <SpanL className="text-sm opacity-70">Careers.formDescription</SpanL>
          </div>
          <div className="flex gap-3 max-md:flex-col">
            <InputL variants={blockVariants} transition={{ delay: 0.3, duration: 0.3 }} required name="fullName" placeholder="Careers.Form.nameSurname" />
            <ComboBoxL
              name="position"
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
            type={InputType.TEXT_AREA}
            name="message"
            placeholder="Careers.Form.message"
          />
          <FileUploaderL
            name="cv"
            variants={blockVariants}
            transition={{ delay: 0.8, duration: 0.3 }}
            placeholder="Careers.Form.resume"
            acceptedFileTypes={["pdf", "docx"]}
          />
          <RadioGroupL name="workedHere" label="Careers.Form.workedHere" options={haveYouWorkedOptions} required className="mt-5 mb-2 ml-2" />
          <CheckboxL className="text-primary/80 text-sm mt-5" required>
            {t.rich("Contact.Form.acceptTerms", {
              a: (chunks) => (
                <Link target="_blank" rel="noopener noreferrer" href="/corporate?privacy">
                  {chunks}
                </Link>
              ),
            })}
          </CheckboxL>
          <ButtonL
            upperCase
            type="submit"
            disabled={loading}
            className="bg-primary-variant text-on-primary text-sm font-medium px-6 py-3 h-max min-w-max mr-auto"
          >
            Careers.Form.submit
          </ButtonL>
        </form>
        <div className="flex flex-3 flex-col gap-12 sticky top-1/4 h-max mt-2 max-2xl:gap-8 max-2xl:top-1/5 max-md:static max-md:px-[5%]">
          <SpanL className="opacity-70">Careers.description</SpanL>
          <div className="flex flex-col gap-8 text-xl max-2xl:gap-4 max-2xl:-ml-10">
            <motion.div variants={blockVariants} transition={{ delay: 0.5, duration: 0.3 }} className="flex items-center gap-4 max-2xl:scale-80">
              <GiProgression size={48} className="text-secondary bg-background p-2 rounded-sm" />
              <SpanL>Careers.Benefits.growth</SpanL>
            </motion.div>
            <motion.div variants={blockVariants} transition={{ delay: 0.3, duration: 0.3 }} className="flex items-center gap-4 max-2xl:scale-80">
              <FaChartLine size={48} className="text-secondary bg-background p-2 rounded-sm" />
              <SpanL>Careers.Benefits.challengingProjects</SpanL>
            </motion.div>
            <motion.div variants={blockVariants} transition={{ delay: 0.4, duration: 0.3 }} className="flex items-center gap-4 max-2xl:scale-80">
              <RiTeamFill size={48} className="text-secondary bg-background p-2 rounded-sm" />
              <SpanL>Careers.Benefits.collaborative</SpanL>
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
