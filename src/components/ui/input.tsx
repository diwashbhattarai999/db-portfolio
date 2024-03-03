"use client";

import { HTMLInputTypeAttribute, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Eye, EyeOff, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputProps {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegisterReturn;
  value?: string;
  placeholder?: string;
  icon?: LucideIcon;
  error?: string;
  disabled?: boolean;
}

const Input = ({
  label,
  name,
  type,
  value,
  placeholder,
  icon: Icon,
  error,
  disabled,
  register,
}: InputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const EyeIcon = passwordVisible ? Eye : EyeOff;

  return (
    <div className="relative w-full mb-4 flex flex-col gap-2 items-start">
      <label
        htmlFor={name}
        className={cn(
          "text-primary-foreground cursor-pointer",
          error && "text-destructive opacity-80"
        )}
      >
        {label}
      </label>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center w-full relative">
          {Icon && (
            <Icon className="absolute left-2 pointer-events-none h-5 w-5 text-secondary-foreground" />
          )}
          <input
            {...register}
            name={name}
            type={
              type == "password"
                ? passwordVisible
                  ? "string"
                  : "password"
                : type
            }
            placeholder={placeholder}
            defaultValue={value}
            id={name}
            disabled={disabled}
            className={`w-full h-full py-4 pl-10 bg-transparent border rounded-md text-primary-foreground placeholder:text-secondary-foreground outline-none ${
              error
                ? "border-destructive focus:border-destructive"
                : "border-input focus:border-secondary-foreground"
            } ${disabled && "disabled"}`}
          />
        </div>

        {type == "password" && (
          <EyeIcon
            className="absolute right-2 cursor-pointer pr-4 h-9 w-9 text-secondary-foreground"
            onClick={() => setPasswordVisible((currentVal) => !currentVal)}
          />
        )}
      </div>
      {error && <div className="mb-4 text-destructive italic">{error}</div>}
    </div>
  );
};

export default Input;
