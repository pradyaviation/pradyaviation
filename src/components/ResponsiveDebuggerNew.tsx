import React, { useState } from 'react';
import { useResponsive } from '@/hooks/use-responsive';

/**
 * Enhanced ResponsiveDebugger - AIRAVATH Edition
 * Development tool to test and debug responsive behavior
 * Shows current breakpoint, screen dimensions, device information and testing tools
 */
export const ResponsiveDebugger: React.FC<{
  enabled?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}> = ({ enabled = process.env.NODE_ENV === 'development', position = 'bottom-right' }) => {
  const [isVisible, setIsVisible] = useState(enabled);
  const [isExpanded, setIsExpanded] = useState(false);
  const responsive = useResponsive();

  if (!enabled && !isVisible) return null;

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  const getCurrentBreakpoint = () => {
    if (responsive.isVerySmall) return 'xxs (≤320px)';
    if (responsive.isExtraSmall) return 'xs (≤374px)';
    if (responsive.isSmall) return 'sm (≤420px)';
    if (responsive.isMobileXS) return 'md (≤640px)';
    if (responsive.isMobile) return 'lg (≤768px)';
    if (responsive.isTablet) return 'xl (≤1024px)';
    if (responsive.isLargeDesktop) return '2xl (>1440px)';
    if (responsive.isUltraWide) return '4xl (>1920px)';
    return 'desktop (>1024px)';
  };

  const getDeviceInfo = () => {
    return {
      type: responsive.isVerySmall || responsive.isExtraSmall ? 'Phone (Small)' :
            responsive.isSmall ? 'Phone' :
            responsive.isMobileXS ? 'Phone (Large)' :
            responsive.isMobile ? 'Tablet (Small)' :
            responsive.isTablet ? 'Tablet' : 'Desktop',
      platform: responsive.isIOS ? 'iOS' : responsive.isAndroid ? 'Android' : 'Desktop',
      hasNotch: responsive.hasNotch ? 'Yes' : 'No',
      pixelRatio: responsive.devicePixelRatio.toFixed(1)
    };
  };

  const deviceInfo = getDeviceInfo();

  const testSizes = [
    { name: 'iPhone SE', width: 320, height: 568 },
    { name: 'iPhone 12 mini', width: 375, height: 667 },
    { name: 'iPhone 12', width: 390, height: 844 },
    { name: 'iPhone 12 Pro Max', width: 428, height: 926 },
    { name: 'iPad', width: 768, height: 1024 },
    { name: 'Desktop SM', width: 1024, height: 768 },
    { name: 'Desktop LG', width: 1440, height: 900 },
    { name: 'Ultra-wide', width: 1920, height: 1080 },
  ];

  const simulateDevice = (width: number, height: number) => {
    if (window.parent && window.parent !== window) {
      // If in iframe, try to resize parent
      try {
        window.parent.postMessage({ type: 'resize', width, height }, '*');
      } catch (e) {
        console.log('Cannot resize parent window');
      }
    } else {
      // Resize current window
      window.resizeTo(width, height);
    }
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-[9999] bg-black/95 text-white text-xs rounded-lg shadow-xl border border-gray-600 font-mono transition-all duration-300`}>
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-blue-400">AIRAVATH Debug</span>
          <div className="flex gap-1">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white transition-colors"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? '📋' : '📱'}
            </button>
            <button 
              onClick={() => setIsVisible(!isVisible)}
              className="text-gray-400 hover:text-white ml-1"
              title={isVisible ? 'Hide' : 'Show'}
            >
              {isVisible ? '−' : '+'}
            </button>
          </div>
        </div>
        
        {isVisible && (
          <div className="space-y-2 min-w-[200px]">
            {/* Basic Info */}
            <div className="space-y-1">
              <div>
                <span className="text-gray-400">Breakpoint:</span>
                <span className="ml-2 text-green-400 font-bold">{getCurrentBreakpoint()}</span>
              </div>
              
              <div>
                <span className="text-gray-400">Screen:</span>
                <span className="ml-2">{responsive.width}×{responsive.height}</span>
              </div>
              
              <div>
                <span className="text-gray-400">Device:</span>
                <span className="ml-2">{deviceInfo.type}</span>
              </div>

              {isExpanded && (
                <>
                  <div>
                    <span className="text-gray-400">Platform:</span>
                    <span className="ml-2">{deviceInfo.platform}</span>
                  </div>
                  
                  <div>
                    <span className="text-gray-400">Orientation:</span>
                    <span className="ml-2">{responsive.orientation}</span>
                  </div>
                  
                  <div>
                    <span className="text-gray-400">Touch:</span>
                    <span className="ml-2">{responsive.touchDevice ? 'Yes' : 'No'}</span>
                  </div>

                  <div>
                    <span className="text-gray-400">Notch:</span>
                    <span className="ml-2">{deviceInfo.hasNotch}</span>
                  </div>

                  <div>
                    <span className="text-gray-400">DPR:</span>
                    <span className="ml-2">{deviceInfo.pixelRatio}</span>
                  </div>
                </>
              )}
            </div>
            
            {/* Active Breakpoint Flags */}
            <div className="pt-2 border-t border-gray-700">
              <div className="text-gray-400 text-[10px]">Active flags:</div>
              <div className="flex flex-wrap gap-1 mt-1">
                {responsive.isVerySmall && <span className="bg-red-600 px-1 rounded text-[10px]">xxs</span>}
                {responsive.isExtraSmall && <span className="bg-orange-600 px-1 rounded text-[10px]">xs</span>}
                {responsive.isSmall && <span className="bg-yellow-600 px-1 rounded text-[10px]">sm</span>}
                {responsive.isMobileXS && <span className="bg-green-600 px-1 rounded text-[10px]">md</span>}
                {responsive.isMobile && <span className="bg-blue-600 px-1 rounded text-[10px]">lg</span>}
                {responsive.isTablet && <span className="bg-purple-600 px-1 rounded text-[10px]">xl</span>}
                {responsive.isDesktop && <span className="bg-pink-600 px-1 rounded text-[10px]">desktop</span>}
                {responsive.isLargeDesktop && <span className="bg-indigo-600 px-1 rounded text-[10px]">2xl</span>}
                {responsive.isUltraWide && <span className="bg-gray-600 px-1 rounded text-[10px]">4xl</span>}
              </div>
            </div>
            
            {/* Device Testing Tools */}
            {isExpanded && (
              <div className="pt-2 border-t border-gray-700">
                <div className="text-gray-400 text-[10px] mb-2">Test devices:</div>
                <div className="grid grid-cols-2 gap-1">
                  {testSizes.map((device) => (
                    <button 
                      key={device.name}
                      onClick={() => simulateDevice(device.width, device.height)}
                      className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-[10px] transition-colors"
                      title={`${device.width}×${device.height}`}
                    >
                      {device.name}
                    </button>
                  ))}
                </div>
                
                {/* Quick Actions */}
                <div className="mt-2 pt-2 border-t border-gray-700">
                  <div className="text-gray-400 text-[10px] mb-1">Quick actions:</div>
                  <div className="flex gap-1">
                    <button 
                      onClick={() => window.location.reload()}
                      className="bg-blue-700 hover:bg-blue-600 px-2 py-1 rounded text-[10px]"
                    >
                      Reload
                    </button>
                    <button 
                      onClick={() => console.log('Responsive State:', responsive)}
                      className="bg-green-700 hover:bg-green-600 px-2 py-1 rounded text-[10px]"
                    >
                      Log State
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveDebugger;
