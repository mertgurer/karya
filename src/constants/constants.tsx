import { NavigationButtonProps } from "@/components/layout/Navbar/Navbar.types";
import ProjectImage1 from "@/assets/images/home/projects/project1.jpg";
import ProjectImage2 from "@/assets/images/home/projects/project2.jpg";
import ProjectImage3 from "@/assets/images/home/projects/project3.jpg";
import ProjectImage4 from "@/assets/images/home/projects/project4.jpg";
import ServiceImage1 from "@/assets/images/home/services/service1.jpg";
import ServiceImage2 from "@/assets/images/home/services/service2.jpg";
import ServiceImage3 from "@/assets/images/home/services/service3.jpg";
import ServiceImage4 from "@/assets/images/home/services/service4.jpg";
import { ProjectModel, Service as ProjectServices } from "@/(pages)/project/Project.types";
import { GiMeshNetwork, GiPowerGenerator } from "react-icons/gi";
import { FaHelmetSafety } from "react-icons/fa6";
import { ServiceModel } from "@/(pages)/service";
import TrFlag from "@/assets/images/flags/tr.png";
import UkFlag from "@/assets/images/flags/uk.png";

export const REGEX = {
  EMAIL: /\S+@\S+\.\S+/,
};

export const MOBILE_VIEW_WIDTH = 768;
export const SCROLL_UPDATE_THRESHOLD = 80;

export const NavigationLinks: NavigationButtonProps[] = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "corporate",
    href: "/corporate",
  },
  {
    label: "services",
    href: "/services",
  },
  {
    label: "projects",
    href: "/projects",
  },
  {
    label: "hse",
    href: "/hse",
  },
  {
    label: "quality",
    href: "/quality",
  },
  {
    label: "contact",
    href: "/contact",
  },
  {
    label: "careers",
    href: "/careers",
  },
];

const ElectricalService = {
  id: "electrical",
  label: "Projects.Services.electrical",
  icon: <GiPowerGenerator size={80} />,
} as ProjectServices;

const SafetyService = {
  id: "safety",
  label: "Projects.Services.safety",
  icon: <FaHelmetSafety size={80} />,
} as ProjectServices;

const CommunicationService = {
  id: "communication",
  label: "Projects.Services.communication",
  icon: <GiMeshNetwork size={80} />,
} as ProjectServices;

export const ProjectDetails = [
  {
    id: "erbil-airport",
    client: "Mach Monument / Havatek",
    date: "2024-09-01",
    duration: 20,
    budget: 1150000,
    size: 0,
    certificates: ["Engineering", "Procurement"],
    services: [ElectricalService, SafetyService, CommunicationService],
    image: ProjectImage1,
    scopeCount: 7,
  },
  {
    id: "khabat-power",
    client: "MoE / Gama & POSCO",
    date: "2015-06-01",
    duration: 36,
    budget: 6305500,
    size: 300,
    certificates: ["Installation", "Commissioning"],
    services: [ElectricalService],
    image: ProjectImage2,
    scopeCount: 8,
  },
  {
    id: "hkn-sarsang",
    client: "HKN Energy / Havatek",
    date: "2019-11-01",
    duration: 29,
    budget: 5887250,
    size: 0,
    certificates: ["Installation", "Commissioning"],
    services: [ElectricalService, SafetyService],
    image: ProjectImage3,
    scopeCount: 10,
  },
  {
    id: "khor-mor",
    client: "Pearl Petroleum / Havatek",
    date: "2022-02-01",
    duration: 42,
    budget: 9836000,
    size: 250,
    certificates: ["Construction", "Pre-Commissioning"],
    services: [ElectricalService, CommunicationService],
    image: ProjectImage4,
    scopeCount: 10,
  },
  {
    id: "nainawa-power",
    client: "MoE / Çalık Enerji",
    date: "2012-12-01",
    duration: 16,
    budget: 5065000,
    size: 750,
    certificates: ["Installation", "Commissioning"],
    services: [ElectricalService],
    image: ProjectImage1,
    scopeCount: 7,
  },
  {
    id: "tupras-aliaga",
    client: "Tüpraş / Havatek",
    date: "2017-09-01",
    duration: 10,
    budget: 1187000,
    size: 0,
    certificates: ["Procurement", "Installation"],
    services: [ElectricalService, SafetyService],
    image: ProjectImage2,
    scopeCount: 8,
  },
  {
    id: "taqa-atrush",
    client: "TAQA / Havatek",
    date: "2015-09-01",
    duration: 11,
    budget: 3610000,
    size: 0,
    certificates: ["Installation", "Commissioning"],
    services: [ElectricalService, CommunicationService],
    image: ProjectImage3,
    scopeCount: 8,
  },
] as ProjectModel[];

export const DetailFields = [
  {
    key: "client",
    label: "Common.client",
    valueForm: "object",
    unit: null,
  },
  {
    key: "date",
    label: "Common.date",
    valueForm: "date",
    unit: null,
  },
  {
    key: "duration",
    label: "Common.duration",
    valueForm: "number",
    unit: "months",
  },
  {
    key: "budget",
    label: "Common.budget",
    valueForm: "number",
    unit: "USD",
  },
  {
    key: "size",
    label: "Common.size",
    valueForm: "number",
    unit: "sqm",
  },
];

export const ServiceDetails = [
  {
    id: "engineering",
    image: ServiceImage1,
    futureCount: 4,
    benefitCount: 6,
  },
  {
    id: "procurement",
    image: ServiceImage2,
    futureCount: 4,
    benefitCount: 6,
  },
  {
    id: "construction",
    image: ServiceImage3,
    futureCount: 4,
    benefitCount: 6,
  },
  {
    id: "commissioning",
    image: ServiceImage4,
    futureCount: 4,
    benefitCount: 6,
  },
];

export const Addresses = [
  {
    key: "turkey",
    coordinates: { lat: 38.42721585476637, lng: 27.132775266201087 },
    phone: "+90 232 422 0230",
    email: "info@karyaengineering.com",
  },
  {
    key: "iraq",
    coordinates: { lat: 36.24687972761957, lng: 44.01631725357656 },
    email: "info.erbil@karyaengineering.com",
  },
];

export const Flags = {
  tr: TrFlag,
  en: UkFlag,
};
