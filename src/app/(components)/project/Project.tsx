import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Snowflake from "./SnowFlake";

export type SecuredProject = {
	id: string;
	teamName: string;
	name: string;
	link: string;
	members: string[];
	contactEmail: string;
};

type Props = {
	project: SecuredProject;
};

const Project = ({ project }: Props) => {
	return (
		<Link
			href={project.link}
			className="border rounded-lg p-4 hover:-translate-y-1 hover:transition transition relative">
			<div className="flex gap-1 flex-col">
				<span className="text-sm">{project.teamName}</span>
				<span className="text-lg font-semibold">{project.name}</span>
			</div>
			<Snowflake />
		</Link>
	);
};

export default Project;
