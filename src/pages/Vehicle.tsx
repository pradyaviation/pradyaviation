import { ArrowRight, Battery, Zap, Shield, Users, Gauge, Plane } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useResponsive } from '@/hooks/use-responsive';

gsap.registerPlugin(ScrollTrigger);

const Vehicle = () => {
  const navigate = useNavigate();
  const responsive = useResponsive();
  const heroContentRef = useRef<HTMLDivElement>(null);
  const specsContentRef = useRef<HTMLDivElement>(null);
  const techContentRef = useRef<HTMLDivElement>(null);
  const groundPortsContentRef = useRef<HTMLDivElement>(null);
  const vertiportsContentRef = useRef<HTMLDivElement>(null);
  const hubsContentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const vertiportsVideoRef = useRef<HTMLVideoElement>(null);
  const hubsVideoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVertiportsVideoLoaded, setIsVertiportsVideoLoaded] = useState(false);
  const [isHubsVideoLoaded, setIsHubsVideoLoaded] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Ground Ports section animation (fade-in with slide-up)
    if (groundPortsContentRef.current) {
      const elements = groundPortsContentRef.current.children;
      
      // Set initial state
      gsap.set(elements, {
        y: 50,
        opacity: 0
      });

      // Create scroll trigger animation
      ScrollTrigger.create({
        trigger: groundPortsContentRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out",
            delay: 0.2
          });
        }
      });
    }

    // Vertiports section animation (fade-in with slide-up)
    if (vertiportsContentRef.current) {
      const elements = vertiportsContentRef.current.children;
      
      // Set initial state
      gsap.set(elements, {
        y: 50,
        opacity: 0
      });

      // Create scroll trigger animation
      ScrollTrigger.create({
        trigger: vertiportsContentRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out",
            delay: 0.2
          });
        }
      });
    }

    // Hubs section animation (fade-in with slide-up)
    if (hubsContentRef.current) {
      const elements = hubsContentRef.current.children;
      
      // Set initial state
      gsap.set(elements, {
        y: 50,
        opacity: 0
      });

      // Create scroll trigger animation
      ScrollTrigger.create({
        trigger: hubsContentRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out",
            delay: 0.2
          });
        }
      });
    }

    // Handle video loading and playback
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        video.play().catch(() => {
          console.log('Video autoplay prevented');
        });
      };

      const handleLoadedData = () => {
        setIsVideoLoaded(true);
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleLoadedData);

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }

    // Handle Vertiports video loading and playback
    if (vertiportsVideoRef.current) {
      const vertiportsVideo = vertiportsVideoRef.current;
      
      const handleVertiportsCanPlay = () => {
        setIsVertiportsVideoLoaded(true);
        vertiportsVideo.play().catch(() => {
          console.log('Vertiports video autoplay prevented');
        });
      };

      const handleVertiportsLoadedData = () => {
        setIsVertiportsVideoLoaded(true);
      };

      vertiportsVideo.addEventListener('canplay', handleVertiportsCanPlay);
      vertiportsVideo.addEventListener('loadeddata', handleVertiportsLoadedData);

      return () => {
        vertiportsVideo.removeEventListener('canplay', handleVertiportsCanPlay);
        vertiportsVideo.removeEventListener('loadeddata', handleVertiportsLoadedData);
      };
    }

    // Handle Hubs video loading and playback
    if (hubsVideoRef.current) {
      const hubsVideo = hubsVideoRef.current;
      
      const handleHubsCanPlay = () => {
        setIsHubsVideoLoaded(true);
        hubsVideo.play().catch(() => {
          console.log('Hubs video autoplay prevented');
        });
      };

      const handleHubsLoadedData = () => {
        setIsHubsVideoLoaded(true);
      };

      hubsVideo.addEventListener('canplay', handleHubsCanPlay);
      hubsVideo.addEventListener('loadeddata', handleHubsLoadedData);

      return () => {
        hubsVideo.removeEventListener('canplay', handleHubsCanPlay);
        hubsVideo.removeEventListener('loadeddata', handleHubsLoadedData);
      };
    }
    
    // Hero section animation (left to right)
    if (heroContentRef.current) {
      const elements = heroContentRef.current.children;
      
      // Set initial state
      gsap.set(elements, {
        x: -100,
        opacity: 0
      });

      // Animate elements from left to right with stagger
      gsap.to(elements, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
        delay: 0.5
      });
    }

    // Specifications section animation on scroll
    if (specsContentRef.current) {
      const specCards = specsContentRef.current.querySelectorAll('.spec-card');
      
      gsap.set(specCards, {
        x: -50,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: specsContentRef.current,
        start: 'top 70%',
        onEnter: () => {
          gsap.to(specCards, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
          });
        }
      });
    }

    // Technology section animation on scroll
    if (techContentRef.current) {
      const techCards = techContentRef.current.querySelectorAll('.tech-card');
      
      gsap.set(techCards, {
        x: 100,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: techContentRef.current,
        start: 'top 70%',
        onEnter: () => {
          gsap.to(techCards, {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const vehicleSpecs = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Passenger Capacity",
      value: "4-6 Passengers",
      description: "Spacious cabin designed for comfort during urban flights"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Maximum Speed",
      value: " 250 km/h to 300 km/h",
      description: "High-speed aerial transportation for efficient city travel"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Range",
      value: "150 - 200 km",
      description: "Extended range covering most metropolitan areas"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Charging Time",
      value: "45 minutes",
      description: "Fast charging for minimal downtime between flights"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety Rating",
      value: "Level 5",
      description: "Highest safety standards with redundant systems"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Propulsion",
      value: "Electric Rotors",
      description: "Distributed electric propulsion for enhanced safety"
    }
  ];

  const technologyFeatures = [
    {
      title: "Autonomous Flight Systems",
      description: "Advanced AI-powered navigation and collision avoidance systems ensure safe, reliable autonomous operation in urban environments.",
      icon: "🤖"
    },
    {
      title: "Electric Propulsion",
      description: "Zero-emission electric motors provide clean, quiet operation with minimal environmental impact and reduced noise pollution.",
      icon: "⚡"
    },
    {
      title: "Vertical Takeoff & Landing",
      description: "eVTOL capability eliminates the need for runways, enabling operations from compact urban vertiports and landing pads.",
      icon: "🛸"
    },
    {
      title: "Advanced Materials",
      description: "Lightweight carbon fiber construction and aerospace-grade materials ensure optimal performance and durability.",
      icon: "🏗️"
    },
    {
      title: "Smart Battery Systems",
      description: "Intelligent battery management with thermal control and safety monitoring for extended operational life and reliability.",
      icon: "🔋"
    },
    {
      title: "Redundant Safety Systems",
      description: "Multiple backup systems including emergency parachutes and redundant power sources ensure passenger safety.",
      icon: "🛡️"
    }
  ];

  return (
    <div className={`relative overflow-hidden bg-white ${
      responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall 
        ? 'm-0 p-0' // Remove all margins and padding on mobile
        : ''
    }`}>
      {/* Ground Ports Section - Professional Background Video */}
      <section 
        className={`relative overflow-hidden bg-white ${
          responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall 
            ? 'h-screen' // Full viewport height on mobile to prevent gaps
            : 'min-h-screen' // Minimum height on desktop
        }`}
        style={{
          // Fallback background image for mobile if video doesn't load
          backgroundImage: (responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall) && !isVideoLoaded 
            ? 'url(/futuristic-room.jpg)' 
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Background Video Container for Portrait Optimization */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay={!responsive.isVerySmall && !responsive.isExtraSmall} // Disable autoplay on very small devices for performance
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover mobile-video"
            style={{
              // Force video to fill container on mobile
              ...((responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall) ? {
                position: 'absolute' as const,
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                objectFit: 'cover' as const,
                objectPosition: 'center center'
              } : {}),
              // Ensure video is visible
              zIndex: 0,
              backgroundColor: 'transparent'
            }}
            onLoadedData={() => {
              setIsVideoLoaded(true);
              console.log('Ground Ports video loaded on mobile:', responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall);
            }}
            onError={(e) => console.error('Ground Ports video error:', e)}
          >
            {/* Update this source path with your actual video file */}
            <source src="/videos/ground-ports-airvath.mp4" type="video/mp4" />
            {/* Fallback for unsupported browsers */}
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Overlay - Positioned lower and more to the left */}
        <div className={`relative z-20 h-full flex items-end justify-start ${
          responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall 
            ? 'pb-16 pt-20' // More top padding on mobile, bottom padding for content spacing
            : 'pb-24 pt-40' // More top padding on desktop, bottom padding for content spacing
        }`}>
          <div 
            ref={groundPortsContentRef} 
            className={`${
              responsive.isVerySmall ? 'pl-4 pr-4 max-w-xs' :
              responsive.isExtraSmall ? 'pl-6 pr-4 max-w-sm' :
              responsive.isSmall ? 'pl-8 pr-6 max-w-md' :
              'pl-4 md:pl-8 lg:pl-11.5 pr-8 max-w-3xl'
            }`}
          >
            {/* Main Title without glow effect */}
            <h2 
              className={`font-bold text-white leading-tight uppercase mb-8 tracking-wide ${
                responsive.isVerySmall ? 'text-2xl' : 
                responsive.isExtraSmall ? 'text-3xl' : 
                'text-clamp-4xl lg:text-clamp-5xl'
              }`}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                letterSpacing: '0.02em',
                fontWeight: '900',
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                lineHeight: '1.1',
              }}
            >
              Ground Ports: Your Boarding Gate to the Sky
            </h2>
            
            {/* Description Text */}
            <p 
              className={`text-white/90 font-medium leading-relaxed mb-12 ${
                responsive.isVerySmall ? 'text-sm max-w-xs' :
                responsive.isExtraSmall ? 'text-base max-w-sm' :
                responsive.isSmall ? 'text-lg max-w-md' :
                'text-clamp-lg max-w-2xl'
              }`}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                letterSpacing: '0.01em',
                fontWeight: '500',
                textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                lineHeight: '1.6',
              }}
            >
              Located at ground level, these ports act like mini-airports for air taxis, enabling easy check-ins and safe boarding for the future of urban mobility.
            </p>

            {/* CTA Button - Matching other pages style */}
            <button 
              onClick={() => {
                const specsSection = document.getElementById('specifications-section');
                if (specsSection) {
                  specsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`group relative inline-flex items-center bg-transparent border-2 border-zinc-300 text-black font-semibold tracking-wide transition-all duration-500 hover:border-black uppercase overflow-hidden ${
                responsive.isVerySmall ? 'px-6 py-3 text-xs' :
                responsive.isExtraSmall ? 'px-8 py-4 text-sm' :
                'px-10 py-5 text-sm'
              }`}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                letterSpacing: '0.15em',
                fontWeight: '600',
              }}
            >
              {/* Black hover animation background */}
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center">
                <span className="mr-3 group-hover:text-white transition-colors duration-500">Explore Infrastructure</span>
                <ArrowRight 
                  size={responsive.isVerySmall ? 14 : responsive.isExtraSmall ? 16 : 18} 
                  className="group-hover:translate-x-2 group-hover:text-white transition-all duration-500" 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Scroll Indicator - Moved closer to bottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-zinc-700 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertiports Section */}
      <section 
        className={`relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 ${
          responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall 
            ? 'h-screen' // Full viewport height on mobile to prevent gaps
            : 'h-screen' // Full height on all devices
        }`}
        style={{
          backgroundImage: !isVertiportsVideoLoaded ? 'url(/futuristic-room.jpg)' : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Background Video Container for Portrait Optimization */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={vertiportsVideoRef}
            className="absolute inset-0 w-full h-full object-cover mobile-video z-0"
            style={{
              // Force video to fill container on mobile
              ...((responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall) ? {
                position: 'absolute' as const,
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                objectFit: 'cover' as const,
                objectPosition: 'center center'
              } : {}),
              // Ensure video is visible
              zIndex: 0,
              backgroundColor: 'transparent'
            }}
            muted
            loop
            playsInline
            preload="metadata"
            onError={(e) => {
              console.error('Vertiports video error:', e);
              console.error('Video element:', vertiportsVideoRef.current);
              console.error('Video src:', vertiportsVideoRef.current?.src);
            }}
            onLoadedData={() => {
              console.log('Vertiports video loaded successfully on mobile:', responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall);
              setIsVertiportsVideoLoaded(true);
              if (vertiportsVideoRef.current) {
                vertiportsVideoRef.current.play().catch(err => {
                  console.error('Vertiports video play error:', err);
                });
              }
            }}
            onCanPlay={() => {
              console.log('Vertiports video can play');
              setIsVertiportsVideoLoaded(true);
              if (vertiportsVideoRef.current) {
                vertiportsVideoRef.current.play().catch(err => {
                  console.error('Vertiports video play error:', err);
                });
              }
            }}
          >
            <source src="/videos/vertiports-airvath-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Content Overlay - Aligned to the right with mobile-specific spacing */}
        <div className={`relative z-20 h-full flex items-center justify-end ${
          responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall 
            ? 'pt-4' // Minimal padding for mobile to eliminate top gap
            : 'pt-24' // Desktop padding
        }`}>
          <div 
            ref={vertiportsContentRef}
            className={`text-right ${
              responsive.isVerySmall ? 'pr-3 pl-4 max-w-xs' :
              responsive.isExtraSmall ? 'pr-4 pl-4 max-w-sm' :
              responsive.isSmall ? 'pr-6 pl-6 max-w-md' :
              'pr-8 md:pr-12 lg:pr-16 pl-8 max-w-3xl'
            }`}
          >
            {/* Main Title with Premium Glow Effect */}
            <h2 
              className={`font-bold text-white leading-tight uppercase mb-8 tracking-wide ${
                responsive.isVerySmall ? 'text-2xl' : 
                responsive.isExtraSmall ? 'text-3xl' : 
                'text-clamp-4xl lg:text-clamp-5xl'
              }`}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                letterSpacing: '0.02em',
                fontWeight: '900',
                textShadow: '0 4px 20px rgba(0,212,255,0.3), 0 2px 10px rgba(0,0,0,0.8)',
                lineHeight: '1.1',
              }}
            >
              Vertiports: Taking Off from the Skyline
            </h2>
            
            {/* Description Text */}
            <p 
              className={`text-white/90 font-medium leading-relaxed mb-12 ${
                responsive.isVerySmall ? 'text-sm max-w-xs' :
                responsive.isExtraSmall ? 'text-base max-w-sm' :
                responsive.isSmall ? 'text-lg max-w-md' :
                'text-clamp-lg max-w-2xl'
              }`}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                letterSpacing: '0.01em',
                fontWeight: '500',
                textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                lineHeight: '1.6',
              }}
            >
              Positioned on rooftops and high-rises, vertiports connect city centers directly to the skies — reducing ground travel and unlocking vertical mobility.
            </p>

            {/* CTA Button - Matching other pages style */}
            <button 
              onClick={() => {
                const specsSection = document.getElementById('specifications-section');
                if (specsSection) {
                  specsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`group relative inline-flex items-center bg-transparent border-2 border-zinc-300 text-black font-semibold tracking-wide transition-all duration-500 hover:border-black uppercase overflow-hidden ${
                responsive.isVerySmall ? 'px-6 py-3 text-xs' :
                responsive.isExtraSmall ? 'px-8 py-4 text-sm' :
                'px-10 py-5 text-sm'
              }`}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                letterSpacing: '0.15em',
                fontWeight: '600',
              }}
            >
              {/* Black hover animation background */}
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center">
                <span className="mr-3 group-hover:text-white transition-colors duration-500">City Infrastructure</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Hubs Section */}
      <section 
        className={`relative w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 ${
          responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall 
            ? 'h-screen' // Full viewport height on mobile to prevent gaps
            : 'h-screen' // Full height on all devices
        }`}
        style={{
          backgroundImage: !isHubsVideoLoaded ? 'url(/futuristic-room.jpg)' : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Background Video Container for Portrait Optimization */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            ref={hubsVideoRef}
            className="absolute inset-0 w-full h-full object-cover mobile-video z-0"
            style={{
              // Force video to fill container on mobile
              ...((responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall) ? {
                position: 'absolute' as const,
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                objectFit: 'cover' as const,
                objectPosition: 'center center'
              } : {}),
              // Ensure video is visible
              zIndex: 0,
              backgroundColor: 'transparent'
            }}
            muted
            loop
            playsInline
            preload="metadata"
            onError={(e) => {
              console.error('Hubs video error:', e);
              console.error('Video element:', hubsVideoRef.current);
              console.error('Video src:', hubsVideoRef.current?.src);
            }}
            onLoadedData={() => {
              console.log('Hubs video loaded successfully on mobile:', responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall);
              setIsHubsVideoLoaded(true);
              if (hubsVideoRef.current) {
                hubsVideoRef.current.play().catch(err => {
                  console.error('Hubs video play error:', err);
                });
              }
            }}
            onCanPlay={() => {
              console.log('Hubs video can play');
              setIsHubsVideoLoaded(true);
              if (hubsVideoRef.current) {
                hubsVideoRef.current.play().catch(err => {
                  console.error('Hubs video play error:', err);
                });
              }
            }}
          >
            <source src="/videos/hubs-airavath.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Content Overlay - Positioned lower and more to the left */}
        <div className={`relative z-20 h-full flex items-end justify-start ${
          responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall 
            ? 'pb-16 pt-20' // More top padding on mobile, bottom padding for content spacing
            : 'pb-24 pt-40' // More top padding on desktop, bottom padding for content spacing
        }`}>
          <div 
            ref={hubsContentRef}
            className={`${
              responsive.isVerySmall ? 'pl-4 pr-4 max-w-xs' :
              responsive.isExtraSmall ? 'pl-6 pr-4 max-w-sm' :
              responsive.isSmall ? 'pl-8 pr-6 max-w-md' :
              'pl-4 md:pl-8 lg:pl-11.5 pr-8 max-w-3xl'
            }`}
          >
            {/* Main Title without glow effect */}
            <h2 
              className={`font-bold text-white leading-tight uppercase mb-8 tracking-wide ${
                responsive.isVerySmall ? 'text-2xl' : 
                responsive.isExtraSmall ? 'text-3xl' : 
                'text-clamp-4xl lg:text-clamp-5xl'
              }`}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                letterSpacing: '0.02em',
                fontWeight: '900',
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                lineHeight: '1.1',
              }}
            >
              Hubs: Connecting Cities to the Skies
            </h2>
            
            {/* Description Text */}
            <p 
              className={`text-white/90 font-medium leading-relaxed mb-12 ${
                responsive.isVerySmall ? 'text-sm max-w-xs' :
                responsive.isExtraSmall ? 'text-base max-w-sm' :
                responsive.isSmall ? 'text-lg max-w-md' :
                'text-clamp-lg max-w-2xl'
              }`}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                letterSpacing: '0.01em',
                fontWeight: '500',
                textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                lineHeight: '1.6',
              }}
            >
              Strategic transportation hubs that seamlessly integrate ground, air, and urban mobility — creating interconnected networks that transform how cities move.
            </p>

            {/* CTA Button - Matching other pages style */}
            <button 
              onClick={() => {
                const specsSection = document.getElementById('specifications-section');
                if (specsSection) {
                  specsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`group relative inline-flex items-center bg-transparent border-2 border-zinc-300 text-black font-semibold tracking-wide transition-all duration-500 hover:border-black uppercase overflow-hidden ${
                responsive.isVerySmall ? 'px-6 py-3 text-xs' :
                responsive.isExtraSmall ? 'px-8 py-4 text-sm' :
                'px-10 py-5 text-sm'
              }`}
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                letterSpacing: '0.15em',
                fontWeight: '600',
              }}
            >
              {/* Black hover animation background */}
              <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center">
                <span className="mr-3 group-hover:text-white transition-colors duration-500">Network Integration</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Vehicle Specifications Section - Falcon 9 Style */}
      <section 
        id="specifications-section"
        className={`relative w-full overflow-hidden ${
          responsive.isVerySmall || responsive.isExtraSmall || responsive.isSmall 
            ? 'h-screen' // Full viewport height on mobile to prevent gaps
            : 'h-screen' // Full height on all devices
        } flex items-center`}
        style={{
          backgroundImage: 'url(/vehicle-specs-bg-new.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'white'
        }}
      >
        {/* Minimal overlay to ensure image visibility */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/20 pointer-events-none z-10" />
        
        {/* Content wrapper with relative positioning */}
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            
            {/* Left Side - Specifications */}
            <div className="flex-1 w-full lg:w-1/2">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-2xl font-light text-black mb-2 uppercase tracking-widest">
                  AIRAVATH VTOL
                </h2>
                <h1 className="text-4xl font-semibold text-black uppercase tracking-widest">
                  OVERVIEW
                </h1>
              </div>

              {/* Specifications List */}
              <div ref={specsContentRef} className="space-y-4">
                {/* Height */}
                <div className="spec-card flex justify-between items-center py-3 border-b border-zinc-300">
                  <div>
                    <h3 className="text-black text-sm font-light uppercase tracking-wider">
                      PASSENGER CAPACITY
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-800 text-lg font-light">
                      4 - 6 Passengers
                    </span>
                  </div>
                </div>

                {/* Diameter */}
                <div className="spec-card flex justify-between items-center py-3 border-b border-zinc-300">
                  <div>
                    <h3 className="text-black text-sm font-light uppercase tracking-wider">
                      MAXIMUM SPEED
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-800 text-lg font-light">
                      250 km/h to 300 km/h
                    </span>
                  </div>
                </div>

                {/* Mass */}
                <div className="spec-card flex justify-between items-center py-3 border-b border-zinc-300">
                  <div>
                    <h3 className="text-black text-sm font-light uppercase tracking-wider">
                      RANGE
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-800 text-lg font-light">
                      150 - 200 km
                    </span>
                  </div>
                </div>

                {/* Payload Capacity */}
                <div className="spec-card flex justify-between items-center py-3 border-b border-zinc-300">
                  <div>
                    <h3 className="text-black text-sm font-light uppercase tracking-wider">
                      CHARGING TIME 
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-800 text-lg font-light">
                      30 minutes
                    </span>
                  </div>
                </div>

                {/* Range */}
                <div className="spec-card flex justify-between items-center py-3 border-b border-zinc-300">
                  <div>
                    <h3 className="text-black text-sm font-light uppercase tracking-wider">
                      SAFETY RATING
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-800 text-lg font-light">
                      LEVEL 5
                    </span>
                  </div>
                </div>

                {/* Maximum Speed */}
                <div className="spec-card flex justify-between items-center py-3 border-b border-zinc-300">
                  <div>
                    <h3 className="text-black text-sm font-light uppercase tracking-wider">
                      PROPULSION
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-800 text-lg font-light">
                      ELECTRIC ROTORS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Empty Space */}
            <div className="flex-1 w-full lg:w-1/2 flex justify-center items-center">
              <div className="relative w-full h-[600px] lg:h-[800px]">
                {/* Content area - currently empty */}
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Technology Features Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              A 360-DEGREE APPROACH
            </h2>
            <p className="text-lg text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '300' }}>
              Technological, Regulatory, and Societal Efforts
            </p>
          </div>

          {/* Technology Features Grid */}
          <div ref={techContentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {technologyFeatures.map((feature, index) => (
              <div 
                key={index}
                className="tech-card group"
              >
                {/* Icon with background box */}
                <div className="w-20 h-20 bg-gray-50 rounded-sm flex items-center justify-center mb-6">
                  <span className="text-4xl" style={{ filter: 'grayscale(100%)' }}>
                    {feature.icon}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-gray-900 font-semibold text-lg mb-3 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-blue-900 leading-relaxed text-base" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-100 to-transparent backdrop-blur-sm border border-blue-300 rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-black mb-4 uppercase tracking-wider">
                Experience the Future
              </h3>
              <p className="text-lg text-zinc-700 mb-8 max-w-2xl mx-auto">
                Ready to learn more about how our vehicles will transform urban transportation? Explore our services and mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {/* Services Button */}
                <button 
                  onClick={() => navigate('/air-taxi')}
                  className="group relative inline-flex items-center px-10 py-5 bg-blue-600 text-white font-semibold tracking-wide transition-all duration-500 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 uppercase overflow-hidden transform hover:scale-105"
                >
                  <span className="mr-3">View Services</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                </button>

                {/* Mission Button */}
                <button 
                  onClick={() => navigate('/mission')}
                  className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-zinc-300 text-black font-semibold tracking-wide transition-all duration-500 hover:border-black hover:bg-black hover:text-white uppercase overflow-hidden transform hover:scale-105"
                >
                  <span className="mr-3">Our Mission</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-white transition-all duration-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vehicle;
