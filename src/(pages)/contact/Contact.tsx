"use client";

import Welcome from "@/assets/images/contact/welcome.jpg";
import { WelcomeHeader } from "@/components/layout/WelcomeHeader";
import { ButtonL, ComboBoxL, InputL, InputType, SpanL } from "@/components/ui";
import { Addresses } from "@/constants";
import { Link } from "@/i18n";
import { motion } from "motion/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMailOutline, MdOutlinePhoneEnabled } from "react-icons/md";

const formReasonOptions = [
  { value: "general", label: "Contact.Form.Reasons.general" },
  { value: "quotation", label: "Contact.Form.Reasons.quotation" },
  { value: "services", label: "Contact.Form.Reasons.services" },
  { value: "other", label: "Contact.Form.Reasons.other" },
];

const blockVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const Contact = () => {
  return (
    <div className="flex flex-col w-full">
      <WelcomeHeader image={Welcome} title={"Contact.title"} subtitle={"Contact.subtitle"} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.6, once: true }}
        className="flex flex-col bg-secondary px-[13%] py-32 gap-36 max-2xl:px-[8%] max-md:px-[6%] max-md:py-16 max-md:gap-20"
      >
        <SpanL variants={blockVariants} transition={{ delay: 0.3, duration: 0.3 }} className="text-4xl font-medium w-2/3 text-on-primary max-md:w-full">
          Contact.contactTitle
        </SpanL>
        <div className="flex gap-20 max-md:flex-col max-md:gap-10">
          <div className="flex flex-col flex-2 gap-4">
            <SpanL variants={blockVariants} transition={{ delay: 0.4, duration: 0.3 }} className="font-bold text-primary text-xl">
              Contact.contactDescriptionTitle
            </SpanL>
            <SpanL variants={blockVariants} transition={{ delay: 0.6, duration: 0.3 }} className="text-lg">
              Contact.contactDescription
            </SpanL>
          </div>
          <motion.form variants={blockVariants} transition={{ delay: 0.5, duration: 0.3 }} className="flex-5 flex flex-col gap-4">
            <ComboBoxL options={formReasonOptions} placeholder="Contact.Form.reason" required />
            <div className="flex gap-4 max-md:flex-col">
              <InputL required name="nameSurname" placeholder="Contact.Form.nameSurname" />
              <InputL required name="subject" placeholder="Contact.Form.subject" />
            </div>
            <div className="flex gap-4 max-md:flex-col">
              <InputL required name="email" placeholder="Contact.Form.email" />
              <InputL name="phone" placeholder="Contact.Form.phone" />
            </div>
            <InputL required type={InputType.TEXT_AREA} name="message" placeholder="Contact.Form.message" />
            <ButtonL upperCase type="submit" className="bg-primary-variant text-on-primary text-sm font-medium px-6 py-3">
              Contact.Form.submit
            </ButtonL>
          </motion.form>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-3 px-[12%] py-32 text-on-surface self-center max-2xl:px-[5%] max-md:grid-cols-1 max-md:gap-5 max-md:py-16"
      >
        <div className="flex flex-col flex-2 text-lg 2xl:my-auto gap-4 max-md:text-center max-md:mb-7">
          <SpanL variants={blockVariants} transition={{ delay: 0.1, duration: 0.4 }} className="font-semibold text-primary-variant">
            Contact.addressesTitle
          </SpanL>
          <SpanL variants={blockVariants} transition={{ delay: 0.2, duration: 0.4 }}>
            Contact.addressesDescription
          </SpanL>
        </div>
        {Addresses.map((address, index) => (
          <motion.div
            key={index}
            variants={blockVariants}
            transition={{ delay: 0.2 + index * 0.2, duration: 0.4 }}
            className="flex flex-col rounded-md gap-6 px-12 py-7 bg-surface shadow-md shadow-black/10 mr-10 max-2xl:mr-0 max-2xl:ml-10 max-md:mx-0 max-md:px-7"
          >
            <div className="flex gap-1 items-center">
              <FaMapMarkerAlt size={16} />
              <SpanL className="text-lg">{`Contact.Addresses.${address.key}.title`}</SpanL>
            </div>
            <Link
              href={`https://www.google.com/maps/search/?api=1&query=${address.coordinates.lat},${address.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-light hover:text-secondary transition-colors cursor-pointer text-left"
            >
              <SpanL className="font-light">{`Contact.Addresses.${address.key}.address`}</SpanL>
            </Link>
            <div className="flex flex-col">
              {address.phone && (
                <Link href={`tel:${address.phone}`} className="flex gap-2 items-center hover:text-secondary transition-colors group">
                  <MdOutlinePhoneEnabled />
                  <span>{address.phone}</span>
                </Link>
              )}
              <Link href={`mailto:${address.email}`} className="flex gap-2 items-center hover:text-secondary transition-colors group">
                <MdMailOutline />
                <span>{address.email}</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
