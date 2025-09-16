import React from 'react';
import { useVerySmallDevice } from '@/hooks/use-responsive';

interface ResponsiveNavigationProps {
  children: React.ReactNode;
  className?: string;
}

const ResponsiveNavigation: React.FC<ResponsiveNavigationProps> = ({ children, className = '' }) => {
  const isVerySmall = useVerySmallDevice();

  // Apply additional classes for very small devices
  const responsiveClasses = isVerySmall 
    ? 'w-full px-2 py-1 text-xs' 
    : '';

  return (
    <div className={`${className} ${responsiveClasses}`}>
      {children}
    </div>
  );
};

export default ResponsiveNavigation;
