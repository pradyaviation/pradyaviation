import React from 'react';
import { useResponsive } from '@/hooks/use-responsive';
import { cn } from '@/lib/utils';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl';
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  centerContent?: boolean;
  fullHeight?: boolean;
  safeArea?: boolean; // For devices with notches
}

/**
 * Enhanced responsive container for AIRAVATH
 * Handles all screen sizes with optimal padding and spacing
 */
export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  maxWidth = 'xl',
  padding = 'md',
  centerContent = false,
  fullHeight = false,
  safeArea = false,
}) => {
  const responsive = useResponsive();

  const getMaxWidthClass = () => {
    if (maxWidth === 'none') return '';
    
    // Always use full width on very small screens
    if (responsive.isVerySmall || responsive.isExtraSmall) return 'max-w-none';
    
    const maxWidthMap = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg', 
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      '7xl': 'max-w-7xl'
    };
    return maxWidthMap[maxWidth] || 'max-w-xl';
  };

  const getPaddingClass = () => {
    if (padding === 'none') return '';
    
    const paddingMap = {
      xs: responsive.isVerySmall ? 'px-2' : responsive.isExtraSmall ? 'px-3' : 'px-4',
      sm: responsive.isVerySmall ? 'px-3' : responsive.isExtraSmall ? 'px-4' : responsive.isSmall ? 'px-4' : 'px-6',
      md: responsive.isVerySmall ? 'px-4' : responsive.isExtraSmall ? 'px-4' : responsive.isSmall ? 'px-6' : responsive.isMobile ? 'px-6' : 'px-8',
      lg: responsive.isVerySmall ? 'px-4' : responsive.isExtraSmall ? 'px-6' : responsive.isSmall ? 'px-6' : responsive.isMobile ? 'px-8' : 'px-12',
      xl: responsive.isVerySmall ? 'px-6' : responsive.isExtraSmall ? 'px-6' : responsive.isSmall ? 'px-8' : responsive.isMobile ? 'px-8' : 'px-16'
    };
    return paddingMap[padding];
  };

  const getSafeAreaStyles = () => {
    if (!safeArea || !responsive.hasNotch) return {};
    
    return {
      paddingTop: 'max(env(safe-area-inset-top), 1rem)',
      paddingRight: 'max(env(safe-area-inset-right), 1rem)',
      paddingBottom: 'max(env(safe-area-inset-bottom), 1rem)',
      paddingLeft: 'max(env(safe-area-inset-left), 1rem)',
    };
  };

  const baseClasses = cn(
    'w-full mx-auto',
    getMaxWidthClass(),
    getPaddingClass(),
    {
      'flex items-center justify-center': centerContent,
      'min-h-screen': fullHeight,
      'min-h-[100dvh]': fullHeight && responsive.isMobile, // Use dynamic viewport height on mobile
    },
    className
  );

  return (
    <div 
      className={baseClasses}
      style={getSafeAreaStyles()}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
