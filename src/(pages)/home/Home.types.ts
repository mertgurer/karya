import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  company: string;
  image: StaticImageData;
}

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
