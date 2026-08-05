import { InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  error?: string;
  icon?: ReactNode;
};

export default function Input({
  label,
  helperText,
  error,
  icon,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}

        <input
          className={`
            w-full
            rounded-xl
            border
            border-slate-300
            bg-white
            px-4
            py-3
            text-slate-900
            placeholder:text-slate-400
            transition
            duration-200
            focus:border-blue-600
            focus:outline-none
            focus:ring-2
            focus:ring-blue-200
            ${icon ? "pl-11" : ""}
            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}
            ${className}
          `}
          {...props}
        />
      </div>

      {error ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : helperText ? (
        <p className="text-sm text-slate-500">{helperText}</p>
      ) : null}
    </div>
  );
}