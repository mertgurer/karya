import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ServiceProps {
  service: ServiceModel;
}

export interface ServiceModel {
  id: string;
  image: StaticImageData;
  icon: ReactNode;
  title: string;
  description: string;
  shortDescription: string;
  features: {
    title: string;
    description: string;
    icon?: ReactNode;
  }[];
  benefits: string[];
  details: {
    label: string;
    value: string;
  }[];
}
