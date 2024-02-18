"use client";

import Image from "next/image";
import deleteButton from "../../../public/delete-button.png";
import { TodoType } from "@/domain";

type TodoItemProps = {
  todo: TodoType;
  toggleTodo?: (id: string, complete: boolean) => Promise<void>;
  deleteTodo?: (id: string) => Promise<void>;
};

export function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  async function performToggleTodo(id: string, complete: boolean) {
    if (toggleTodo) {
      await toggleTodo(id, complete);
    }
  }

  async function confirmDelete(id: string) {
    if (confirm("Are you sure you want to remove this item?") == true) {
      if (deleteTodo) {
        await deleteTodo(id);
      }
    }
  }

  return (
    !todo.deleted && (
      <li className="flex gap-1 items-center">
        <input
          id={todo.id}
          type="checkbox"
          defaultChecked={todo.complete}
          onChange={(e) => performToggleTodo(todo.id, e.target.checked)}
          className="cursor-pointer peer accent-zinc-400"
        />
        <label
          htmlFor={todo.id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-zinc-400"
        >
          {todo.title}
        </label>
        <Image
          src={deleteButton}
          alt="delete button"
          onClick={(e) => confirmDelete(todo.id)}
          width={25}
          height={25}
        />
      </li>
    )
  );
}
