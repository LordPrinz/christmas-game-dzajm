"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addStar() {
	console.log("Give a star");
}
export async function removeStar() {
	console.log("remove a star");
}
