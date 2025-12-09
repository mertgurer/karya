import { usePathname, useRouter } from "@/i18n";
import { NavigationButtonProps } from "./Navbar.types";
import { LinkL } from "@/components/ui/LinkL";

export const NavigationButton = ({ label, href }: NavigationButtonProps) => {
    const pathname = usePathname();

    return (
        <LinkL
            href={href}
            className={`nav-link-underline relative text-on-primary font-light text-sm max-md:text-xl max-md:font-medium ${
                pathname === href ? "" : ""
            } duration-200`}
        >{`Navbar.${label}`}</LinkL>
    );
};
