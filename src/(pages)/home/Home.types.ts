import { StaticImageData } from "next/image";
import { ProjectModel } from "../project";

export interface ProjectCardProps {
  index: number;
  project: ProjectModel;
}

export interface Blog {
  id: string;
  image: StaticImageData;
  link: string;
}

export interface BlogProps {
  blog: Blog;
  reverse?: boolean;
}

export interface Service {
  id: string;
  image: StaticImageData;
}

export interface ServiceCardProps {
  service: Service;
}
