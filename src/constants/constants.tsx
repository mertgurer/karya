import { NavigationButtonProps } from "@/components/layout/Navbar/Navbar.types";
import ProjectImage1 from "@/assets/images/home/projects/project1.jpg";
import ProjectImage2 from "@/assets/images/home/projects/project2.jpg";
import ProjectImage3 from "@/assets/images/home/projects/project3.jpg";
import ProjectImage4 from "@/assets/images/home/projects/project4.jpg";
import { Project, Service } from "@/(pages)/project/Project.types";
import { GiMeshNetwork, GiPowerGenerator } from "react-icons/gi";
import { FaHelmetSafety } from "react-icons/fa6";

export const REGEX = {
  EMAIL: /\S+@\S+\.\S+/,
};

export const MOBILE_VIEW_WIDTH = 768;
export const SCROLL_UPDATE_THRESHOLD = 80;

export const NavigationLinks: NavigationButtonProps[] = [
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
} as Service;

const SafetyService = {
  id: "safety",
  label: "Projects.Services.safety",
  icon: <FaHelmetSafety size={80} />,
} as Service;

const CommunicationService = {
  id: "communication",
  label: "Projects.Services.communication",
  icon: <GiMeshNetwork size={80} />,
} as Service;

export const ProjectDetails = [
  {
    id: "alpha",
    client: "Inoventa",
    date: "2024-01-15",
    duration: 6,
    budget: 100000,
    size: 2000,
    certificates: ["ISO 9001", "ISO 14001"],
    services: [ElectricalService, SafetyService, CommunicationService],
    image: ProjectImage1,
  },
  {
    id: "beta",
    client: "Inoventa",
    date: "2023-11-20",
    duration: 4,
    budget: 75000,
    size: 1500,
    certificates: ["OHSAS 18001"],
    services: [ElectricalService, CommunicationService],
    image: ProjectImage2,
  },
  {
    id: "gamma",
    client: "Inoventa",
    date: "2024-03-10",
    duration: 5,
    budget: 90000,
    size: 1500,
    certificates: ["ISO 9001", "ISO 14001", "OHSAS 18001"],
    services: [SafetyService, CommunicationService],
    image: ProjectImage3,
  },
  {
    id: "delta",
    client: "Inoventa",
    date: "2024-05-05",
    duration: 3,
    budget: 60000,
    size: 1200,
    certificates: ["ISO 50001"],
    services: [ElectricalService, SafetyService],
    image: ProjectImage4,
  },
  {
    id: "epsilon",
    client: "Inoventa",
    date: "2024-06-01",
    duration: 2,
    budget: 50000,
    size: 1000,
    certificates: ["OHSAS 18001"],
    services: [SafetyService],
    image: ProjectImage3,
  },
  {
    id: "zeta",
    client: "Inoventa",
    date: "2024-06-15",
    duration: 7,
    budget: 120000,
    size: 2000,
    certificates: ["ISO 9001", "ISO 14001", "OHSAS 18001"],
    services: [ElectricalService, SafetyService, CommunicationService],
    image: ProjectImage1,
  },
] as Project[];

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
