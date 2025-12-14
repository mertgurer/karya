import { StaticImageData } from "next/image";
import { Project } from "../project/Project.types";

export interface ProjectCardProps {
  index: number;
  project: Project;
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
