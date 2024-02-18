type Props = React.HTMLProps<HTMLInputElement>;

export function Input(props: Props) {
  return (
    <input
     {...props}
      type="text"
      name="title"
      placeholder="Create a new todo item"
      className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 focus-within:border-zinc-700 bg-transparent outline-none"
    />
  );
}
