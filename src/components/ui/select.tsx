"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, LucideIcon, UserCog } from "lucide-react";
import { ReactPropTypes, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import MotionList from "../motion-list";
import MotionSidebar from "../motion-sidebar";

type Options = {
  readonly value: string;
  readonly label: string;
};

interface SelectProps {
  name: string;
  register: UseFormRegisterReturn;
  value?: string;
  error?: string;
  disabled?: boolean;
  options: Options[];
  props?: ReactPropTypes;
  className?: string;
}

const Select = ({
  name,
  value,
  error,
  disabled,
  register,
  options,
  props,
  className,
}: SelectProps) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(value || "Select a role");

  const handleSelect = (option: Options) => {
    setSelectValue(option.label);
    // Use the ref provided by register to update the form value
    register.onChange({ target: { name, value: option.value } });
    setSelectOpen(false);
  };

  return (
    <div className="w-full relative mb-8 flex flex-col items-start gap-2">
      <label
        htmlFor="SelectRole"
        className={cn(
          "text-primary-foreground cursor-pointer ",
          error && "text-destructive opacity-80",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        Role
      </label>

      <div
        className="flex items-center w-full"
        onClick={() => setSelectOpen((currValue) => !currValue)}
      >
        <UserCog className="absolute left-2 pointer-events-none h-5 w-5 text-secondary-foreground" />

        <div
          {...props}
          className={cn(
            "w-full h-full py-4 px-10 bg-transparent border rounded-md text-left text-primary-foreground placeholder:text-secondary-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer",
            error
              ? "border-destructive focus:border-destructive"
              : "border-input focus:border-secondary-foreground",
            className
          )}
          {...register}
        >
          {selectValue}
        </div>
        <ChevronDown className="absolute right-2 cursor-pointer pr-4 h-9 w-9 text-secondary-foreground" />
      </div>

      <div
        className={cn(
          "w-full h-fit bg-input absolute left-0 top-24 my-2 rounded-md text-left duration-300",
          selectOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-5 opacity-0 pointer-events-none"
        )}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className="py-2 hover:bg-ring cursor-pointer rounded-md px-10 duration-300 m-2"
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
