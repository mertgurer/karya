import { NavigationButtonProps } from "@/components/layout/Navbar/Navbar.types";
import { ProjectModel, Service as ProjectServices } from "@/(pages)/project/Project.types";
import TrFlag from "@/assets/images/flags/tr.png";
import UkFlag from "@/assets/images/flags/uk.png";
import { Blocks, Brain, GitGraph, PackageSearch } from "lucide-react";

import EngineeringImage from "@/assets/images/services/engineering.jpg";
import CommissioningImage from "@/assets/images/services/commissioning.jpg";
import ProcurementImage from "@/assets/images/services/procurement.jpg";
import ConstructionImage from "@/assets/images/services/construction.jpg";

import ErbilAirport from "@/assets/images/projects/erbil-airport.jpg";
import KhabatPower from "@/assets/images/projects/khabat-power.jpg";
import HknSarsang from "@/assets/images/projects/hkn-sarsang.jpg";
import KhorMor from "@/assets/images/projects/khor-mor.jpg";
import NainawaPower from "@/assets/images/projects/nainawa-power.jpg";
import TaqaAtrush from "@/assets/images/projects/taqa-atrush.jpg";
import TtopcoCpf2 from "@/assets/images/projects/ttopco-cpf2.jpg";
import TtopcoTanker from "@/assets/images/projects/ttopco-tanker.jpg";
import TuprasAliaga from "@/assets/images/projects/tupras-aliaga.jpg";

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

const EngineeringService = {
  id: "engineering",
  label: "Projects.Services.engineering",
  icon: <Brain size={80} />,
} as ProjectServices;

const ProcurementService = {
  id: "procurement",
  label: "Projects.Services.procurement",
  icon: <PackageSearch size={80} />,
} as ProjectServices;

const ConstructionService = {
  id: "construction",
  label: "Projects.Services.construction",
  icon: <Blocks size={80} />,
} as ProjectServices;

const PreCommissioningService = {
  id: "pre-commissioning",
  label: "Projects.Services.preCommissioning",
  icon: <GitGraph size={80} />,
} as ProjectServices;

export const ProjectDetails = [
  {
    id: "erbil-airport",
    client: "Mach Monument / Havatek",
    startDate: "2024-09-01",
    endDate: null,
    duration: 20,
    budget: 1150000,
    services: [EngineeringService, ProcurementService],
    image: ErbilAirport,
    scopeCount: 7,
    isCompleted: false,
  },
  {
    id: "khor-mor",
    client: "Pearl Petroleum / Havatek",
    startDate: "2022-02-01",
    endDate: "2025-08-01",
    duration: 42,
    manHours: 948000,
    budget: 9836000,
    services: [ConstructionService, PreCommissioningService],
    image: KhorMor,
    scopeCount: 10,
    isCompleted: true,
  },
  {
    id: "hkn-sarsang",
    client: "HKN Energy / Havatek",
    startDate: "2019-11-01",
    endDate: "2022-04-01",
    duration: 29,
    manHours: 509060,
    budget: 5887250,
    services: [ConstructionService, PreCommissioningService],
    image: HknSarsang,
    scopeCount: 10,
    isCompleted: true,
  },
  {
    id: "khabat-power",
    client: "M.O.E. / Gama & POSCO",
    startDate: "2015-06-01",
    endDate: "2018-06-01",
    duration: 36,
    manHours: 598000,
    budget: 6305500,
    services: [ConstructionService, PreCommissioningService],
    image: KhabatPower,
    scopeCount: 8,
    isCompleted: true,
  },
  {
    id: "tupras-aliaga",
    client: "Tüpraş / Havatek",
    startDate: "2017-09-01",
    endDate: "2018-07-01",
    duration: 10,
    manHours: 125000,
    budget: 1187000,
    services: [ConstructionService, PreCommissioningService],
    image: TuprasAliaga,
    scopeCount: 8,
    isCompleted: true,
  },
  {
    id: "taqa-atrush",
    client: "TAQA / Havatek",
    startDate: "2015-09-01",
    endDate: "2016-08-01",
    duration: 11,
    manHours: 195000,
    budget: 3610000,
    services: [ConstructionService, PreCommissioningService],
    image: TaqaAtrush,
    scopeCount: 8,
    isCompleted: true,
  },
  {
    id: "ttopco-cpf2",
    client: "Taq Taq Operating Co / Ventech",
    startDate: "2015-02-01",
    endDate: "2016-10-01",
    duration: 21,
    manHours: 130000,
    budget: 2250000,
    services: [ConstructionService, PreCommissioningService],
    image: TtopcoCpf2,
    scopeCount: 8,
    isCompleted: true,
  },
  {
    id: "ttopco-tanker",
    client: "Taq Taq Operating Co / Havatek",
    startDate: "2013-04-01",
    endDate: "2014-01-01",
    duration: 10,
    manHours: 90000,
    budget: 2500000,
    services: [EngineeringService, ProcurementService, ConstructionService, PreCommissioningService],
    image: TtopcoTanker,
    scopeCount: 9,
    isCompleted: true,
  },
  {
    id: "nainawa-power",
    client: "M.O.E. / Çalık Enerji",
    startDate: "2012-12-01",
    endDate: "2014-04-01",
    duration: 16,
    manHours: 490000,
    budget: 5065000,
    services: [ConstructionService, PreCommissioningService],
    image: NainawaPower,
    scopeCount: 7,
    isCompleted: true,
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
    key: "startDate",
    label: "Common.startDate",
    valueForm: "startDate",
    unit: null,
  },
  {
    key: "endDate",
    label: "Common.endDate",
    valueForm: "endDate",
    unit: null,
  },
  {
    key: "duration",
    label: "Common.duration",
    valueForm: "number",
    unit: "months",
  },
  {
    key: "manHours",
    label: "Common.manHours",
    valueForm: "number",
    unit: "manHoursShort",
  },
  {
    key: "budget",
    label: "Common.budget",
    valueForm: "number",
    unit: "USD",
  },
  {
    key: "isCompleted",
    label: "Common.status",
    valueForm: "ProjectStatus",
    unit: null,
  },
];

export const ServiceDetails = [
  {
    id: "engineering",
    image: EngineeringImage,
    futureCount: 4,
    benefitCount: 6,
  },
  {
    id: "procurement",
    image: ProcurementImage,
    futureCount: 4,
    benefitCount: 6,
  },
  {
    id: "construction",
    image: ConstructionImage,
    futureCount: 4,
    benefitCount: 6,
  },
  {
    id: "commissioning",
    image: CommissioningImage,
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
