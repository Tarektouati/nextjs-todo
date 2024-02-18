import { prisma } from "@/db";

export async function getTodos() {
  "use server";
  return prisma.todo.findMany({
    where: {
      deleted: {
        not: true,
      },
    },
    orderBy: {
      createdAt: "asc",
    }
  });
}