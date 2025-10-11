
import { useRef, useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, Calendar, MapPin, Plane, Building, Globe, Mail, Phone, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import UpcomingLaunchesSection from '@/components/UpcomingLaunchesSection';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const logoSectionRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const secondContentRef = useRef<HTMLDivElement>(null);
  const featuresContentRef = useRef<HTMLDivElement>(null);
  const futureVisionContentRef = useRef<HTMLDivElement>(null);
  
  // About page refs
  const aboutHeaderRef = useRef<HTMLDivElement>(null);
  const believeRef = useRef<HTMLDivElement>(null);
  
  // Mission page refs
  const missionContentRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  
  // Objectives page refs
  const objectivesRef = useRef<HTMLDivElement>(null);
  
  // Contact page refs
  const contactHeaderRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Track mobile breakpoint so we can avoid rendering large/heavy sections on small screens
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Logo section animation
    if (logoSectionRef.current) {
      const logoImg = logoSectionRef.current.querySelector('img');
      
      gsap.set(logoImg, {
        scale: 0.8,
        opacity: 0
      });

      gsap.to(logoImg, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5
      });
    }

    // Hero section animation (left to right)
    if (heroContentRef.current) {
      const elements = heroContentRef.current.children;
      
      gsap.set(elements, {
        x: -100,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: heroContentRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(elements, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out"
          });
        }
      });
    }

    // Second section animation (right to left)
    if (secondContentRef.current) {
      const elements = secondContentRef.current.children;
      
      gsap.set(elements, {
        x: 100,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: secondContentRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(elements, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out"
          });
        }
      });
    }

    // Features section animation (left to right)
    if (featuresContentRef.current) {
      const elements = featuresContentRef.current.children;
      
      gsap.set(elements, {
        x: -100,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: featuresContentRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(elements, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out"
          });
        }
      });
    }

    // Future Vision section animation (right to left)
    if (futureVisionContentRef.current) {
      const elements = futureVisionContentRef.current.children;
      
      gsap.set(elements, {
        x: 100,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: futureVisionContentRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(elements, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out"
          });
        }
      });
    }

    // About header animation (left to right)
    if (aboutHeaderRef.current) {
      const elements = aboutHeaderRef.current.children;
      
      gsap.set(elements, {
        x: -100,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: aboutHeaderRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(elements, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out"
          });
        }
      });
    }

    // What We Believe section animation
    if (believeRef.current) {
      const believeTitle = believeRef.current.querySelector('.believe-title');
      const believeLine = believeRef.current.querySelector('.believe-line');
      const believeCards = believeRef.current.querySelectorAll('.believe-card');

      gsap.set([believeTitle, believeLine, ...believeCards], {
        y: 30,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: believeRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.to(believeTitle, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          });

          gsap.to(believeLine, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.out"
          });

          gsap.to(believeCards, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            delay: 0.4,
            ease: "power2.out"
          });
        }
      });
    }

    // Mission section animation
    if (missionContentRef.current) {
      const missionTitle = missionContentRef.current.querySelector('.mission-title');
      const missionLine = missionContentRef.current.querySelector('.mission-line');
      const missionHeading = missionContentRef.current.querySelector('.mission-heading');
      const otherElements = Array.from(missionContentRef.current.children).filter(
        child => !child.classList.contains('mission-title') && 
                !child.classList.contains('mission-line') && 
                !child.classList.contains('mission-heading')
      );
      
      // Set initial state for all elements
      gsap.set([missionTitle, missionLine, missionHeading, ...otherElements], {
        x: -100,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: missionContentRef.current,
        start: 'top 80%',
        onEnter: () => {
          // Animate title first
          gsap.to(missionTitle, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
          });

          // Then animate line
          gsap.to(missionLine, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out"
          });

          // Then animate heading and other elements
          gsap.to([missionHeading, ...otherElements], {
            x: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.3,
            delay: 0.4,
            ease: "power2.out"
          });
        }
      });
    }

    // Comparison section animation
    if (comparisonRef.current) {
      const beforeBox = comparisonRef.current.querySelector('.before-box');
      const afterBox = comparisonRef.current.querySelector('.after-box');
      
      gsap.set([beforeBox, afterBox], {
        y: 60,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: comparisonRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to([beforeBox, afterBox], {
            y: 0,
            opacity: 1,
            duration: 1.0,
            stagger: 0.3,
            ease: "power2.out"
          });
        }
      });
    }

    // Objectives section animation
    if (objectivesRef.current) {
      const timelineItems = objectivesRef.current.querySelectorAll('.timeline-item');
      
      gsap.fromTo('.timeline-line', {
        scaleY: 0,
      }, {
        scaleY: 1,
        duration: 1.5,
        ease: 'power2.out',
        transformOrigin: 'top',
        scrollTrigger: {
          trigger: objectivesRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        }
      });

      timelineItems.forEach((item, index) => {
        gsap.fromTo(item.querySelector('.timeline-dot'), {
          scale: 0,
        }, {
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });

        // Mobile animation
        const mobileContent = item.querySelector('.block.md\\:hidden .timeline-content');
        if (mobileContent) {
          gsap.fromTo(mobileContent, {
            x: 30,
            opacity: 0,
          }, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          });
        }

        // Desktop animation
        const desktopContent = item.querySelector('.hidden.md\\:flex .timeline-content');
        if (desktopContent) {
          const isEven = index % 2 === 0;
          
          gsap.fromTo(desktopContent, {
            x: isEven ? -50 : 50,
            opacity: 0,
          }, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          });
        }
      });
    }

    // Contact header animation
    if (contactHeaderRef.current) {
      const elements = contactHeaderRef.current.children;
      
      gsap.set(elements, {
        x: -100,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: contactHeaderRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(elements, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out"
          });
        }
      });
    }

    // Contact form animation
    ScrollTrigger.create({
      trigger: contactFormRef.current,
      start: 'top 70%',
      onEnter: () => {
        gsap.from('.contact-item', {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your interest in AIRAVATH. We'll be in touch soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  // Update isMobile when viewport changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 639px)');
    const onChange = (ev: MediaQueryListEvent | MediaQueryList) => setIsMobile(ev.matches);
    // initialize
    onChange(mq);
    // listen for changes
    if (mq.addEventListener) mq.addEventListener('change', onChange as any);
    else mq.addListener(onChange as any);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange as any);
      else mq.removeListener(onChange as any);
    };
  }, []);

  // Loading animation removed per request; page now renders immediately

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heroContentIn {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .mobile-portrait-video {
            transform: rotate(0deg) !important;
            object-fit: cover !important;
            width: 100vw !important;
            height: 100vh !important;
            min-width: 100vw !important;
            min-height: 100vh !important;
          }

          .mobile-portrait-section {
            width: 100vw !important;
            height: 100vh !important;
            overflow: hidden !important;
          }

          /* Slight left shift for hero background video on mobile */
          .hero-video-shift {
            object-position: 42% center !important; /* move focal point a bit left ( < 50% ) */
          }
        }

        /* Mobile-specific adjustments for the ABOUT section to expand the background upward
           and move the text content upward for better positioning. */
        @media (max-width: 639px) {
          /* Pull the background image up on mobile so the wireframe sits higher
             and removes the empty gap between the hero CTA and the image. */
          #about {
            background-position: 50% 4% !important; /* bring image focal point even higher */
            background-size: 150% !important;
            min-height: 100vh !important; /* reduce extra vertical space */
            background-repeat: no-repeat !important;
            padding-bottom: 0 !important; /* remove bottom padding */
          }

          /* Adjust header location to sit higher on mobile */
          #about .about-header {
            top: 35% !important; /* moved up from 48% to 35% */
            left: 4% !important;
            transform: translateY(-4%) !important;
            max-width: calc(100% - 3rem) !important;
            padding-right: 0.5rem !important;
          }

          /* Ensure CTAs are stacked, full width, and centered under the text on mobile */
          #about .hero-cta-container {
            margin-left: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 0.5rem !important;
            width: 100% !important;
            align-items: center !important;
          }

          #about .hero-cta-button {
            width: 100% !important;
            justify-content: center !important;
            padding-top: 0.625rem !important;
            padding-bottom: 0.625rem !important;
          }

          /* Reduce the size of the content section hero heading on mobile */
          #content h2 {
            font-size: clamp(1.2rem, 6.5vw, 1.6rem) !important;
            line-height: 1.04 !important;
          }

          /* Improve text sizing/line-height for better readability on narrow screens */
          #about h1 {
            font-size: clamp(1.1rem, 6.2vw, 2.4rem) !important;
            line-height: 1.05 !important;
            text-align: left !important;
          }

          #about p {
            font-size: clamp(0.72rem, 2.6vw, 0.98rem) !important;
            line-height: 1.38 !important;
            text-align: left !important;
          }
        }

        /* Extra tuning for very small screens to avoid the wireframe being cropped at the very top */
        @media (max-width: 480px) {
          /* Very small screens: pull image up and position content higher */
          #about {
            background-position: 50% 6% !important; /* bring image focal point higher on very small screens */
            background-size: 160% !important;
            min-height: 110vh !important;
          }

          #about .about-header {
            top: 40% !important; /* moved up from 52% to 40% */
            left: 4% !important;
            transform: translateY(-6%) !important;
          }

          #about h1 {
            font-size: clamp(1.2rem, 7.2vw, 2.2rem) !important;
          }
        }

        /* Mobile-specific adjustments for the What We Believe section */
        @media (max-width: 639px) {
          #beliefs {
            padding-top: 0 !important; /* remove top padding completely */
            padding-bottom: 1rem !important; /* reduce bottom padding */
          }
          
          #beliefs .min-h-screen {
            min-height: 80vh !important; /* reduce minimum height */
            padding-top: 0 !important; /* remove inner top padding */
            padding-bottom: 1rem !important;
          }
          
          #beliefs .text-center {
            margin-bottom: 3rem !important; /* reduce margin below title */
          }
          
          #beliefs .believe-card {
            margin-bottom: 1.5rem !important; /* add space between cards on mobile */
          }
        }

        /* Apply the condensed display font to large headings */
        #content h2,
        #about h1,
        .mission-title {
          /* Use project D-DIN when available; fall back to Inter/system fonts */
          font-family: 'D-DIN', Inter, system-ui, -apple-system, sans-serif !important;
          letter-spacing: 0.02em !important;
          line-height: 1.02 !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
        }
      ` }} />

    <div className="relative overflow-hidden pt-1">
      {/* Cinematic Hero Section - Air Taxi Background */}
      <section 
        className="relative min-h-screen h-screen md:min-h-screen flex items-end justify-start overflow-hidden bg-black mobile-portrait-section"
        role="img"
        aria-label="Futuristic medical air taxi aircraft"
      >
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full md:object-cover mobile-portrait-video hero-video-shift"
          style={{
            objectFit: 'cover',
            objectPosition: '50% center', /* default for desktop; mobile overridden by class */
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            minWidth: '100vw'
          }}
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="./videos/home-page-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-black/30 pointer-events-none"></div>
        
        {/* Hero Two-Line Uppercase Text - Top Center on Mobile, Bottom-Left on Desktop */}
        <div ref={heroContentRef} className="relative z-10 pb-1 pl-1 xxs:pb-2 xxs:pl-2 xs:pb-4 xs:pl-4 sm:pb-6 sm:pl-8 lg:pb-12 lg:pl-16 max-w-full xxs:max-w-xs xs:max-w-sm sm:max-w-3xl flex flex-col items-center sm:items-start justify-start pt-20 sm:justify-end sm:pt-0 min-h-screen sm:min-h-0" style={{ paddingBottom: 'clamp(0.5rem, 1.5vw, 2rem)', paddingLeft: 'clamp(0.25rem, 3vw, 1.5rem)' }}>
          
          {/* AIRAVATH Logo - Only visible on mobile screens */}
          <div className="block sm:hidden mb-12 mt-8 flex flex-col justify-start items-start -ml-2 pl-0">
            <img 
              src="/aira-vath-logo.png" 
              alt="AIRAVATH Logo" 
              className="w-60 h-auto object-contain mb-4"
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.6))'
              }}
            />
            {/* "Smarter safer faster" text directly under logo for mobile */}
            <p 
              className="text-white/80 font-medium leading-relaxed text-left ml-8"
              style={{
                fontSize: 'clamp(0.65rem, 1.3vw, 1rem)',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                letterSpacing: '0.1em',
                fontWeight: '500',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)',
              }}
            >
              SMARTER. SAFER. FASTER.
            </p>
          </div>

          <h1 
            className="hidden sm:block font-bold text-white leading-tight text-center sm:text-left uppercase mb-2 xxs:mb-3"
            style={{
              fontSize: 'clamp(1.5rem, 6vw, 2.2rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: '900',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            OPTIMIZING TRAVEL  <br /> SAVING YOUR TIME
          </h1>
          
          {/* Sub heading - Hidden on mobile (moved under logo for mobile) */}
          <p 
            className="hidden sm:block text-white/80 font-medium leading-relaxed text-center sm:text-left mb-4 xs:mb-6"
            style={{
              fontSize: 'clamp(0.65rem, 1.3vw, 1rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.1em',
              fontWeight: '500',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            SMARTER. SAFER. FASTER.
          </p>
          
          {/* Learn More Button - Hidden on mobile */}
          <button 
            onClick={() => navigate('/mission')}
            className="hidden sm:inline-flex group relative items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden rounded-none"
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">Our Vision</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center">
            <ChevronDown 
              size={24} 
              className="text-white/60 animate-bounce cursor-pointer hover:text-blue-400 transition-colors duration-300" 
              onClick={() => {
                document.getElementById('content')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            />
          </div>
        </div>
      </section>

      {/* Upcoming Launches Section - Only visible on mobile */}
      <UpcomingLaunchesSection />

      {/* Content Section - Adjusted to remove artificial gap below */}
      <section
        id="content"
        // Allow natural height on mobile (no forced 62vh) and remove negative margins that created jumpy stacking.
        className="relative min-h-[80vh] sm:min-h-screen flex items-end justify-end overflow-hidden bg-black mobile-portrait-section pt-0 sm:pt-0"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover mobile-portrait-video"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
            width: '100%',
            // Let the parent control height; ensure on very small devices it still fills nicely
            minHeight: '100%',
            minWidth: '100vw'
          }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source 
            src={window.innerWidth <= 500 ? '/videos/traffic-video-portrait.mp4' : '/videos/traffic-video.mp4'} 
            type="video/mp4" 
          />
        </video>
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 pointer-events-none"></div>
        {/* Mobile content (positioned at bottom) */}
        <div className="sm:hidden absolute inset-0 z-10 flex items-end text-left px-5">
          <div className="absolute left-5 right-5 bottom-16 max-w-sm mx-auto">
            <h2
              className="font-bold text-white leading-[1.2] uppercase tracking-wide"
              style={{
                fontSize: 'clamp(1.75rem, 9.5vw, 2.4rem)',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                textShadow: '0 3px 6px rgba(0,0,0,0.55)',
                lineHeight: '1.2',
              }}
            >
              ESCAPE CONGESTION<br />AND TRAFFIC
            </h2>
            {/* divider removed as requested */}
            <p
              className="text-white/80 font-medium leading-relaxed mb-6"
              style={{
                fontSize: 'clamp(0.75rem, 3.4vw, 0.95rem)',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                letterSpacing: '0.01em',
                textShadow: '0 2px 4px rgba(0,0,0,0.45)',
              }}
            >
              Our advanced VTOL air taxis let you bypass gridlock and reclaim your valuable time—reach key destinations across the city in just minutes with premium safety and comfort.
            </p>
            <button
              onClick={() => navigate('/mission')}
              className="group relative inline-flex items-center justify-center px-6 py-3 border border-white/60 text-white font-semibold tracking-wide uppercase text-sm overflow-hidden bg-white/0 hover:bg-white/10 transition-all duration-300"
            >
              <span className="mr-3">Learn More</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 pointer-events-none border border-white/20" />
            </button>
          </div>
        </div>
        {/* Content Text - Bottom-Right Position */}
  <div ref={secondContentRef} className="hidden sm:flex relative z-10 pr-4 sm:pr-12 max-w-full xxs:max-w-xs xs:max-w-sm sm:max-w-4xl flex-col justify-end min-h-screen" style={{ 
          paddingRight: 'clamp(1rem, 4vw, 3rem)', 
          paddingBottom: 'min(10vh, 4rem)',
        }}>
          <h2 
            className="font-bold text-white leading-tight text-left uppercase mb-3 xxs:mb-4"
            style={{
              // slightly larger line-height so the phrase breathes across two lines
              fontSize: 'clamp(0.95rem, 3.2vw, 1.9rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: '900',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.2',
              textAlign: 'left',
            }}
          >
            ESCAPE CONGESTION<br />AND TRAFFIC
          </h2>
          
          <p 
            className="text-white/80 font-medium leading-relaxed text-left"
            style={{
              fontSize: 'clamp(0.65rem, 1.5vw, 0.875rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.1em',
              fontWeight: '500',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
              textAlign: 'left',
              marginTop: 'clamp(0.25rem, 0.5vw, 0.5rem)',
            }}
          >
            REACH ANYWHERE IN MINUTES
          </p>
          
          {/* Learn More Button */}
          <button 
            onClick={() => navigate('/mission')}
            className="group relative inline-flex items-center px-6 py-2 sm:px-8 sm:py-3 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-xs sm:text-sm overflow-hidden rounded-none mt-4"
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">Learn More</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
      </section>

      {/* Features Section - hidden on mobile; fully omitted from DOM for small screens */}
      {!isMobile && (
        <section 
          id="features" 
          className="hidden sm:flex relative min-h-screen items-end justify-start overflow-hidden bg-black"
          style={{
            backgroundImage: `url('https://i.ibb.co/8nvjKwX0/IMG-20250727-001615.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        
        {/* Content - Bottom Left */}
  <div ref={featuresContentRef} className="hidden sm:block relative z-10 pb-2 pl-2 xxs:pb-4 xxs:pl-4 xs:pb-6 xs:pl-6 sm:pb-8 sm:pl-12 lg:pb-16 lg:pl-20 max-w-full xxs:max-w-xs xs:max-w-sm sm:max-w-4xl" style={{ paddingBottom: 'clamp(1rem, 2vw, 3rem)', paddingLeft: 'clamp(0.5rem, 4vw, 2rem)' }}>
          <h1 
            className="font-bold text-white leading-tight text-left uppercase mb-2 xxs:mb-3"
            style={{
              fontSize: 'clamp(1rem, 4.5vw, 2.5rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: '900',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            FUTURISTIC EXPERIENCE
          </h1>
          
          {/* Sub heading */}
          <p 
            className="text-white/80 font-medium leading-relaxed text-left mb-4 xxs:mb-6"
            style={{
              fontSize: 'clamp(0.7rem, 2vw, 1.125rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.1em',
              fontWeight: '500',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            NEW, PREMIUM TRAVEL EXPERIENCE
          </p>
          
          {/* Explore Button */}
          <button 
            onClick={() => {
              document.getElementById('air-taxi')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="group relative inline-flex items-center px-6 py-2 sm:px-8 sm:py-3 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-xs sm:text-sm overflow-hidden rounded-none mt-4"
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">EXPLORE</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
        </section>
      )}

      {/* Air Taxi Section 2 - Future Vision (hidden on mobile) */}
      {!isMobile && (
      <section 
        id="air-taxi"
        className="relative min-h-screen flex items-end justify-end overflow-hidden bg-black"
        style={{
          backgroundImage: `url('./airtaxi 2s.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none"></div>
        
        {/* Content - Right Bottom */}
  <div ref={futureVisionContentRef} className="hidden sm:block relative z-10 pb-8 md:pb-16 pr-8 md:pr-16 max-w-lg text-right" style={{ paddingBottom: 'clamp(1rem, 3vw, 3rem)', paddingRight: 'clamp(2rem, 6vw, 6rem)' }}>
          <h2 
            className="font-bold text-white leading-tight uppercase mb-8"
            style={{
              fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: '900',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              lineHeight: '1.0',
              whiteSpace: 'nowrap',
            }}
          >
            THE FUTURE IS NOW
          </h2>
          
          <p 
            className="text-white/80 font-medium leading-relaxed mb-12"
            style={{
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.02em',
              fontWeight: '500',
              textShadow: '0 1px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.6',
            }}
          >
            {/* Mobile text (shorter) */}
            <span className="block sm:hidden">
              AIRAVATH AIR TAXIS — FASTER, SMARTER TRAVEL.
            </span>
            {/* Desktop text (longer) */}
            <span className="hidden sm:block">
              EXPERIENCE THE NEXT GENERATION OF URBAN MOBILITY WITH AIRAVATH'S REVOLUTIONARY AIR TAXI TECHNOLOGY. 
              BYPASS TRAFFIC, REDUCE TRAVEL TIME, AND ELEVATE YOUR JOURNEY TO NEW HEIGHTS.
            </span>
          </p>
          
          {/* Discover More Button */}
          <button 
            onClick={() => navigate('/about')}
            className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase overflow-hidden rounded-none"
            style={{
              fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.15em',
              fontWeight: '600',
            }}
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">DISCOVER MORE</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
        </section>
      )}

      {/* ABOUT SECTION - Meet AIRAVATH */}
      <section
        id="about"
        // Removed negative margin; previous -mt-28 caused layout shifts and inconsistent gaps.
        className="relative h-[70vh] md:h-[80vh] bg-black"
        style={{
          backgroundImage: isMobile ? `url('https://i.ibb.co/n8q646qF/IMG-20250903-112100.webp')` : `url('https://i.ibb.co/n8zMKHsB/IMG-20250719-140017.webp')`,
          backgroundSize: isMobile ? '250% auto' : 'cover',
          backgroundPosition: isMobile ? 'center 0%' : 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
        
        {/* Header Section */}
  <div ref={aboutHeaderRef} className="absolute top-20 left-8 z-10 max-w-md about-header">
          <h1 className="text-white font-bold mb-2 ddin-bold" style={{
            fontSize: 'clamp(1.5rem, 4vw, 4rem)',
          }}>
            MEET AIRAVATH
          </h1>
          <div className="w-24 h-0.5 bg-white mb-4"></div>
          <div className="block sm:hidden">
            <p className="text-white uppercase leading-relaxed mb-4" style={{
              fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
            }}>
              AIRAVATH BLENDS HERITAGE AND VISION. INSPIRED BY THE MYTHICAL WHITE ELEPHANT, WE STAND FOR STRENGTH, INNOVATION, SUSTAINABILITY, AND GLOBAL CONNECTIVITY — REDEFINING MODERN AVIATION.
            </p>
            <p className="text-white uppercase leading-relaxed mb-6" style={{
              fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
            }}>
              
            </p>
          </div>
          
          {/* Desktop text (original) */}
          <div className="hidden sm:block">
            <p className="text-white text-base uppercase leading-relaxed mb-6">
              AT AIRAVATH, OUR NAME UNITES HERITAGE AND VISION. INSPIRED BY THE MYTHICAL WHITE ELEPHANT OF LORD INDRA, IT SYMBOLIZES STRENGTH, GUARDIANSHIP, AND CONNECTION — PRINCIPLES WE BRING TO MODERN AVIATION. STRENGTH & RELIABILITY: Trust, protection, and safety in the skies. INNOVATION: AI-driven solutions shaping the future of aviation. SUSTAINABILITY: Eco-friendly, safe, and responsible aerospace. GLOBAL CONNECTIVITY: Bridging people, places, and possibilities through flight
            </p>
            <p className="text-white text-base uppercase leading-relaxed mb-8">
              
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 hero-cta-container sm:ml-0">
            {/* Connect With Us Button */}
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="group relative inline-flex items-center w-auto px-2 py-1 sm:px-4 sm:py-2 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-xs overflow-hidden rounded-none hero-cta-button"
            >
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <div className="relative z-10 flex items-center">
                <span className="mr-0.5 sm:mr-2 group-hover:text-black transition-colors duration-500 text-xs sm:text-xs">Connect With Us</span>
                <ArrowRight size={8} className="sm:size-[14px] group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
              </div>
            </button>

            {/* Explore Button */}
            <button 
              onClick={() => {
                document.getElementById('mission')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="group relative inline-flex items-center w-auto px-2 py-1 sm:px-4 sm:py-2 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-xs overflow-hidden rounded-none hero-cta-button"
            >
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <div className="relative z-10 flex items-center">
                <span className="mr-0.5 sm:mr-2 group-hover:text-black transition-colors duration-500 text-xs sm:text-xs">Explore</span>
                <ArrowRight size={8} className="sm:size-[14px] group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - What We Believe */}
      <section 
        id="beliefs"
        className="relative min-h-screen bg-black py-2 md:py-4 px-4"
      >
        <div ref={believeRef} className="min-h-screen bg-black py-2 md:py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="believe-title text-white text-4xl font-bold mb-4 uppercase tracking-wider">
                What We Believe
              </h2>
              <div className="believe-line w-32 h-0.5 bg-white mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1 - Time & Access */}
              <div className="believe-card group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-6 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white group-hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                  Time & Access
                </h3>
                <p className="text-lg text-white/90 mb-6 font-semibold">
                  Time Should Be Respected
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                    <span className="text-sm leading-relaxed">Air mobility should save time, not just cost more.</span>
                  </div>
                  <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                    <span className="text-sm leading-relaxed">Emergency access should never be delayed.</span>
                  </div>
                  <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                    <span className="text-sm leading-relaxed">The faster we move, the more lives we empower.</span>
                  </div>
                </div>
              </div>

              {/* Card 2 - Vision & Future */}
              <div className="believe-card group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-6 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white group-hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                  Vision & Future
                </h3>
                <p className="text-lg text-white/90 mb-6 font-semibold">
                  The Sky Is Our Starting Point
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                    <span className="text-sm leading-relaxed">The future of transport is above us.</span>
                  </div>
                  <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                    <span className="text-sm leading-relaxed">Every rooftop can become a launchpad.</span>
                  </div>
                  <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                    <span className="text-sm leading-relaxed">Cities must grow vertically — not just outward.</span>
                  </div>
                </div>
              </div>

              {/* Card 3 - Purpose & Equality */}
              <div className="believe-card group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-6 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white group-hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                  Purpose & Equality
                </h3>
                <p className="text-lg text-white/90 mb-6 font-semibold">
                  Mobility Is for Everyone
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                    <span className="text-sm leading-relaxed">Flying shouldn't be a luxury.</span>
                  </div>
                  <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                    <span className="text-sm leading-relaxed">It should be accessible, sustainable, and life-saving.</span>
                  </div>
                  <div className="flex items-start text-white/80 group-hover:text-white/90 transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                    <span className="text-sm leading-relaxed">Our mission is built on purpose, not privilege.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION - Our Mission */}
      <section 
        id="mission"
        className="relative min-h-screen flex items-center justify-start bg-black"
        style={{
          backgroundImage: `url('./mission 1page.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        
        <div className="relative z-10 flex items-center justify-start min-h-screen p-8">
          <div ref={missionContentRef} className="max-w-2xl">
            {/* Section Title */}
            <h2 className="mission-title text-white text-4xl font-bold mb-4 uppercase tracking-wider">
              OUR MISSION
            </h2>
            {/* Line under title */}
            <div className="mission-line w-32 h-0.5 bg-white mb-8"></div>
            
            <h1 
              className="mission-heading text-white max-w-xl mb-6"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '2rem',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                lineHeight: '1.2',
              }}
            >
              
            </h1>
            
            <p 
              className="text-white/90"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '1rem',
                fontWeight: '400',
                letterSpacing: '0.02em',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                lineHeight: '1.6',
                textTransform: 'uppercase',
              }}
            >
            Our mission is to unlock smarter, cleaner, and faster mobility through the skies.
              <br /><br />
             AIRAVATH's VTOL air taxis turn hours into minutes — for city travel, emergencies, and executive transport — cutting through traffic with safety and speed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-8">
              <button 
                onClick={() => {
                  document.getElementById('air-taxi')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="group relative inline-flex items-center px-2 py-1 sm:px-8 sm:py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-xs sm:text-sm overflow-hidden rounded-none"
              >
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <div className="relative z-10 flex items-center">
                  <span className="mr-1 sm:mr-3 group-hover:text-black transition-colors duration-500">Explore Air Taxi</span>
                  <ArrowRight size={10} className="sm:size-[18px] group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
                </div>
              </button>

              <button 
                onClick={() => {
                  document.getElementById('objectives')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="group relative inline-flex items-center px-2 py-1 sm:px-8 sm:py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-xs sm:text-sm overflow-hidden rounded-none"
              >
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <div className="relative z-10 flex items-center">
                  <span className="mr-1 sm:mr-3 group-hover:text-black transition-colors duration-500">Our Future Vision</span>
                  <ArrowRight size={10} className="sm:size-[18px] group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    
      {/* MISSION SECTION - Before vs After Comparison */}
      <section 
        id="comparison"
        className="relative min-h-screen bg-black"
      >
        <div ref={comparisonRef} className="w-full h-screen bg-black flex items-center justify-center p-4 sm:p-8">
          <div className="flex flex-col sm:flex-row max-w-4xl w-full mx-auto overflow-hidden gap-4 sm:gap-0">
            
            <div className="before-box bg-black border-2 border-white/30 h-60 sm:h-80 flex-1 flex flex-col items-center justify-center p-4 sm:p-8 space-y-2 sm:space-y-4 transform transition-all duration-700 ease-in-out hover:flex-[1.5] hover:translate-x-2 hover:shadow-2xl hover:border-white cursor-pointer relative overflow-hidden group">
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-in-out"></div>
              
              <div className="relative z-10 flex flex-col items-center space-y-2 sm:space-y-4 transform group-hover:scale-105 transition-transform duration-500">
                <h2 className="text-white text-lg sm:text-xl font-semibold tracking-wider uppercase group-hover:text-black transition-colors duration-700">
                  Before
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center px-2 group-hover:text-black transition-colors duration-700">
                  Ground transportation stuck in traffic
                </p>
                <div className="text-gray-500 text-3xl sm:text-4xl font-bold leading-none group-hover:text-black transition-colors duration-700">
                  2+ Hours
                </div>
                <p className="text-gray-400 text-xs sm:text-base tracking-wide uppercase group-hover:text-black transition-colors duration-700">
                  Traditional Transport
                </p>
              </div>
            </div>

            <div className="after-box bg-black border-2 border-white/30 h-60 sm:h-80 flex-1 flex flex-col items-center justify-center p-4 sm:p-8 space-y-2 sm:space-y-4 transform transition-all duration-700 ease-in-out hover:flex-[1.5] hover:-translate-x-2 hover:shadow-2xl hover:border-white cursor-pointer relative overflow-hidden group">
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-in-out"></div>
              
              <div className="relative z-10 flex flex-col items-center space-y-2 sm:space-y-4 transform group-hover:scale-105 transition-transform duration-500">
                <h2 className="text-white text-lg sm:text-xl font-semibold tracking-wider uppercase group-hover:text-black transition-colors duration-700">
                  After
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center px-2 group-hover:text-black transition-colors duration-700">
                  AIRAVATH air taxi flying directly to destination
                </p>
                <div className="text-white text-3xl sm:text-4xl font-bold leading-none group-hover:text-black transition-colors duration-700">
                  15 Minutes
                </div>
                <p className="text-gray-400 text-xs sm:text-base tracking-wide uppercase group-hover:text-black transition-colors duration-700">
                  AIRAVATH Solution
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OBJECTIVES SECTION - Future Objectives Timeline */}
      <section 
        id="objectives"
        className="relative min-h-screen bg-black py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 
              className="text-white mb-3 opacity-0 translate-y-[-30px] transition-all duration-1000 ease-out"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '2.5rem',
                fontWeight: '700',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                lineHeight: '1.1',
                animationDelay: '0.2s',
                animationName: 'dropDown',
                animationDuration: '1s',
                animationFillMode: 'forwards',
              }}
            >
              Future <span className="text-white">Objectives</span>
            </h1>
            <p 
              className="text-white/90 max-w-3xl mx-auto opacity-0 translate-y-[-30px] transition-all duration-1000 ease-out"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '1rem',
                fontWeight: '500',
                letterSpacing: '0.06em',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                lineHeight: '1.4',
                textTransform: 'uppercase',
                animationDelay: '0.6s',
                animationName: 'dropDown',
                animationDuration: '1s',
                animationFillMode: 'forwards',
              }}
            >
              Roadmap to Vertical Freedom - Our journey to revolutionize urban mobility
            </p>
          </div>
          
          {/* Timeline */}
          <div ref={objectivesRef} className="relative">
            {/* Timeline line */}
            <div className="timeline-line absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-white to-white/30 rounded-full" style={{ opacity: 1, visibility: 'visible' }}></div>
            
            <div className="space-y-16">
              {[
                {
                  year: '2027',
                  title: 'Pilot Program & Acquisition',
                  description: '2 cities, services & emergency medical transport priority',
                  icon: Calendar,
                  details: [
                    'Launch pilot operations in Andhra Pradesh & Telangana',
                    'Acquire and deploy initial AirTaxi fleet',
                    'Partner with hospitals and vertiports',
                  ]
                },
                {
                  year: '2027',
                  title: 'Service Launch',
                  description: 'Andhra Pradesh & Telangana — full commercial AirTaxi operations begin.',
                  icon: MapPin,
                  details: [
                    'Emergency medical and premium travel routes',
                    'Integration with vertiport network',
                    '24/7 service availability'
                  ]
                },
                {
                  year: '2028',
                  title: 'Nationwide Expansion',
                  description: 'Pan-India rollout of AirTaxi services.',
                  icon: Plane,
                  details: [
                    'Operations in all major cities',
                    'Expanded fleet for high-demand routes',
                    'Nationwide vertiport connectivity',
                  ]
                },
                {
                  year: '2029',
                  title: 'Rooftop Revolution',
                  description: 'Home helipads and integrated healthcare ecosystem',
                  icon: Building,
                  details: [
                    'Residential helipad installations',
                    'Direct home-to-hospital transport',
                    'Integrated health monitoring',
                    'Smart city infrastructure'
                  ]
                }
              ].map((milestone, index) => (
                <div key={milestone.year + index} className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="timeline-dot absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10" style={{ opacity: 1, visibility: 'visible' }}></div>
                  
                  {/* Content */}
                  <div className={`timeline-content w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`} style={{ opacity: 1, visibility: 'visible' }}>
                    <div className="group bg-airavata-gray/20 backdrop-blur-sm border border-airavata-gray rounded-lg p-4 hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/40 rounded-lg flex items-center justify-center mr-3 group-hover:from-white/40 group-hover:to-white/60 group-hover:scale-110 transition-all duration-300">
                          <milestone.icon className="milestone-icon text-white group-hover:scale-125 transition-transform duration-300" size={20} />
                        </div>
                        <div className="text-2xl font-orbitron font-bold text-white group-hover:text-white group-hover:scale-105 transition-all duration-300">
                          {milestone.year}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2 font-orbitron group-hover:text-white/90 transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-white mb-4 text-sm group-hover:text-white/80 transition-colors duration-300">
                        {milestone.description}
                      </p>
                      
                      <ul className="space-y-1">
                        {milestone.details.map((detail, idx) => (
                          <li key={idx} className="detail-item flex items-center text-xs text-white group-hover:text-white/80 transition-colors duration-300">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0 group-hover:bg-white group-hover:scale-125 transition-all duration-300"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2029 Vision */}
          <div className="mt-24 text-center">
            <div className="bg-gradient-to-br from-airavata-blue/10 via-airavata-gray/20 to-airavata-blue/5 rounded-lg p-8 border border-airavata-blue/30">
              <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-white mb-6">
                2029 Vision: The Connected Sky
              </h2>
              <p className="text-lg sm:text-xl text-white leading-relaxed max-w-4xl mx-auto mb-8">
                By 2029, AIRAVATH will have transformed urban landscapes with integrated 
                helipad infrastructure on residential buildings, hospitals, and corporate offices. 
                Our vision: a seamless healthcare ecosystem where emergency response times 
                are measured in minutes, not hours.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="group bg-airavata-black/50 rounded-lg p-4 border border-airavata-gray hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
                  <div className="text-xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">10,000+</div>
                  <div className="text-white text-sm group-hover:text-white/80 transition-colors duration-300">Rooftop Helipads</div>
                </div>
                <div className="group bg-airavata-black/50 rounded-lg p-4 border border-airavata-gray hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
                  <div className="text-xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">50</div>
                  <div className="text-white text-sm group-hover:text-white/80 transition-colors duration-300">Global Cities</div>
                </div>
                <div className="group bg-airavata-black/50 rounded-lg p-4 border border-airavata-gray hover:border-white/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 cursor-pointer">
                  <div className="text-xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">5 Min</div>
                  <div className="text-white text-sm group-hover:text-white/80 transition-colors duration-300">Average Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section 
        id="contact"
        className="relative min-h-screen bg-black"
        style={{
          backgroundImage: `url('./contact airtaxi.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-lg" style={{ marginLeft: '2vw', paddingTop: '5rem' }}>
          <div ref={contactHeaderRef} className="px-4 pb-4">
            <h1 className="text-3xl font-bold text-white mb-2 uppercase">
              GET IN TOUCH?
            </h1>
            <p className="text-white/80 mb-6 text-sm">
              Ready to revolutionize your mobility? Get in touch with us.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="hero-name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <Input
                  id="hero-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-transparent border-2 border-white text-white placeholder-white focus:border-white focus:ring-white/20 h-12"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="hero-email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <Input
                  id="hero-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-transparent border-2 border-white text-white placeholder-white focus:border-white focus:ring-white/20 h-12"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="hero-message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <Textarea
                  id="hero-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-transparent border-2 border-white text-white placeholder-white focus:border-white focus:ring-white/20 resize-none"
                  placeholder="Tell us about your interest in AIRAVATH..."
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden bg-transparent border-2 border-white text-white font-semibold py-2 px-8 transition-all duration-300 disabled:opacity-50 h-10 hover:text-black group rounded-none"
                >
                  <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section 
        id="contact-info"
        className="relative min-h-screen bg-black py-20"
      >
        <div ref={contactFormRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wider">
              GET IN TOUCH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Address */}
            <div className="contact-item text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-airavata-gray/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                ADDRESS
              </h3>
              <div className="space-y-3 text-airavata-light-gray">
                <div className="mb-4">
                  <p className="font-semibold text-white mb-2">AIRAVATH Headquarters</p>
                  <p>123 Innovation Drive</p>
                  <p>INDIA, 94102</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Northern Division Office</p>
                  <p>456 Tech city</p>
                  <p>Andhra Pradesh, 555555</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item text-center flex flex-col items-center mt-16">
              <div className="w-24 h-24 bg-airavata-gray/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                PHONE
              </h3>
              <div className="space-y-3 text-airavata-light-gray">
                <div className="mb-4">
                  <p className="font-semibold text-white mb-2">AIRAVATH Main Line</p>
                  <p>+91  123-4567 phone</p>
                  <p>+91  123-4568 facsimile</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">AIRAVATH 24/7 Department</p>
                  <p>+91  911-HELP</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-airavata-gray/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                EMAIL
              </h3>
              <div className="space-y-3 text-airavata-light-gray">
                <div className="mb-4">
                  <p className="font-semibold text-white mb-2">Request for Proposal</p>
                  <p>pradyaviation@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">for Calls</p>
                  <p>service@airavath.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
