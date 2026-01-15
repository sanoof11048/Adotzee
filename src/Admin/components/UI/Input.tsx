import { LucideIcon } from "lucide-react";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  icon: Icon,
  iconPosition = "left",
  className = "",
  disabled,
  ...props
}) => {
  return (
    <div className="w-full space-y-1">
      <div className="relative">
        {/* Input */}
        <input
          {...props}
          disabled={disabled}
          placeholder=" "
          className={`
            peer w-full rounded-2xl border bg-white/70 backdrop-blur-xl
            px-4 py-3 text-gray-900
            shadow-sm
            focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent
            transition-all duration-200
            hover:shadow-md
            disabled:opacity-60 disabled:cursor-not-allowed
            ${Icon && iconPosition === "left" ? "pl-11" : ""}
            ${Icon && iconPosition === "right" ? "pr-11" : ""}
            ${error
              ? "border-red-400 focus:ring-red-500"
              : "border-gray-200"}
            ${className}
          `}
        />

        {/* Icon */}
        {Icon && (
          <Icon
            size={18}
            className={`
              absolute top-1/2 -translate-y-1/2 text-gray-400
              transition-colors
              peer-focus:text-gray-900
              ${iconPosition === "left" ? "left-4" : "right-4"}
            `}
          />
        )}

        {/* Floating Label */}
        {label && (
          <label
            className={`
              absolute left-4 top-1/2 -translate-y-1/2
              text-gray-500 text-sm
              pointer-events-none
              transition-all duration-200
              peer-placeholder-shown:text-base
              peer-placeholder-shown:top-1/2
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-900
              peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs
              ${Icon && iconPosition === "left" ? "left-11" : ""}
              ${error ? "text-red-500 peer-focus:text-red-500" : ""}
            `}
          >
            {label}
          </label>
        )}
      </div>

      {/* Helper / Error */}
      {error ? (
        <p className="text-xs text-red-500 font-medium">{error}</p>
      ) : (
        helperText && (
          <p className="text-xs text-gray-400">{helperText}</p>
        )
      )}
    </div>
  );
};

export default Input;
