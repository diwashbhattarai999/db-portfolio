import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  outline?: boolean;
  icon?: boolean;
  onclick?: () => void;
}
const Button = ({ children, outline, icon, onclick }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-accent text-accent-foreground hover:bg-muted hover:text-muted-foreground p-2 rounded-[4px] duration-300 font-medium",
        outline && "bg-transparent border border-border",
        icon && "bg-transparent hover:bg-accent"
      )}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export { Button };
