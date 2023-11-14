import { PrismaClient } from "@prisma/client";
import Project from "./Project";

export const revalidate = 3600;

const prisma = new PrismaClient();

const Projects = async () => {
	const projects = await prisma.projectModel.findMany();

	return (
		<>
			{projects.map((project) => (
				<Project key={project.id} project={project} />
			))}
		</>
	);
};

export default Projects;
