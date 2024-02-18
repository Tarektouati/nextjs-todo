import { prisma } from "../db";
import { redirect } from "next/navigation";

export async function createTodoItem(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    return new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title: title, complete: false } });

  redirect("/");
}
