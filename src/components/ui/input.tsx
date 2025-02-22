"use client";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
  className?: string;
}
const Input = ({
  variant = "primary",
  children,
  className,
  ...props
}: InputProps) => {
  const [focusD, setFocus] = useState(false);
  const [passVisible, setPassVisible] = useState(false);

  return (
    <div
      className={`w-full  h-12 px-4 flex items-center  ${
        variant === "primary"
          ? `  text-zinc-400 border ${
              focusD ? "border-primary" : "border-zinc-800/30"
            } `
          : `bg-zinc-800/30 border-zinc-800/30 `
      } ${className} rounded-lg gap-2.5  transition-all    
       `}
    >
      {children}
      <input
        className={`w-full h-full outline-none transition-all text-sm placeholder:text-zinc-400 placeholder:text-sm`}
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type={passVisible && props.type === "password" ? "text" : props.type}
      />
      {props.type === "password" && (
        <span
          className="w-8 h-8 flex justify-center items-center cursor-pointer "
          onClick={() => setPassVisible(!passVisible)}
        >
          {passVisible ? (
            <>
              <Eye className="w-4 h-4" />
            </>
          ) : (
            <>
              <EyeClosed className="w-4 h-4" />
            </>
          )}
        </span>
      )}
    </div>
  );
};

export default Input;
