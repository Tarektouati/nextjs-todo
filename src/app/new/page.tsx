import Link from "next/link";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { createTodoItem } from "@/actions/createTodoItem";

export default function New() {
  return (
    <>
      <header className="flex pb-5">
        <h1 className="text-2xl underline underline-offset-4">
          New Todo Item:
        </h1>
      </header>
      <form action={createTodoItem} className="flex gap-2 flex-col">
        <Input />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 outline-none"
          >
            Cancel
          </Link>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </>
  );
}
