import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";

interface TextareaProps {
  name: string;
  label: string;
  disabled?: boolean;
  error?: string;
  Icon?: LucideIcon;
  value?: string;
  setValue: UseFormSetValue<{
    name?: string | undefined;
    position?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
    resume?: { id: string } | undefined;
  }>;
}

const Textarea = ({
  name,
  label,
  disabled,
  error,
  Icon,
  value,
  setValue,
}: TextareaProps) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let input = e.target;

    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";

    setValue("description", input.value);
  };

  useEffect(() => {
    const textarea = document.getElementById(
      name
    ) as HTMLTextAreaElement | null;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, [name, value]);

  return (
    <div
      className={cn(
        "relative w-full mb-4 flex flex-col gap-2 items-start",
        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      <label
        htmlFor={name}
        className={cn(
          "text-primary-foreground cursor-pointer",
          error && "text-destructive opacity-80",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        {label}
      </label>
      <div className="flex items-center w-full relative">
        {Icon && (
          <Icon className="absolute left-2 top-[1.1rem] pointer-events-none h-5 w-5 text-secondary-foreground" />
        )}
        <textarea
          id={name}
          defaultValue={value}
          placeholder={label}
          className={cn(
            "w-full h-full py-4 px-10 bg-transparent border rounded-md text-primary-foreground placeholder:text-secondary-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none leading-tight no-scrollbar",
            error
              ? "border-destructive focus:border-destructive"
              : "border-input focus:border-secondary-foreground"
          )}
          onChange={handleTextChange}
        ></textarea>
      </div>
    </div>
  );
};

export default Textarea;
