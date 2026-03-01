import { StaticImageData } from "next/image";
import { JSX } from "react";

export interface ProjectProps {
  project: ProjectModel;
}

export interface ProjectModel {
  id: string;
  client: string;
  date: string;
  duration: number;
  budget: number;
  size: number;
  certificates: string[];
  services: Service[];
  image: StaticImageData;
  scopeCount: number;
}

export interface Service {
  id: string;
  label: string;
  icon: JSX.Element;
}
