import { prisma } from "@/db";

export async function toggleTodo(id: string, complete: boolean) {
    "use server";
    await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        complete: complete,
      },
    });
  }