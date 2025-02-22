"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}
const Button = ({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `py-2 rounded-lg font-inter cursor-pointer hover:scale-98 active:scale-95 hover:opacity-95  transition-all w-full px-5 text-sm font-medium ${
          variant === "primary"
            ? "bg-primary text-zinc-900"
            : variant === "secondary"
            ? "bg-zinc-800/30 text-zinc-400"
            : " border border-zinc-800/30 text-zinc-400"
        } flex justify-center items-center gap-1	${className}`
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
