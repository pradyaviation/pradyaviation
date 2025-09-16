import React, { useState } from 'react';
import { useResponsive } from '@/hooks/use-responsive';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  priority?: boolean;
  sizes?: string;
  aspectRatio?: 'square' | '16/9' | '4/3' | '3/2' | 'auto';
  placeholder?: string; // Base64 or low-res image
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
}

/**
 * Enhanced responsive image component for AIRAVATH
 * Handles responsive loading, aspect ratios, and optimal sizing across devices
 */
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  objectFit = 'cover',
  priority = false,
  sizes,
  aspectRatio = 'auto',
  placeholder,
  onLoad,
  onError,
  loading,
}) => {
  const responsive = useResponsive();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getAspectRatioClass = () => {
    const ratioMap = {
      square: 'aspect-square',
      '16/9': 'aspect-video',
      '4/3': 'aspect-[4/3]',
      '3/2': 'aspect-[3/2]',
      auto: '',
    };
    return ratioMap[aspectRatio];
  };

  const getOptimalSizes = () => {
    if (sizes) return sizes;

    // Generate responsive sizes based on typical layout
    if (responsive.isVerySmall || responsive.isExtraSmall) {
      return '100vw';
    } else if (responsive.isSmall) {
      return '100vw';
    } else if (responsive.isMobile) {
      return '(max-width: 768px) 100vw, 50vw';
    } else if (responsive.isTablet) {
      return '(max-width: 1024px) 50vw, 33vw';
    } else {
      return '(max-width: 1280px) 33vw, 25vw';
    }
  };

  const getImageSrc = () => {
    // For very small devices, we could serve smaller images
    // This would typically be handled by a CDN or image service
    if (responsive.isVerySmall && responsive.devicePixelRatio <= 1) {
      // Serve smaller images for low-DPI small devices to save bandwidth
      return src.replace(/\.(jpg|jpeg|png|webp)$/, '_small.$1');
    }
    return src;
  };

  const getLoadingStrategy = () => {
    if (loading) return loading;
    return priority ? 'eager' : 'lazy';
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const baseClasses = cn(
    'w-full h-auto transition-all duration-300',
    `object-${objectFit}`,
    getAspectRatioClass(),
    {
      'opacity-0': !isLoaded && !hasError,
      'opacity-100': isLoaded || hasError,
      'filter blur-sm': !isLoaded && placeholder,
    },
    className
  );

  // Error fallback
  if (hasError) {
    return (
      <div className={cn(
        'bg-gray-800 flex items-center justify-center text-gray-400',
        getAspectRatioClass() || 'min-h-[200px]',
        className
      )}>
        <div className="text-center p-4">
          <div className="text-sm">Image not available</div>
          <div className="text-xs mt-1 opacity-60">{alt}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', aspectRatio !== 'auto' && getAspectRatioClass())}>
      {/* Placeholder while loading */}
      {placeholder && !isLoaded && (
        <img
          src={placeholder}
          alt=""
          className={cn(
            'absolute inset-0 w-full h-full object-cover filter blur-sm scale-105',
            getAspectRatioClass()
          )}
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      <img
        src={getImageSrc()}
        alt={alt}
        className={baseClasses}
        sizes={getOptimalSizes()}
        loading={getLoadingStrategy()}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
        // Optimize for performance on mobile
        {...(responsive.isMobile && {
          fetchPriority: priority ? 'high' : 'low',
        })}
      />

      {/* Loading indicator for slow connections */}
      {!isLoaded && !hasError && !placeholder && (
        <div className={cn(
          'absolute inset-0 bg-gray-800 flex items-center justify-center',
          getAspectRatioClass() || 'min-h-[200px]'
        )}>
          <div className="animate-pulse">
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveImage;
