import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  outline?: boolean;
  destructive?: boolean;
  icon?: boolean;
  full?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  outline,
  destructive,
  icon,
  full,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-accent text-accent-foreground hover:bg-muted hover:text-muted-foreground p-2 rounded-[4px] duration-300 font-medium cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
        outline && "bg-transparent border border-border",
        destructive &&
          "bg-destructive hover:bg-destructive hover:opacity-70 text-white",
        icon &&
          "bg-transparent hover:bg-accent flex items-center justify-center gap-4 w-full py-[10px]",
        full ? "w-full" : "w-fit",
        className
      )}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
