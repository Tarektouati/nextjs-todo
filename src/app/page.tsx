import { deleteTodo } from "@/actions/deleteTodo";
import { getTodos } from "@/actions/getTodos";
import { toggleTodo } from "@/actions/toggleTodo";
import { TodoItem } from "@/components/TodoItem/TodoItem";
import Link from "next/link";



export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center pb-5">
        <h1 className="text-2xl underline underline-offset-4 ">Todos</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 outline-none"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}




