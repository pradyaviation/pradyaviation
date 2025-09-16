import React from 'react';
import { useResponsive } from '@/hooks/use-responsive';
import { cn } from '@/lib/utils';

interface ResponsiveTextProps {
  children: React.ReactNode;
  variant?: 'hero' | 'title' | 'subtitle' | 'body' | 'caption';
  className?: string;
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'black';
  clamp?: boolean; // Use fluid typography
  maxLines?: number; // Text truncation
}

/**
 * Enhanced responsive typography component for AIRAVATH
 * Handles text sizing across all breakpoints with brand consistency
 */
export const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  variant = 'body',
  className = '',
  align = 'left',
  weight = 'normal',
  clamp = false,
  maxLines,
}) => {
  const responsive = useResponsive();

  const getVariantClasses = () => {
    const variants = {
      hero: {
        verySmall: 'text-xl font-bold',
        extraSmall: 'text-2xl font-bold', 
        small: 'text-2xl font-bold',
        mobile: 'text-3xl font-bold',
        tablet: 'text-4xl font-bold',
        desktop: 'text-5xl font-bold',
        clamp: 'text-clamp-5xl font-bold'
      },
      title: {
        verySmall: 'text-lg font-semibold',
        extraSmall: 'text-xl font-semibold',
        small: 'text-xl font-semibold', 
        mobile: 'text-2xl font-semibold',
        tablet: 'text-3xl font-semibold',
        desktop: 'text-4xl font-semibold',
        clamp: 'text-clamp-4xl font-semibold'
      },
      subtitle: {
        verySmall: 'text-sm font-medium',
        extraSmall: 'text-base font-medium',
        small: 'text-base font-medium',
        mobile: 'text-lg font-medium', 
        tablet: 'text-xl font-medium',
        desktop: 'text-2xl font-medium',
        clamp: 'text-clamp-2xl font-medium'
      },
      body: {
        verySmall: 'text-xs',
        extraSmall: 'text-sm',
        small: 'text-sm',
        mobile: 'text-base',
        tablet: 'text-lg',
        desktop: 'text-lg',
        clamp: 'text-clamp-base'
      },
      caption: {
        verySmall: 'text-xs',
        extraSmall: 'text-xs',
        small: 'text-xs',
        mobile: 'text-sm',
        tablet: 'text-sm',
        desktop: 'text-base',
        clamp: 'text-clamp-sm'
      }
    };

    const variantSet = variants[variant];
    
    if (clamp) return variantSet.clamp;
    
    if (responsive.isVerySmall) return variantSet.verySmall;
    if (responsive.isExtraSmall) return variantSet.extraSmall;
    if (responsive.isSmall) return variantSet.small;
    if (responsive.isMobile) return variantSet.mobile;
    if (responsive.isTablet) return variantSet.tablet;
    return variantSet.desktop;
  };

  const getAlignmentClass = () => {
    const alignMap = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    };
    return alignMap[align];
  };

  const getWeightClass = () => {
    const weightMap = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold', 
      bold: 'font-bold',
      black: 'font-black'
    };
    return weightMap[weight];
  };

  const getTruncationStyles = () => {
    if (!maxLines) return {};
    
    return {
      display: '-webkit-box',
      WebkitLineClamp: maxLines,
      WebkitBoxOrient: 'vertical' as const,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    };
  };

  const baseClasses = cn(
    getVariantClasses(),
    getAlignmentClass(),
    getWeightClass(),
    'leading-tight', // Better line spacing for readability
    {
      'break-words': responsive.isMobile, // Better word breaking on mobile
      'hyphens-auto': responsive.isVerySmall || responsive.isExtraSmall,
    },
    className
  );

  return (
    <div 
      className={baseClasses}
      style={getTruncationStyles()}
    >
      {children}
    </div>
  );
};

export default ResponsiveText;
