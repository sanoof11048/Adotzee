import React from 'react';
import { Eye, EyeOff, LucideIcon } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  variant?: 'default' | 'filled' | 'outlined' | 'minimal';
  inputSize?: 'sm' | 'md' | 'lg';
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  icon: Icon,
  iconPosition = 'left',
  variant = 'default',
  inputSize = 'md',
  className = '',
  disabled,
  type = 'text',
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const isPasswordType = type === 'password';

  const baseClasses = `
    peer w-full rounded-2xl
    font-medium
    transition-all duration-200 ease-out
    focus:outline-none
    disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50
    placeholder:text-gray-400
  `;

  const variants = {
    default: `
      bg-white/70 backdrop-blur-xl border
      shadow-sm hover:shadow-md
      focus:shadow-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
      ${error ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : 'border-gray-200'}
    `,
    filled: `
      bg-gray-100 border border-transparent
      hover:bg-gray-150
      focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
      ${error ? 'bg-red-50 focus:border-red-500 focus:ring-red-500/20' : ''}
    `,
    outlined: `
      bg-transparent border-2
      hover:border-gray-400
      focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
      ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : 'border-gray-300'}
    `,
    minimal: `
      bg-transparent border-b-2 border-t-0 border-x-0 rounded-none
      px-0
      hover:border-gray-400
      focus:border-blue-500
      ${error ? 'border-red-400 focus:border-red-500' : 'border-gray-300'}
    `,
  };

  const sizes = {
    sm: `text-sm ${variant === 'minimal' ? 'py-1.5' : 'px-3 py-2'}`,
    md: `text-base ${variant === 'minimal' ? 'py-2' : 'px-4 py-3'}`,
    lg: `text-lg ${variant === 'minimal' ? 'py-2.5' : 'px-5 py-3.5'}`,
  };

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  const getPaddingWithIcon = () => {
    if (variant === 'minimal') return '';
    
    const padding = {
      sm: { left: 'pl-3', right: 'pr-3' },
      md: { left: 'pl-4', right: 'pr-4' },
      lg: { left: 'pl-5', right: 'pr-5' },
    };

    let classes = '';
    if (Icon && iconPosition === 'left') classes += padding[inputSize].left;
    if (Icon && iconPosition === 'right') classes += ' ' + padding[inputSize].right;
    if (isPasswordType) classes += ' ' + padding[inputSize].right;
    
    return classes;
  };

  const getIconPosition = () => {
    if (variant === 'minimal') {
      return iconPosition === 'left' ? 'left-0' : 'right-0';
    }
    
    const positions = {
      sm: { left: 'left-3', right: 'right-3' },
      md: { left: 'left-4', right: 'right-4' },
      lg: { left: 'left-4', right: 'right-4' },
    };
    
    return iconPosition === 'left' ? positions[inputSize].left : positions[inputSize].right;
  };

  const getLabelClasses = () => {
    const baseLabel = `
      absolute pointer-events-none
      transition-all duration-200 ease-out
      ${error ? 'text-red-500' : 'text-gray-500'}
    `;

    if (variant === 'minimal') {
      return `
        ${baseLabel}
        left-0 
        origin-left
        peer-placeholder-shown:text-base peer-placeholder-shown:top-2
        peer-focus:text-xs peer-focus:-top-5 peer-focus:text-blue-600
        peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-5
        ${Icon && iconPosition === 'left' ? 'peer-placeholder-shown:left-7' : ''}
        ${isFocused || props.value ? `text-xs -top-5 rounded-lg ${error ? 'text-red-500' : 'text-blue-600'}` : `text-base top-2 ${Icon && iconPosition === 'left' ? 'left-7' : ''}`}
      `;
    }

    const labelSizes = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    };

    const focusedSizes = {
      sm: 'text-[10px]',
      md: 'text-xs',
      lg: 'text-sm',
    };

    const isActive = isFocused || props.value || (props as any).defaultValue;

    return `
      ${baseLabel}
      ${isActive ? focusedSizes[inputSize] : labelSizes[inputSize]}
      ${isActive ? 'left-4 -top-2.5 bg-white px-2' : `${Icon && iconPosition === 'left' ? 'left-11' : 'left-4'} top-1/2 -translate-y-1/2`}
      ${isActive ? (error ? 'text-red-500' : 'text-blue-600') : ''}
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:${labelSizes[inputSize]}
      peer-placeholder-shown:${Icon && iconPosition === 'left' ? 'left-11' : 'left-4'}
      peer-focus:-top-2.5 peer-focus:left-4 peer-focus:translate-y-0 peer-focus:${focusedSizes[inputSize]} peer-focus:bg-white peer-focus:px-2
      ${error ? 'peer-focus:text-red-500' : 'peer-focus:text-blue-600'}
      peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:translate-y-0 
      peer-[:not(:placeholder-shown)]:${focusedSizes[inputSize]} peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2
    `;
  };

  return (
    <div className="w-full space-y-1.5">
      <div className="relative">
        {/* Input */}
        <input
          {...props}
          type={isPasswordType ? (showPassword ? 'text' : 'password') : type}
          disabled={disabled}
          placeholder=" "
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`
            ${baseClasses}
            ${variants[variant]}
            ${sizes[inputSize]}
            ${getPaddingWithIcon()}
            ${className}
          `}
        />

        {/* Left Icon */}
        {Icon && iconPosition === 'left' && (
          <Icon
            size={iconSizes[inputSize]}
            className={`
              absolute top-1/2 -translate-y-1/2
              ${getIconPosition()}
              transition-colors duration-200
              ${error ? 'text-red-400' : 'text-gray-400'}
              ${isFocused ? (error ? 'text-red-500' : 'text-blue-500') : ''}
            `}
          />
        )}

        {/* Right Icon (or Password Toggle) */}
        {iconPosition === 'right' && !isPasswordType && Icon && (
          <Icon
            size={iconSizes[inputSize]}
            className={`
              absolute top-1/2 -translate-y-1/2
              ${getIconPosition()}
              transition-colors duration-200
              ${error ? 'text-red-400' : 'text-gray-400'}
              ${isFocused ? (error ? 'text-red-500' : 'text-blue-500') : ''}
            `}
          />
        )}

        {/* Password Toggle */}
        {isPasswordType && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`
              absolute top-1/2 -translate-y-1/2 right-4
              text-gray-400 hover:text-gray-600
              transition-colors duration-200
              focus:outline-none
            `}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff size={iconSizes[inputSize]} />
            ) : (
              <Eye size={iconSizes[inputSize]} />
            )}
          </button>
        )}

        {/* Floating Label */}
        {label && (
          <label className={getLabelClasses()}>
            {label}
          </label>
        )}
      </div>

      {/* Helper / Error Text */}
      {error ? (
        <p className="text-xs text-red-500 font-medium px-1 flex items-center gap-1">
          <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
          {error}
        </p>
      ) : (
        helperText && (
          <p className="text-xs text-gray-500 px-1">{helperText}</p>
        )
      )}
    </div>
  );
};

export default Input