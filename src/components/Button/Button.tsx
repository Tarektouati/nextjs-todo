
type Props = {
  type?: HTMLButtonElement["type"];
} & React.HTMLProps<HTMLButtonElement>;

export function Button({ children, type="button", ...props }: Readonly<Props>) {
  return (
    <button
      type={type}
      {...props}
      className="border border-slate-300 text-slate-300 rounded px-2 py-1 hover:bg-zinc-700 focus-within:bg-zinc-700 outline-none"
    >
      {children}
    </button>
  );
}
