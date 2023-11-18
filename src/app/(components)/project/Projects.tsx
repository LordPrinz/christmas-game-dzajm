import Project from "./Project";
import prisma from "@/lib/db";

export const revalidate = 60 * 20;

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
