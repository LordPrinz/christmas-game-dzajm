"use server";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { PrismaClient, ProjectModel } from "@prisma/client";
import { getServerSession } from "next-auth";
//TODO: Deal with too man prismaClient calls

const prisma = new PrismaClient();

export async function addStar(project: ProjectModel) {
	const session = await getServerSession(options);

	const userId = session?.user?.email;

	project.staredBy.push(userId!);

	const toSave = project.staredBy;

	const res = await prisma.projectModel.update({
		data: { staredBy: toSave },
		where: {
			id: project.id,
		},
	});

	return res;
}
export async function removeStar(project: ProjectModel) {
	const session = await getServerSession(options);

	const userId = session?.user?.email;

	const toSave = project.staredBy.filter((uId) => uId !== userId!);

	const res = await prisma.projectModel.update({
		data: { staredBy: toSave },
		where: {
			id: project.id,
		},
	});

	return res;
}
