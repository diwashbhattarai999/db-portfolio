interface ButtonProps {
  children: React.ReactNode;
}
const Button = ({ children }: ButtonProps) => {
  return (
    <div className="inline-block font-medium text-sm bg-zinc-800 px-2 py-4 rounded-md text-zinc-100 group-hover/link:text-zinc-300">
      {children}
    </div>
  );
};

export { Button };
