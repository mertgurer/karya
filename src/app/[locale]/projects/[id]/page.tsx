import { Project } from "@/(pages)/project";
import NotFound from "@/app/not-found";
import { ProjectDetails } from "@/constants";

export default async function ProjectPage({
  params,
}: {
  params: { id: string; locale: string };
}) {
  const { id } = await params;

  if (!id) {
    return <NotFound />;
  }

  const projectObject = ProjectDetails.find((project) => project.id === id);

  if (!projectObject) {
    return <NotFound />;
  }

  return <Project project={projectObject} />;
}
