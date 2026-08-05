import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variants = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white shadow-sm",

  secondary:
    "border border-blue-600 text-blue-600 hover:bg-blue-50",

  ghost:
    "text-slate-700 hover:bg-slate-100",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-xl
        px-5
        py-3
        text-sm
        font-medium
        transition-all
        duration-200
        cursor-pointer
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}