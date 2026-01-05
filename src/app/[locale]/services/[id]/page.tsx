import { Service } from "@/(pages)/service";
import NotFound from "@/app/not-found";
import { ServiceDetails } from "@/constants";

export default async function ProjectPage({
  params,
}: {
  params: { id: string; locale: string };
}) {
  const { id } = await params;

  if (!id) {
    return <NotFound />;
  }

  const serviceObject = ServiceDetails.find((service) => service.id === id);

  if (!serviceObject) {
    return <NotFound />;
  }

  return <Service service={serviceObject} />;
}
