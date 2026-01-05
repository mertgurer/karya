import { StaticImageData } from "next/image";

export interface ServiceProps {
  service: ServiceModel;
}

export interface ServiceModel {
  id: string;
  image: StaticImageData;
}
