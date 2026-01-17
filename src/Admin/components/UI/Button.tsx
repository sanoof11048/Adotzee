import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline' | 'minimal' | 'soft' | 'subtle' | 'muted' | 'text' | 'link' | 'elevated' | 'flat' | 'tonal' | 'bordered' | 'shadow' | 'pill' | 'square';
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
      'bg-linear-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:from-red-600 hover:to-red-700 border border-red-400/20',
    ghost:
      'bg-transparent text-blue-600 hover:bg-blue-50/80 backdrop-blur-xl active:bg-blue-100/60 border border-transparent hover:border-blue-100',
    outline:
      'bg-white/60 backdrop-blur-xl border border-gray-300/60 text-gray-700 hover:bg-white/80 hover:border-gray-400/60 shadow-sm hover:shadow-md',
    minimal:
      'bg-gray-100/60 text-gray-700 hover:bg-gray-200/70 border border-gray-200/40 hover:border-gray-300/60 shadow-sm',
    soft:
      'bg-gray-50/80 text-gray-800 hover:bg-gray-100/90 border border-gray-100 hover:border-gray-200 backdrop-blur-sm',
    subtle:
      'bg-transparent text-gray-600 hover:bg-gray-100/50 hover:text-gray-900 border border-gray-200/0 hover:border-gray-200/60',
    muted:
      'bg-gray-200/40 text-gray-600 hover:bg-gray-300/50 hover:text-gray-800 border border-transparent',
    text:
      'bg-transparent text-gray-700 hover:bg-gray-100/40 border border-transparent hover:text-gray-900 shadow-none',
    link:
      'bg-transparent text-gray-800 hover:text-gray-600 border-0 shadow-none underline underline-offset-4 hover:underline-offset-2 decoration-gray-400 hover:decoration-gray-600',
    elevated:
      'bg-white text-gray-800 shadow-xl shadow-gray-300/40 hover:shadow-2xl hover:shadow-gray-400/50 border border-gray-100 hover:-translate-y-0.5',
    flat:
      'bg-gray-800 text-white hover:bg-gray-700 border-0 shadow-none',
    tonal:
      'bg-gray-200 text-gray-900 hover:bg-gray-300 border border-gray-300/50 hover:border-gray-400/60',
    bordered:
      'bg-transparent text-gray-700 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50/30',
    shadow:
      'bg-white text-gray-800 shadow-md shadow-gray-400/30 hover:shadow-lg hover:shadow-gray-500/40 border-0',
    pill:
      'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200 rounded-full',
    square:
      'bg-gray-700 text-white hover:bg-gray-600 border-0 rounded-md shadow-sm',
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
    variant === 'primary' || variant === 'danger' || variant === 'flat' || variant === 'square'
      ? 'border-white border-t-transparent'
      : 'border-gray-600 border-t-transparent';

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
      <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none" />
      
      {/* Content */}
      <span className="relative flex items-center justify-center gap-inherit">
        {loading ? (
          <div
            className={`animate-spin rounded-full h-4 w-4 border-2 ${spinnerColor}`}
          />
        ) : (
          Icon &&
          iconPosition === 'left' && (
            <Icon size={iconSizes[size]} className="shrink-0" />
          )
        )}

        {children}

        {!loading && Icon && iconPosition === 'right' && (
          <Icon size={iconSizes[size]} className="flex shrink-0" />
        )}
      </span>
    </button>
  );
};
export default Button;

// Demo Component
export function DemoApp() {
  const [loading, setLoading] = React.useState<string | null>(null);

  const handleClick = (variant: string) => {
    setLoading(variant);
    setTimeout(() => setLoading(null), 2000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Button Variants</h1>
          <p className="text-gray-600">Minimal and monochromatic button options</p>
        </div>

        {/* Original Variants */}
        <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Original Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={() => handleClick('primary')} loading={loading === 'primary'}>
              Primary
            </Button>
            <Button variant="secondary" onClick={() => handleClick('secondary')} loading={loading === 'secondary'}>
              Secondary
            </Button>
            <Button variant="danger" onClick={() => handleClick('danger')} loading={loading === 'danger'}>
              Danger
            </Button>
            <Button variant="ghost" onClick={() => handleClick('ghost')} loading={loading === 'ghost'}>
              Ghost
            </Button>
            <Button variant="outline" onClick={() => handleClick('outline')} loading={loading === 'outline'}>
              Outline
            </Button>
          </div>
        </section>

        {/* New Minimal Variants */}
        <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">New Minimal Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="minimal" onClick={() => handleClick('minimal')} loading={loading === 'minimal'}>
              Minimal
            </Button>
            <Button variant="soft" onClick={() => handleClick('soft')} loading={loading === 'soft'}>
              Soft
            </Button>
            <Button variant="subtle" onClick={() => handleClick('subtle')} loading={loading === 'subtle'}>
              Subtle
            </Button>
            <Button variant="muted" onClick={() => handleClick('muted')} loading={loading === 'muted'}>
              Muted
            </Button>
            <Button variant="text" onClick={() => handleClick('text')} loading={loading === 'text'}>
              Text
            </Button>
          </div>
        </section>

        {/* Size Variations */}
        <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sizes (Minimal Variant)</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="minimal" size="sm">Small</Button>
            <Button variant="minimal" size="md">Medium</Button>
            <Button variant="minimal" size="lg">Large</Button>
          </div>
        </section>

        {/* States */}
        <section className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">States (Soft Variant)</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="soft">Normal</Button>
            <Button variant="soft" disabled>Disabled</Button>
            <Button variant="soft" loading>Loading</Button>
          </div>
        </section>
      </div>
    </div>
  );
}