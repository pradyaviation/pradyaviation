import React from 'react';
import { useResponsive, useMobileFirst, useContainerSize } from '@/hooks/use-responsive';

// Enhanced Responsive Container with better mobile support
export const ResponsiveContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}> = ({ children, className = '', maxWidth = 'xl', padding = 'md' }) => {
  const { containerClasses } = useContainerSize();
  const responsive = useResponsive();
  
  const getMaxWidthClass = () => {
    if (maxWidth === 'none') return '';
    if (responsive.isVerySmall || responsive.isSmall) return 'max-w-none';
    
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
      sm: responsive.isVerySmall ? 'px-2' : responsive.isSmall ? 'px-3' : 'px-4',
      md: responsive.isVerySmall ? 'px-3' : responsive.isSmall ? 'px-4' : responsive.isMobile ? 'px-6' : 'px-8',
      lg: responsive.isVerySmall ? 'px-4' : responsive.isSmall ? 'px-6' : responsive.isMobile ? 'px-8' : 'px-12'
    };
    return paddingMap[padding] || paddingMap.md;
  };
    
  return (
    <div className={`w-full mx-auto ${getMaxWidthClass()} ${getPaddingClass()} ${className}`}>
      {children}
    </div>
  );
};

// Enhanced Responsive Text with better scaling
export const ResponsiveText: React.FC<{
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'caption';
  className?: string;
  clamp?: boolean;
}> = ({ children, variant = 'body', className = '', clamp = true }) => {
  const responsive = useResponsive();
  
  const getVariantClasses = () => {
    const variants = {
      h1: responsive.isVerySmall ? 'text-xl font-bold' : 
          responsive.isSmall ? 'text-2xl font-bold' :
          responsive.isMobile ? 'text-3xl font-bold' :
          clamp ? 'text-clamp-4xl font-bold' : 'text-4xl lg:text-5xl font-bold',
      
      h2: responsive.isVerySmall ? 'text-lg font-semibold' : 
          responsive.isSmall ? 'text-xl font-semibold' :
          responsive.isMobile ? 'text-2xl font-semibold' :
          clamp ? 'text-clamp-3xl font-semibold' : 'text-2xl lg:text-3xl font-semibold',
      
      h3: responsive.isVerySmall ? 'text-base font-medium' : 
          responsive.isSmall ? 'text-lg font-medium' :
          responsive.isMobile ? 'text-xl font-medium' :
          clamp ? 'text-clamp-2xl font-medium' : 'text-xl lg:text-2xl font-medium',
      
      h4: responsive.isVerySmall ? 'text-sm font-medium' : 
          responsive.isSmall ? 'text-base font-medium' :
          responsive.isMobile ? 'text-lg font-medium' :
          clamp ? 'text-clamp-xl font-medium' : 'text-lg lg:text-xl font-medium',
      
      body: responsive.isVerySmall ? 'text-xs' : 
            responsive.isSmall ? 'text-sm' :
            responsive.isMobile ? 'text-base' :
            clamp ? 'text-clamp-base' : 'text-base lg:text-lg',
      
      small: responsive.isVerySmall ? 'text-xs' : 
             responsive.isSmall ? 'text-xs' :
             clamp ? 'text-clamp-sm' : 'text-sm lg:text-base',
             
      caption: responsive.isVerySmall ? 'text-xs' : 
               responsive.isSmall ? 'text-xs' :
               clamp ? 'text-clamp-xs' : 'text-xs lg:text-sm'
    };
    return variants[variant];
  };
  
  const Component = variant.startsWith('h') ? variant as 'h1' | 'h2' | 'h3' | 'h4' : 'p';
  
  return (
    <Component className={`${getVariantClasses()} ${className}`}>
      {children}
    </Component>
  );
};

// Enhanced Responsive Button with better touch targets
export const ResponsiveButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  fullWidth = false,
  disabled = false 
}) => {
  const responsive = useResponsive();
  const { shouldUseTouchTargets } = useMobileFirst();
  
  const getBaseClasses = () => {
    const variants = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700',
      secondary: 'bg-gray-600 hover:bg-gray-700 text-white border-gray-600 hover:border-gray-700',
      ghost: 'bg-transparent border border-white/30 hover:border-white text-white hover:bg-white/10',
      outline: 'bg-transparent border-2 border-current text-current hover:bg-current hover:text-white'
    };
    
    const sizes = {
      sm: responsive.isVerySmall ? 'px-2 py-2 text-xs min-h-[36px]' : 
          responsive.isSmall ? 'px-3 py-2 text-xs min-h-[40px]' : 
          'px-3 py-2 text-sm min-h-[40px]',
      md: responsive.isVerySmall ? 'px-3 py-2 text-sm min-h-[44px]' : 
          responsive.isSmall ? 'px-4 py-3 text-sm min-h-[44px]' : 
          'px-4 py-2 text-base min-h-[44px]',
      lg: responsive.isVerySmall ? 'px-4 py-3 text-sm min-h-[48px]' : 
          responsive.isSmall ? 'px-6 py-3 text-base min-h-[48px]' : 
          'px-6 py-3 text-lg min-h-[48px]',
      xl: responsive.isVerySmall ? 'px-6 py-4 text-base min-h-[52px]' : 
          responsive.isSmall ? 'px-8 py-4 text-lg min-h-[52px]' : 
          'px-8 py-4 text-xl min-h-[52px]'
    };
    
    const touchOptimization = shouldUseTouchTargets ? 'touch-manipulation' : '';
    const widthClass = fullWidth ? 'w-full' : '';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    
    return `${variants[variant]} ${sizes[size]} ${touchOptimization} ${widthClass} ${disabledClass} rounded transition-all duration-200 font-medium inline-flex items-center justify-center`;
  };
  
  return (
    <button 
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${getBaseClasses()} ${className}`}
    >
      {children}
    </button>
  );
};

// Enhanced Responsive Grid with better mobile behavior
export const ResponsiveGrid: React.FC<{
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ children, cols = 3, gap = 'md', className = '' }) => {
  const responsive = useResponsive();
  const { gridColumns } = useMobileFirst();
  
  const getGridClasses = () => {
    // Use mobile-first grid columns
    const actualCols = Math.min(cols, gridColumns);
    
    const gapClasses = {
      sm: responsive.isVerySmall ? 'gap-1' : responsive.isSmall ? 'gap-2' : 'gap-3',
      md: responsive.isVerySmall ? 'gap-2' : responsive.isSmall ? 'gap-3' : 'gap-4',
      lg: responsive.isVerySmall ? 'gap-3' : responsive.isSmall ? 'gap-4' : 'gap-6'
    };
    
    if (responsive.isVerySmall) {
      return `grid grid-cols-1 ${gapClasses[gap]}`;
    }
    
    if (responsive.isSmall && cols > 1) {
      return `grid grid-cols-1 ${gapClasses[gap]}`;
    }
    
    if (responsive.isMobile && cols > 2) {
      return `grid grid-cols-1 sm:grid-cols-2 ${gapClasses[gap]}`;
    }
    
    if (responsive.isTablet && cols > 3) {
      return `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${gapClasses[gap]}`;
    }
    
    const colClasses = {
      1: 'grid grid-cols-1',
      2: 'grid grid-cols-1 sm:grid-cols-2',
      3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
      5: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
      6: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
    };
    
    return `${colClasses[actualCols]} ${gapClasses[gap]}`;
  };
  
  return (
    <div className={`${getGridClasses()} ${className}`}>
      {children}
    </div>
  );
};

// Responsive Image Component
export const ResponsiveImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
  priority?: boolean;
}> = ({ src, alt, className = '', objectFit = 'cover', priority = false }) => {
  const responsive = useResponsive();
  
  const getImageClasses = () => {
    const baseClasses = 'w-full h-auto';
    const objectFitClass = `object-${objectFit}`;
    const performanceClass = priority ? '' : 'loading-lazy';
    
    return `${baseClasses} ${objectFitClass} ${performanceClass}`;
  };
  
  return (
    <img 
      src={src}
      alt={alt}
      className={`${getImageClasses()} ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
};

// Responsive Video Component
export const ResponsiveVideo: React.FC<{
  src: string;            
  poster?: string;        
  className?: string;    
  autoPlay?: boolean;      
  muted?: boolean;        
  loop?: boolean;         
  controls?: boolean;
}> = ({ 
  src, 
  poster, 
  className = '', 
  autoPlay = false, 
  muted = true, 
  loop = false,
  controls = false 
}) => {
  const responsive = useResponsive();
  
  // Disable autoplay on very small devices for better performance
  const shouldAutoPlay = autoPlay && !responsive.isVerySmall;
  
  return (
    <video 
      className={`w-full h-auto object-cover scale-110 transform ${className}`}
      src={src}                                    
      poster={poster}                         
      autoPlay={shouldAutoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline
      preload={responsive.isVerySmall ? 'none' : 'metadata'}
    />
  );
};

// Responsive Section Component
export const ResponsiveSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: string;
}> = ({ children, className = '', padding = 'md', background }) => {
  const responsive = useResponsive();
  
  const getPaddingClasses = () => {
    const paddingMap = {
      none: '',
      sm: responsive.isVerySmall ? 'py-4' : responsive.isSmall ? 'py-6' : 'py-8',
      md: responsive.isVerySmall ? 'py-6' : responsive.isSmall ? 'py-8' : responsive.isMobile ? 'py-12' : 'py-16',
      lg: responsive.isVerySmall ? 'py-8' : responsive.isSmall ? 'py-12' : responsive.isMobile ? 'py-16' : 'py-20',
      xl: responsive.isVerySmall ? 'py-12' : responsive.isSmall ? 'py-16' : responsive.isMobile ? 'py-20' : 'py-24'
    };
    return paddingMap[padding];
  };

  return (
    <section 
      className={`w-full ${getPaddingClasses()} ${className}`}
      style={background ? { background } : undefined}
    >
      {children}
    </section>
  );
};
