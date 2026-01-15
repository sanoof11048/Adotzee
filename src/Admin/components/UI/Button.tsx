import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ElementType;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  className = '',
  disabled,
  type = 'button',
  ...props
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 ease-out focus:outline-none focus:ring-0 disabled:opacity-40 disabled:cursor-not-allowed overflow-hidden backdrop-blur-xl active:scale-[0.98]';

  const variants: Record<string, string> = {
    primary:
      'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:from-blue-600 hover:to-blue-700 border border-blue-400/20',
    secondary:
      'bg-white/80 backdrop-blur-2xl text-gray-900 shadow-sm shadow-gray-200/50 hover:shadow-md hover:shadow-gray-300/50 hover:bg-white/90 border border-gray-200/50',
    danger:
      'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:from-red-600 hover:to-red-700 border border-red-400/20',
    ghost:
      'bg-transparent text-blue-600 hover:bg-blue-50/80 backdrop-blur-xl active:bg-blue-100/60 border border-transparent hover:border-blue-100',
    outline:
      'bg-white/60 backdrop-blur-xl border border-gray-300/60 text-gray-700 hover:bg-white/80 hover:border-gray-400/60 shadow-sm hover:shadow-md',
  };

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-5 py-2.5 text-base gap-2.5',
    lg: 'px-7 py-3.5 text-base gap-3',
  };

  const iconSizes: Record<string, number> = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  const spinnerColor =
    variant === 'secondary' || variant === 'outline' || variant === 'ghost'
      ? 'border-gray-600 border-t-transparent'
      : 'border-white border-t-transparent';

  return (
    <button
      type={type}
      className={[
        baseClasses,
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {/* Glass morphism overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      
      {/* Content */}
      <span className="relative flex items-center justify-center gap-inherit">
        {loading ? (
          <div
            className={`animate-spin rounded-full h-4 w-4 border-2 ${spinnerColor}`}
          />
        ) : (
          Icon &&
          iconPosition === 'left' && (
            <Icon size={iconSizes[size]} className="flex-shrink-0" />
          )
        )}

        {children}

        {!loading && Icon && iconPosition === 'right' && (
          <Icon size={iconSizes[size]} className="flex-shrink-0" />
        )}
      </span>
    </button>
  );
};
export default Button