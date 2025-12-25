import { WelcomeHeader } from "@/components/layout/WelcomeHeader";
import Welcome from "@/assets/images/careers/welcome.jpg";

export const Careers = () => {
  return (
    <div className="flex flex-col w-full">
      <WelcomeHeader
        image={Welcome}
        title={"Careers.title"}
        subtitle={"Careers.subtitle"}
      />
      Careers
    </div>
  );
};
