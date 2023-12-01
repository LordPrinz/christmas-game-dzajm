import Project from "./Project";
import prisma from "@/lib/db";

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
