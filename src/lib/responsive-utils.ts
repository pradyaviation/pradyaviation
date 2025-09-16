/**
 * Enhanced responsive utility functions for handling different screen sizes
 * Mobile-first approach with comprehensive device support
 * 
 * @version 2.0 - Enhanced for AIRAVATH project
 */

// Enhanced breakpoint definitions with specific device targeting
export const BREAKPOINTS = {
  verySmall: 320,    // Very small phones (iPhone SE 1st gen, older Android)
  extraSmall: 374,   // Small phones (iPhone SE 2nd gen, small Android)
  small: 420,        // Standard small phones (iPhone 12 mini, standard phones)
  mobile: 640,       // Large phones / small tablets (iPhone Pro Max, etc)
  tablet: 768,       // Tablets (iPad, Android tablets)
  desktop: 1024,     // Desktop / Large tablets
  large: 1280,       // Large desktop
  extraLarge: 1440,  // Very large screens
  ultraWide: 1920,   // Ultra-wide screens
  fourK: 2560,       // 4K displays
} as const;

// Safe area constants for modern devices
export const SAFE_AREAS = {
  top: 'env(safe-area-inset-top, 0px)',
  right: 'env(safe-area-inset-right, 0px)', 
  bottom: 'env(safe-area-inset-bottom, 0px)',
  left: 'env(safe-area-inset-left, 0px)',
} as const;

// Device type detection
export const getDeviceType = (width: number = window?.innerWidth || 1024) => {
  if (width <= BREAKPOINTS.extraSmall) return 'phone-small';
  if (width <= BREAKPOINTS.small) return 'phone';
  if (width <= BREAKPOINTS.mobile) return 'phone-large';
  if (width <= BREAKPOINTS.tablet) return 'tablet';
  if (width <= BREAKPOINTS.desktop) return 'tablet-large';
  if (width <= BREAKPOINTS.large) return 'desktop';
  if (width <= BREAKPOINTS.extraLarge) return 'desktop-large';
  return 'desktop-ultra';
};

// Get current screen size category with more granular detection
export const getScreenSize = (width: number = window?.innerWidth || 1024) => {
  if (width <= BREAKPOINTS.verySmall) return 'verySmall';
  if (width <= BREAKPOINTS.extraSmall) return 'extraSmall';
  if (width <= BREAKPOINTS.small) return 'small';
  if (width <= BREAKPOINTS.mobile) return 'mobile';
  if (width <= BREAKPOINTS.tablet) return 'tablet';
  if (width <= BREAKPOINTS.desktop) return 'desktop';
  if (width <= BREAKPOINTS.large) return 'large';
  if (width <= BREAKPOINTS.extraLarge) return 'extraLarge';
  return 'ultraWide';
};

// Enhanced problematic size detection
export const isProblematicSize = (width: number = window?.innerWidth || 1024): boolean => {
  return width <= BREAKPOINTS.small;
};

// Mobile-first responsive font sizing
export const getResponsiveFontSize = (
  variant: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl',
  screenWidth: number = window?.innerWidth || 1024
): string => {
  const fontSizes = {
    xs: {
      verySmall: '0.65rem',
      small: '0.7rem',
      mobile: '0.75rem',
      default: '0.875rem'
    },
    sm: {
      verySmall: '0.7rem',
      small: '0.75rem',
      mobile: '0.875rem',
      default: '1rem'
    },
    base: {
      verySmall: '0.8rem',
      small: '0.875rem',
      mobile: '1rem',
      default: '1.125rem'
    },
    lg: {
      verySmall: '0.9rem',
      small: '1rem',
      mobile: '1.125rem',
      default: '1.25rem'
    },
    xl: {
      verySmall: '1rem',
      small: '1.125rem',
      mobile: '1.25rem',
      default: '1.5rem'
    },
    '2xl': {
      verySmall: '1.125rem',
      small: '1.25rem',
      mobile: '1.5rem',
      default: '2rem'
    },
    '3xl': {
      verySmall: '1.25rem',
      small: '1.5rem',
      mobile: '1.875rem',
      default: '2.5rem'
    },
    '4xl': {
      verySmall: '1.5rem',
      small: '1.75rem',
      mobile: '2.25rem',
      default: '3rem'
    },
    '5xl': {
      verySmall: '1.75rem',
      small: '2rem',
      mobile: '2.75rem',
      default: '3.75rem'
    }
  };

  const sizes = fontSizes[variant];
  
  if (screenWidth <= BREAKPOINTS.verySmall) return sizes.verySmall;
  if (screenWidth <= BREAKPOINTS.small) return sizes.small;
  if (screenWidth <= BREAKPOINTS.mobile) return sizes.mobile;
  return sizes.default;
};

// Enhanced responsive padding with mobile-first approach
export const getResponsivePadding = (
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md',
  screenWidth: number = window?.innerWidth || 1024
) => {
  const paddingSizes = {
    xs: {
      verySmall: 'px-1 py-1',
      small: 'px-2 py-1',
      mobile: 'px-2 py-2',
      default: 'px-3 py-2'
    },
    sm: {
      verySmall: 'px-2 py-2',
      small: 'px-3 py-2',
      mobile: 'px-4 py-3',
      default: 'px-4 py-3'
    },
    md: {
      verySmall: 'px-3 py-3',
      small: 'px-4 py-3',
      mobile: 'px-6 py-4',
      default: 'px-8 py-6'
    },
    lg: {
      verySmall: 'px-4 py-4',
      small: 'px-6 py-4',
      mobile: 'px-8 py-6',
      default: 'px-12 py-8'
    },
    xl: {
      verySmall: 'px-6 py-6',
      small: 'px-8 py-6',
      mobile: 'px-12 py-8',
      default: 'px-16 py-12'
    }
  };

  const sizes = paddingSizes[size];
  
  if (screenWidth <= BREAKPOINTS.verySmall) return sizes.verySmall;
  if (screenWidth <= BREAKPOINTS.small) return sizes.small;
  if (screenWidth <= BREAKPOINTS.mobile) return sizes.mobile;
  return sizes.default;
};

// Enhanced responsive container with better mobile support
export const getResponsiveContainer = (
  maxWidth: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' = 'xl',
  screenWidth: number = window?.innerWidth || 1024
) => {
  const baseClasses = 'w-full mx-auto';
  
  // Always use minimal padding and no max-width on very small screens
  if (screenWidth <= BREAKPOINTS.verySmall) {
    return `${baseClasses} px-2 max-w-none`;
  }
  
  if (screenWidth <= BREAKPOINTS.small) {
    return `${baseClasses} px-3 max-w-none`;
  }
  
  if (screenWidth <= BREAKPOINTS.mobile) {
    return `${baseClasses} px-4 max-w-2xl`;
  }

  const maxWidthClasses = {
    none: 'max-w-none',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '7xl': 'max-w-7xl'
  };
  
  return `${baseClasses} px-6 ${maxWidthClasses[maxWidth]}`;
};

// Smart grid columns based on screen size and content
export const getResponsiveGridCols = (
  desiredCols: number,
  screenWidth: number = window?.innerWidth || 1024,
  minItemWidth: number = 200
): number => {
  // Calculate maximum possible columns based on screen width and minimum item width
  const maxPossibleCols = Math.floor(screenWidth / minItemWidth);
  
  if (screenWidth <= BREAKPOINTS.verySmall) return 1;
  if (screenWidth <= BREAKPOINTS.small) return Math.min(1, maxPossibleCols);
  if (screenWidth <= BREAKPOINTS.mobile) return Math.min(2, Math.min(desiredCols, maxPossibleCols));
  if (screenWidth <= BREAKPOINTS.tablet) return Math.min(3, Math.min(desiredCols, maxPossibleCols));
  
  return Math.min(desiredCols, maxPossibleCols);
};

// Smart text truncation for small screens
export const formatTextForSmallScreen = (
  text: string, 
  maxLength: number = 50,
  screenWidth: number = window?.innerWidth || 1024
): string => {
  if (screenWidth > BREAKPOINTS.mobile) return text;
  
  // Progressive truncation based on screen size
  const truncationLengths = {
    verySmall: Math.max(20, maxLength * 0.4),
    small: Math.max(30, maxLength * 0.6),
    mobile: Math.max(40, maxLength * 0.8)
  };
  
  let targetLength = maxLength;
  
  if (screenWidth <= BREAKPOINTS.verySmall) {
    targetLength = truncationLengths.verySmall;
  } else if (screenWidth <= BREAKPOINTS.small) {
    targetLength = truncationLengths.small;
  } else if (screenWidth <= BREAKPOINTS.mobile) {
    targetLength = truncationLengths.mobile;
  }
  
  return text.length > targetLength ? `${text.substring(0, targetLength).trim()}...` : text;
};

// Enhanced responsive button sizing with better touch targets
export const getResponsiveButtonSize = (
  size: 'sm' | 'md' | 'lg' | 'xl' = 'md',
  screenWidth: number = window?.innerWidth || 1024
) => {
  const buttonSizes = {
    sm: {
      verySmall: 'px-2 py-2 text-xs min-h-[36px] min-w-[36px]',
      small: 'px-3 py-2 text-xs min-h-[40px] min-w-[40px]',
      mobile: 'px-3 py-2 text-sm min-h-[40px] min-w-[40px]',
      default: 'px-4 py-2 text-sm min-h-[40px] min-w-[40px]'
    },
    md: {
      verySmall: 'px-3 py-2 text-sm min-h-[44px] min-w-[44px]',
      small: 'px-4 py-3 text-sm min-h-[44px] min-w-[44px]',
      mobile: 'px-4 py-2 text-base min-h-[44px] min-w-[44px]',
      default: 'px-6 py-3 text-base min-h-[44px] min-w-[44px]'
    },
    lg: {
      verySmall: 'px-4 py-3 text-sm min-h-[48px] min-w-[48px]',
      small: 'px-6 py-3 text-base min-h-[48px] min-w-[48px]',
      mobile: 'px-6 py-3 text-lg min-h-[48px] min-w-[48px]',
      default: 'px-8 py-4 text-lg min-h-[48px] min-w-[48px]'
    },
    xl: {
      verySmall: 'px-6 py-4 text-base min-h-[52px] min-w-[52px]',
      small: 'px-8 py-4 text-lg min-h-[52px] min-w-[52px]',
      mobile: 'px-8 py-4 text-xl min-h-[52px] min-w-[52px]',
      default: 'px-10 py-5 text-xl min-h-[52px] min-w-[52px]'
    }
  };

  const sizes = buttonSizes[size];
  
  if (screenWidth <= BREAKPOINTS.verySmall) return sizes.verySmall;
  if (screenWidth <= BREAKPOINTS.small) return sizes.small;
  if (screenWidth <= BREAKPOINTS.mobile) return sizes.mobile;
  return sizes.default;
};

// Enhanced device and capability detection
export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') {
    return {
      isTouchDevice: false,
      hasHover: true,
      prefersReducedMotion: false,
      supportsWebP: false,
      devicePixelRatio: 1
    };
  }

  return {
    isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    hasHover: window.matchMedia('(hover: hover)').matches,
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    supportsWebP: document.createElement('canvas').toDataURL('image/webp').indexOf('webp') > -1,
    devicePixelRatio: window.devicePixelRatio || 1
  };
};

// Enhanced safe area style calculation
export const getSafeAreaStyle = () => {
  if (typeof window === 'undefined') return {};
  
  return {
    paddingTop: 'max(env(safe-area-inset-top), 1rem)',
    paddingRight: 'max(env(safe-area-inset-right), 1rem)',
    paddingBottom: 'max(env(safe-area-inset-bottom), 1rem)',
    paddingLeft: 'max(env(safe-area-inset-left), 1rem)',
  };
};

// Optimal image size recommendations
export const getOptimalImageSize = (
  screenWidth: number = window?.innerWidth || 1024,
  containerWidth?: number
) => {
  const actualWidth = containerWidth || screenWidth;
  const pixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  
  // Calculate optimal width considering pixel ratio
  const optimalWidth = actualWidth * pixelRatio;
  
  if (optimalWidth <= 320) return { width: 320, size: 'xs' };
  if (optimalWidth <= 640) return { width: 640, size: 'sm' };
  if (optimalWidth <= 768) return { width: 768, size: 'md' };
  if (optimalWidth <= 1024) return { width: 1024, size: 'lg' };
  if (optimalWidth <= 1280) return { width: 1280, size: 'xl' };
  if (optimalWidth <= 1920) return { width: 1920, size: '2xl' };
  
  return { width: 2560, size: '4k' };
};

// Performance optimization recommendations
export const getPerformanceRecommendations = (screenWidth: number = window?.innerWidth || 1024) => {
  const deviceType = getDeviceType(screenWidth);
  const capabilities = getDeviceCapabilities();
  
  return {
    shouldLazyLoad: deviceType.includes('phone') || capabilities.prefersReducedMotion,
    shouldReduceAnimations: capabilities.prefersReducedMotion || deviceType === 'phone-small',
    shouldUseWebP: capabilities.supportsWebP,
    maxImageQuality: deviceType.includes('phone') ? 75 : 85,
    shouldPreloadCriticalImages: !deviceType.includes('phone'),
    shouldUseSmallerVideos: deviceType.includes('phone'),
    recommendedFrameRate: deviceType.includes('phone') ? 30 : 60
  };
};
