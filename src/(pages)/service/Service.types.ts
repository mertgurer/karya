import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ServiceProps {
  service: ServiceModel;
}

export interface ServiceModel {
  id: string;
  image: StaticImageData;
  futureCount: number;
  benefitCount: number;
}
