"use server";

import { PrismaClient } from "@prisma/client";
//TODO: Deal with too man prismaClient calls

const prisma = new PrismaClient();

export async function addStar(projectId: string) {
	console.log("Give a star", projectId);
}
export async function removeStar(projectId: string) {
	console.log("remove a star", projectId);
}
