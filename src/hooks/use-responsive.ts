import { useState, useEffect, useCallback } from 'react';

export interface ResponsiveState {
  isVerySmall: boolean;    // ≤ 320px (iPhone SE 1st gen)
  isExtraSmall: boolean;   // ≤ 374px (iPhone SE 2nd gen) 
  isSmall: boolean;        // ≤ 420px (small phones)
  isMobileXS: boolean;     // ≤ 640px (large phones)
  isMobile: boolean;       // ≤ 768px (tablets)
  isTablet: boolean;       // ≤ 1024px (large tablets)
  isDesktop: boolean;      // > 1024px (desktop)
  isLargeDesktop: boolean; // > 1440px (large screens)
  isUltraWide: boolean;    // > 1920px (ultra-wide)
  width: number;
  height: number;
  orientation: 'portrait' | 'landscape';
  touchDevice: boolean;
  devicePixelRatio: number;
  hasNotch: boolean;       // For devices with notches/dynamic islands
  isIOS: boolean;          // iOS device detection
  isAndroid: boolean;      // Android device detection
}

// Enhanced breakpoints with better coverage and device-specific targeting
export const RESPONSIVE_BREAKPOINTS = {
  verySmall: 320,     // iPhone SE 1st gen, very old phones
  extraSmall: 374,    // iPhone SE 2nd/3rd gen
  small: 420,         // iPhone 12 mini, small Android phones
  mobileXS: 640,      // Large phones, small tablets
  mobile: 768,        // Standard tablets, large phones landscape
  tablet: 1024,       // Large tablets, small laptops
  desktop: 1280,      // Desktop, large laptops
  largeDesktop: 1440, // Large desktop monitors
  ultraWide: 1920,    // Ultra-wide displays
  fourK: 2560,        // 4K displays
} as const;

export const useResponsive = (): ResponsiveState => {
  const [state, setState] = useState<ResponsiveState>({
    isVerySmall: false,
    isExtraSmall: false,
    isSmall: false,
    isMobileXS: false,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isLargeDesktop: false,
    isUltraWide: false,
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    orientation: 'landscape',
    touchDevice: false,
    devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
    hasNotch: false,
    isIOS: false,
    isAndroid: false,
  });

  const updateState = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    const orientation = width > height ? 'landscape' : 'portrait';
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const devicePixelRatio = window.devicePixelRatio || 1;
    
    // Enhanced device detection
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    
    // Notch detection (approximate based on common notch resolutions)
    const hasNotch = isIOS && (
      (width === 375 && height === 812) || // iPhone X, XS, 11 Pro
      (width === 414 && height === 896) || // iPhone XR, 11, XS Max, 11 Pro Max
      (width === 390 && height === 844) || // iPhone 12, 12 Pro, 13, 13 Pro
      (width === 428 && height === 926) || // iPhone 12 Pro Max, 13 Pro Max
      (width === 393 && height === 852) || // iPhone 14, 14 Pro
      (width === 430 && height === 932)    // iPhone 14 Pro Max, 15 Pro Max
    );

    setState({
      isVerySmall: width <= RESPONSIVE_BREAKPOINTS.verySmall,
      isExtraSmall: width <= RESPONSIVE_BREAKPOINTS.extraSmall,
      isSmall: width <= RESPONSIVE_BREAKPOINTS.small,
      isMobileXS: width <= RESPONSIVE_BREAKPOINTS.mobileXS,
      isMobile: width <= RESPONSIVE_BREAKPOINTS.mobile,
      isTablet: width <= RESPONSIVE_BREAKPOINTS.tablet,
      isDesktop: width > RESPONSIVE_BREAKPOINTS.tablet,
      isLargeDesktop: width > RESPONSIVE_BREAKPOINTS.largeDesktop,
      isUltraWide: width > RESPONSIVE_BREAKPOINTS.ultraWide,
      width,
      height,
      orientation,
      touchDevice,
      devicePixelRatio,
      hasNotch,
      isIOS,
      isAndroid,
    });
  }, []);

  useEffect(() => {
    // Initial check
    updateState();

    // Debounced resize handler for better performance
    let timeoutId: NodeJS.Timeout;
    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateState, 150);
    };

    // Listen for resize and orientation change events
    window.addEventListener('resize', debouncedUpdate, { passive: true });
    window.addEventListener('orientationchange', debouncedUpdate, { passive: true });
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', debouncedUpdate);
      window.removeEventListener('orientationchange', debouncedUpdate);
    };
  }, [updateState]);

  return state;
};

// Utility hook for checking specific breakpoints
export const useBreakpoint = (breakpoint: keyof ResponsiveState): boolean => {
  const responsive = useResponsive();
  return responsive[breakpoint] as boolean;
};

// Enhanced hook for very small devices with better performance
export const useVerySmallDevice = (): boolean => {
  const { isVerySmall } = useResponsive();
  return isVerySmall;
};

// Hook for mobile-first design decisions
export const useMobileFirst = () => {
  const responsive = useResponsive();
  
  return {
    isMobileOrSmaller: responsive.isMobile,
    isTabletOrSmaller: responsive.isTablet,
    isDesktopOrLarger: responsive.isDesktop,
    shouldShowMobileLayout: responsive.isMobile || responsive.touchDevice,
    shouldUseTouchTargets: responsive.touchDevice || responsive.isMobile,
    optimalImageSize: responsive.isVerySmall ? 'small' : 
                     responsive.isMobile ? 'medium' : 
                     responsive.isTablet ? 'large' : 'xlarge',
    gridColumns: responsive.isVerySmall ? 1 :
                responsive.isSmall ? 1 :
                responsive.isMobile ? 2 :
                responsive.isTablet ? 3 : 4,
  };
};

// Hook for container sizing
export const useContainerSize = () => {
  const responsive = useResponsive();
  
  const getContainerClasses = () => {
    if (responsive.isVerySmall) return 'px-2 max-w-none';
    if (responsive.isSmall) return 'px-3 max-w-none';
    if (responsive.isMobileXS) return 'px-4 max-w-2xl';
    if (responsive.isMobile) return 'px-6 max-w-4xl';
    if (responsive.isTablet) return 'px-8 max-w-6xl';
    return 'px-8 max-w-7xl';
  };

  const getPadding = () => {
    if (responsive.isVerySmall) return { x: 8, y: 8 };
    if (responsive.isSmall) return { x: 12, y: 12 };
    if (responsive.isMobile) return { x: 16, y: 16 };
    if (responsive.isTablet) return { x: 24, y: 24 };
    return { x: 32, y: 32 };
  };

  return {
    containerClasses: getContainerClasses(),
    padding: getPadding(),
    maxWidth: responsive.isVerySmall ? '100%' : 
             responsive.isSmall ? '100%' :
             responsive.isMobile ? '640px' :
             responsive.isTablet ? '1024px' : '1280px'
  };
};
