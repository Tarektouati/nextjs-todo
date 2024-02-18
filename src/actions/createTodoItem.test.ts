import { expect, it, vi } from "vitest";
import { createTodoItem } from "./createTodoItem";
import { prisma } from "../db";
import { redirect } from "next/navigation";

vi.mock("next/navigation", () => ({ redirect: vi.fn() }));

it("should create a todo item", async () => {
  vi.mock("../db", () => ({
    prisma: { todo: { create: vi.fn().mockResolvedValue(undefined) } },
  }));

  const data = new FormData();
  data.set("title", "Test");
  await createTodoItem(data);

  expect(prisma.todo.create).toHaveBeenCalledWith({
    data: { title: "Test", complete: false },
  });

  expect(redirect).toHaveBeenCalledWith("/");
});
