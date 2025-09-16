import React from 'react';
import { useResponsive } from '@/hooks/use-responsive';
import { cn } from '@/lib/utils';

interface ResponsiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

/**
 * Enhanced responsive button component for AIRAVATH
 * Optimizes touch targets and sizing across all devices
 */
export const ResponsiveButton: React.FC<ResponsiveButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  icon,
  iconPosition = 'right',
  isLoading = false,
}) => {
  const responsive = useResponsive();

  const getVariantClasses = () => {
    const variants = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-600 hover:bg-gray-700 text-white border-gray-600 hover:border-gray-700 focus:ring-gray-500',
      ghost: 'bg-transparent border border-white/30 hover:border-white text-white hover:bg-white/10 focus:ring-white/30',
      outline: 'bg-transparent border-2 border-current text-current hover:bg-current hover:text-white focus:ring-current/30'
    };
    return variants[variant];
  };

  const getSizeClasses = () => {
    const sizes = {
      sm: {
        verySmall: 'px-3 py-2 text-xs min-h-[40px]',
        extraSmall: 'px-3 py-2 text-xs min-h-[44px]',
        small: 'px-4 py-2 text-sm min-h-[44px]',
        default: 'px-4 py-2 text-sm min-h-[44px]'
      },
      md: {
        verySmall: 'px-4 py-3 text-sm min-h-[44px]',
        extraSmall: 'px-4 py-3 text-sm min-h-[48px]',
        small: 'px-6 py-3 text-base min-h-[48px]',
        default: 'px-6 py-3 text-base min-h-[48px]'
      },
      lg: {
        verySmall: 'px-6 py-4 text-base min-h-[48px]',
        extraSmall: 'px-6 py-4 text-base min-h-[52px]',
        small: 'px-8 py-4 text-lg min-h-[52px]',
        default: 'px-8 py-4 text-lg min-h-[52px]'
      },
      xl: {
        verySmall: 'px-8 py-5 text-lg min-h-[52px]',
        extraSmall: 'px-8 py-5 text-lg min-h-[56px]',
        small: 'px-10 py-5 text-xl min-h-[56px]',
        default: 'px-12 py-6 text-xl min-h-[60px]'
      }
    };

    const sizeSet = sizes[size];
    
    if (responsive.isVerySmall) return sizeSet.verySmall;
    if (responsive.isExtraSmall) return sizeSet.extraSmall;
    if (responsive.isSmall) return sizeSet.small;
    return sizeSet.default;
  };

  const getWidthClass = () => {
    if (fullWidth) return 'w-full';
    if (responsive.isVerySmall || responsive.isExtraSmall) return 'w-full max-w-xs mx-auto';
    return '';
  };

  const getTouchOptimization = () => {
    return responsive.touchDevice ? 'touch-manipulation' : '';
  };

  const baseClasses = cn(
    // Base button styles
    'inline-flex items-center justify-center',
    'font-medium uppercase tracking-wide',
    'border transition-all duration-300 ease-in-out',
    'rounded focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    
    // Responsive classes
    getVariantClasses(),
    getSizeClasses(),
    getWidthClass(),
    getTouchOptimization(),
    
    // Loading state
    {
      'cursor-wait': isLoading,
      'pointer-events-none': isLoading || disabled,
    },
    
    className
  );

  const iconSize = responsive.isVerySmall ? 16 : responsive.isExtraSmall ? 18 : 20;

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
          Loading...
        </>
      );
    }

    if (icon && iconPosition === 'left') {
      return (
        <>
          <span className="mr-2" style={{ fontSize: iconSize }}>
            {icon}
          </span>
          {children}
        </>
      );
    }

    if (icon && iconPosition === 'right') {
      return (
        <>
          {children}
          <span className="ml-2" style={{ fontSize: iconSize }}>
            {icon}
          </span>
        </>
      );
    }

    return children;
  };

  return (
    <button
      onClick={disabled || isLoading ? undefined : onClick}
      disabled={disabled || isLoading}
      className={baseClasses}
      type="button"
    >
      {renderContent()}
    </button>
  );
};

export default ResponsiveButton;
