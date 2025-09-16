import React from 'react';
import { useResponsive } from '@/hooks/use-responsive';
import { cn } from '@/lib/utils';
import ResponsiveContainer from './ResponsiveContainer';
import ResponsiveText from './ResponsiveText';
import ResponsiveButton from './ResponsiveButton';

interface ResponsiveHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  secondaryCtaText?: string;
  onSecondaryCtaClick?: () => void;
  overlay?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  contentPosition?: 'center' | 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  className?: string;
  children?: React.ReactNode;
}

/**
 * Enhanced responsive hero section for AIRAVATH
 * Handles background media, text positioning, and CTAs across all devices
 */
export const ResponsiveHero: React.FC<ResponsiveHeroProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo,
  ctaText,
  onCtaClick,
  secondaryCtaText,
  onSecondaryCtaClick,
  overlay = true,
  textAlign = 'center',
  contentPosition = 'center',
  className = '',
  children,
}) => {
  const responsive = useResponsive();

  const getContentPositionClasses = () => {
    const positionMap = {
      center: 'items-center justify-center text-center',
      'bottom-left': 'items-end justify-start text-left',
      'bottom-right': 'items-end justify-end text-right',
      'top-left': 'items-start justify-start text-left',
      'top-right': 'items-start justify-end text-right',
    };
    return positionMap[contentPosition];
  };

  const getBackgroundStyles = () => {
    const baseStyles: React.CSSProperties = {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };

    if (backgroundImage) {
      return {
        ...baseStyles,
        backgroundImage: `url('${backgroundImage}')`,
      };
    }

    return baseStyles;
  };

  const getPadding = () => {
    const paddingMap = {
      center: responsive.isVerySmall ? 'p-4' : responsive.isExtraSmall ? 'p-6' : responsive.isSmall ? 'p-8' : 'p-12',
      'bottom-left': responsive.isVerySmall ? 'pb-6 pl-4' : responsive.isExtraSmall ? 'pb-8 pl-6' : responsive.isSmall ? 'pb-12 pl-8' : 'pb-16 pl-12',
      'bottom-right': responsive.isVerySmall ? 'pb-6 pr-4' : responsive.isExtraSmall ? 'pb-8 pr-6' : responsive.isSmall ? 'pb-12 pr-8' : 'pb-16 pr-12',
      'top-left': responsive.isVerySmall ? 'pt-6 pl-4' : responsive.isExtraSmall ? 'pt-8 pl-6' : responsive.isSmall ? 'pt-12 pl-8' : 'pt-16 pl-12',
      'top-right': responsive.isVerySmall ? 'pt-6 pr-4' : responsive.isExtraSmall ? 'pt-8 pr-6' : responsive.isSmall ? 'pt-12 pr-8' : 'pt-16 pr-12',
    };
    return paddingMap[contentPosition];
  };

  const getMaxContentWidth = () => {
    if (contentPosition === 'center') return 'max-w-4xl';
    return responsive.isVerySmall ? 'max-w-xs' : responsive.isExtraSmall ? 'max-w-sm' : responsive.isSmall ? 'max-w-md' : 'max-w-lg';
  };

  const baseClasses = cn(
    'relative min-h-screen flex overflow-hidden',
    getContentPositionClasses(),
    getPadding(),
    className
  );

  return (
    <section 
      className={baseClasses}
      style={getBackgroundStyles()}
    >
      {/* Background Video */}
      {backgroundVideo && (
        <video
          autoPlay={!responsive.isVerySmall} // Disable autoplay on very small devices for performance
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          preload={responsive.isVerySmall ? 'none' : 'metadata'}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/50 -z-5 pointer-events-none" />
      )}

      {/* Content */}
      <div className={cn('relative z-10', getMaxContentWidth())}>
        {/* Custom children take precedence */}
        {children ? (
          children
        ) : (
          <div className="space-y-6">
            {/* Title */}
            <ResponsiveText
              variant="hero"
              align={textAlign}
              weight="black"
              clamp={true}
              className="text-white drop-shadow-lg"
            >
              {title}
            </ResponsiveText>

            {/* Subtitle */}
            {subtitle && (
              <ResponsiveText
                variant="subtitle"
                align={textAlign}
                weight="medium"
                clamp={true}
                className="text-white/90 drop-shadow-md"
              >
                {subtitle}
              </ResponsiveText>
            )}

            {/* Description */}
            {description && (
              <ResponsiveText
                variant="body"
                align={textAlign}
                clamp={true}
                maxLines={3}
                className="text-white/80 drop-shadow-sm"
              >
                {description}
              </ResponsiveText>
            )}

            {/* CTAs */}
            {(ctaText || secondaryCtaText) && (
              <div className={cn(
                'flex gap-4',
                {
                  'justify-center': textAlign === 'center',
                  'justify-start': textAlign === 'left',
                  'justify-end': textAlign === 'right',
                  'flex-col': responsive.isVerySmall || responsive.isExtraSmall,
                  'flex-row': !responsive.isVerySmall && !responsive.isExtraSmall,
                }
              )}>
                {ctaText && (
                  <ResponsiveButton
                    onClick={onCtaClick}
                    variant="ghost"
                    size={responsive.isVerySmall ? 'sm' : responsive.isExtraSmall ? 'md' : 'lg'}
                    fullWidth={responsive.isVerySmall || responsive.isExtraSmall}
                    className="shadow-lg"
                  >
                    {ctaText}
                  </ResponsiveButton>
                )}

                {secondaryCtaText && (
                  <ResponsiveButton
                    onClick={onSecondaryCtaClick}
                    variant="outline"
                    size={responsive.isVerySmall ? 'sm' : responsive.isExtraSmall ? 'md' : 'lg'}
                    fullWidth={responsive.isVerySmall || responsive.isExtraSmall}
                    className="shadow-lg"
                  >
                    {secondaryCtaText}
                  </ResponsiveButton>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResponsiveHero;
