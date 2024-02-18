import { prisma } from "@/db";
import { TodoType } from "@/domain";

export async function deleteTodo(id: string): Promise<void> {
    "use server";
     await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        deleted: true,
      },
    });
  
  }