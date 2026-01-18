
import { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronDown, ArrowRight, Calendar, MapPin, Plane, Building, Globe, Mail, Phone, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const logoSectionRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const futureVisionContentRef = useRef<HTMLDivElement>(null);
  
  // About page refs
  const believeRef = useRef<HTMLDivElement>(null);
  
  // Objectives page refs
  const objectivesRef = useRef<HTMLDivElement>(null);
  
  // Contact page refs
  const contactHeaderRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  
  // Feature section scroll-lock ref
  const featureSectionRef = useRef<HTMLElement>(null);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Track mobile breakpoint so we can avoid rendering large/heavy sections on small screens
  const [isMobile, setIsMobile] = useState(false);
  
  // Scroll-controlled feature cards state
  const [activeFeatureCard, setActiveFeatureCard] = useState(0);
  const featureCardsContainerRef = useRef<HTMLDivElement>(null);
  const featureCard1Ref = useRef<HTMLDivElement>(null);
  const featureCard2Ref = useRef<HTMLDivElement>(null);
  const featureCard3Ref = useRef<HTMLDivElement>(null);

  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [customCursor, setCustomCursor] = useState({ x: 0, y: 0, visible: false });
  const slideshowRef = useRef<HTMLDivElement>(null);

  const slideshowImages = [
    '/slideshow-1.jpg',
    '/slideshow-2.jpg',
  ];

  // GSAP ScrollTrigger for feature cards - scroll changes active card based on which card is in view
  useEffect(() => {
    const card1 = featureCard1Ref.current;
    const card2 = featureCard2Ref.current;
    const card3 = featureCard3Ref.current;
    if (!card1 || !card2 || !card3) return;

    // Create scroll triggers for each card - activate when card enters viewport center
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: card1,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => setActiveFeatureCard(0),
        onEnterBack: () => setActiveFeatureCard(0),
      });

      ScrollTrigger.create({
        trigger: card2,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => setActiveFeatureCard(1),
        onEnterBack: () => setActiveFeatureCard(1),
      });

      ScrollTrigger.create({
        trigger: card3,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => setActiveFeatureCard(2),
        onEnterBack: () => setActiveFeatureCard(2),
      });
    });

    return () => ctx.revert();
  }, []);

  // Slideshow handlers
  const handleSlideshowClick = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (slideshowRef.current) {
      const rect = slideshowRef.current.getBoundingClientRect();
      setCustomCursor({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        visible: true,
      });
    }
  };

  const handleMouseLeave = () => {
    setCustomCursor({ ...customCursor, visible: false });
  };

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

    <div className="relative min-h-screen">
      {/* Premium Hero Section - Fixed for Parallax Effect */}
      <section 
        className="fixed top-0 left-0 right-0 min-h-screen h-screen flex items-center justify-start overflow-hidden z-0"
        role="img"
        aria-label="AIRAVATH - Pioneering Sustainable Air Mobility"
      >
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Elegant Blue Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/60 via-sky-800/40 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Hero Content - Left Aligned */}
        <div 
          ref={heroContentRef} 
          className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 flex flex-col justify-center min-h-screen"
        >
          {/* Main Headline */}
          <div className="max-w-4xl">
            {/* Primary Text - Bold */}
            <h1 
              className="text-white font-bold tracking-tight mb-4"
              style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                fontWeight: '700',
                lineHeight: '1.05',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
              }}
            >
              WE PIONEER
            </h1>
            
            {/* Secondary Text - Light/Italic Style */}
            <p 
              className="text-cyan-300/90"
              style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                fontWeight: '300',
                lineHeight: '1.2',
                letterSpacing: '0.01em',
                fontStyle: 'italic',
              }}
            >
              sustainable air mobility.
            </p>
          </div>
        </div>

        {/* Scroll to Explore - Bottom Left */}
        <div 
          ref={scrollIndicatorRef} 
          className="absolute bottom-8 sm:bottom-12 left-6 sm:left-8 lg:left-16 z-20 flex items-center gap-3 cursor-pointer group"
          onClick={() => {
            document.getElementById('air-taxi')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          <span 
            className="text-white/80 uppercase tracking-widest text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300"
            style={{ letterSpacing: '0.2em' }}
          >
            Scroll to explore
          </span>
          <ChevronDown 
            size={18} 
            className="text-white/80 animate-bounce group-hover:text-white transition-colors duration-300" 
          />
        </div>

        {/* Floating CTA Card - Bottom Right */}
        <div 
          className="hidden md:block absolute bottom-8 sm:bottom-12 right-6 sm:right-8 lg:right-16 z-20 bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer group hover:shadow-3xl transition-all duration-500 hover:-translate-y-1"
          onClick={() => navigate('/air-taxi')}
          style={{
            minWidth: '200px',
            maxWidth: '280px',
          }}
        >
          <div className="px-6 py-5">
            <p 
              className="text-gray-500 uppercase tracking-wider text-xs font-medium mb-1"
              style={{ letterSpacing: '0.15em' }}
            >
              Discover our solutions
            </p>
            <div className="flex items-center justify-between">
              <span className="text-gray-900 font-semibold text-base">
                Learn more
              </span>
              <ArrowRight 
                size={18} 
                className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300" 
              />
            </div>
          </div>
        </div>

        {/* Curved Bottom Edge - White Wave */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 z-10">
          <svg 
            viewBox="0 0 1440 50" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 50V35C120 15 240 5 360 10C480 15 600 30 720 35C840 40 960 35 1080 25C1200 15 1320 10 1440 20V50H0Z" 
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Spacer to push content below fixed hero - transparent to show hero behind */}
      <div className="h-screen w-full relative z-[1]" aria-hidden="true"></div>

      {/* Scrollable Content Container - Scrolls over fixed hero and footer */}
      <div className="relative z-10 bg-white">
        {/* Elegant Curved Top Edge - Wave with ups and downs */}
        <div className="hidden md:block absolute -top-6 lg:-top-10 left-0 right-0 z-10 pointer-events-none">
          <svg 
            viewBox="0 0 1440 50" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 50V35C120 15 240 5 360 10C480 15 600 30 720 35C840 40 960 35 1080 25C1200 15 1320 10 1440 20V50H0Z" 
              fill="white"
            />
          </svg>
        </div>

      {/* Volocopter-Style Features Section - White Background */}
      <section 
        ref={featureSectionRef}
        id="air-taxi"
        className="relative bg-white lg:py-16 -mt-1"
      >
        {/* Mobile: Curved Box Container */}
        <div className="md:hidden bg-white mx-4 px-6 pt-8 pb-4 mb-8 -mt-24" style={{ borderTopLeftRadius: '6rem', borderTopRightRadius: '6rem' }}>
          {/* Top Section - Tagline */}
          <div className="mb-8">
            <h2 
              className="text-slate-600"
              style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: '400',
                lineHeight: '1.3',
                letterSpacing: '-0.01em',
              }}
            >
              AIRAVATH pioneers <span className="text-cyan-500 font-medium">safe, quiet, and sustainable</span>
              <br />
              <span className="text-cyan-500 font-medium">all-electric</span> aircraft solutions.
            </h2>
          </div>

          {/* Headlines */}
          <div className="mb-8">
            <h3 
              className="text-slate-900 font-bold mb-4"
              style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              WE ARE THE FIRST
            </h3>
            <p 
              className="text-cyan-500 mb-6"
              style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: '400',
                lineHeight: '1.2',
              }}
            >
              To bring electric air taxis to India
            </p>
            <p className="text-slate-500 text-lg leading-relaxed">
              Our AIRAVATH air taxis will be among the first internationally certified eVTOL aircraft operating in the region.
            </p>
          </div>

          {/* Notably Quiet Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-100">
                <svg className="w-7 h-7 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-slate-900">
                  Notably quiet
                </h4>
                <p className="text-sm leading-relaxed text-slate-500">
                  In contrast to helicopters, our quiet pioneer seamlessly blends into the cityscape – inaudible at a 170-meter distance within such an environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Original Layout */}
        <div className="hidden md:block max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12">
          
          {/* Top Section - Tagline */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12 mb-12 lg:mb-16">
            <div className="lg:w-2/3">
              <h2 
                className="text-slate-600"
                style={{
                  fontFamily: "'Poppins', system-ui, sans-serif",
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontWeight: '400',
                  lineHeight: '1.3',
                  letterSpacing: '-0.01em',
                }}
              >
                AIRAVATH pioneers <span className="text-cyan-500 font-medium">safe, quiet, and sustainable</span>
                <br />
                <span className="text-cyan-500 font-medium">all-electric</span> aircraft solutions.
              </h2>
            </div>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            
            {/* Left Column - Headlines */}
            <div className="lg:w-2/5 lg:sticky lg:top-32">
              <h3 
                className="text-slate-900 font-bold mb-4"
                style={{
                  fontFamily: "'Poppins', system-ui, sans-serif",
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '700',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                }}
              >
                WE ARE THE FIRST
              </h3>
              <p 
                className="text-cyan-500 mb-6"
                style={{
                  fontFamily: "'Poppins', system-ui, sans-serif",
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: '400',
                  lineHeight: '1.2',
                }}
              >
                To bring electric air taxis to India
              </p>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                Our AIRAVATH air taxis will be among the first internationally certified eVTOL aircraft operating in the region.
              </p>
            </div>

            {/* Right Column - Feature Cards with Auto-Cycling Animation */}
            <div ref={featureCardsContainerRef} className="lg:w-1/2 space-y-6">
              
              {/* Feature Card 1 - Safety */}
              <div 
                ref={featureCard1Ref}
                className={`group rounded-2xl p-6 lg:p-8 transition-all duration-700 ease-in-out cursor-pointer ${
                  activeFeatureCard === 0 
                    ? 'bg-gradient-to-r from-slate-800 to-slate-900 shadow-2xl shadow-slate-900/30 scale-[1.02]' 
                    : 'bg-white border border-slate-200 hover:shadow-xl hover:border-slate-300'
                }`}
                onClick={() => setActiveFeatureCard(0)}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    activeFeatureCard === 0 
                      ? 'bg-slate-700/50 scale-110' 
                      : 'bg-slate-100'
                  }`}>
                    <svg className={`w-7 h-7 transition-colors duration-500 ${activeFeatureCard === 0 ? 'text-cyan-400' : 'text-cyan-600'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-lg mb-2 transition-colors duration-500 ${activeFeatureCard === 0 ? 'text-cyan-400' : 'text-slate-900'}`}>
                      As safe as a commercial aircraft
                    </h4>
                    <p className={`text-sm leading-relaxed transition-colors duration-500 ${activeFeatureCard === 0 ? 'text-slate-400' : 'text-slate-500'}`}>
                      On the path to certification with DGCA (Directorate General of Civil Aviation), our aircraft is designed to meet the highest safety standards in the industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 - Zero Emissions */}
              <div 
                ref={featureCard2Ref}
                className={`group rounded-2xl p-6 lg:p-8 transition-all duration-700 ease-in-out cursor-pointer ${
                  activeFeatureCard === 1 
                    ? 'bg-gradient-to-r from-slate-800 to-slate-900 shadow-2xl shadow-slate-900/30 scale-[1.02]' 
                    : 'bg-white border border-slate-200 hover:shadow-xl hover:border-slate-300'
                }`}
                onClick={() => setActiveFeatureCard(1)}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    activeFeatureCard === 1 
                      ? 'bg-slate-700/50 scale-110' 
                      : 'bg-slate-100'
                  }`}>
                    <svg className={`w-7 h-7 transition-colors duration-500 ${activeFeatureCard === 1 ? 'text-cyan-400' : 'text-cyan-600'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-lg mb-2 transition-colors duration-500 ${activeFeatureCard === 1 ? 'text-cyan-400' : 'text-slate-900'}`}>
                      Zero in-flight emissions
                    </h4>
                    <p className={`text-sm leading-relaxed transition-colors duration-500 ${activeFeatureCard === 1 ? 'text-slate-400' : 'text-slate-500'}`}>
                      Powered by battery technology, it emits zero CO2, nitric oxide (NOx), and other harmful pollutants during flight – making flying more sustainable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 - Quiet */}
              <div 
                ref={featureCard3Ref}
                className={`group rounded-2xl p-6 lg:p-8 transition-all duration-700 ease-in-out cursor-pointer ${
                  activeFeatureCard === 2 
                    ? 'bg-gradient-to-r from-slate-800 to-slate-900 shadow-2xl shadow-slate-900/30 scale-[1.02]' 
                    : 'bg-white border border-slate-200 hover:shadow-xl hover:border-slate-300'
                }`}
                onClick={() => setActiveFeatureCard(2)}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    activeFeatureCard === 2 
                      ? 'bg-slate-700/50 scale-110' 
                      : 'bg-slate-100'
                  }`}>
                    <svg className={`w-7 h-7 transition-colors duration-500 ${activeFeatureCard === 2 ? 'text-cyan-400' : 'text-cyan-600'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-lg mb-2 transition-colors duration-500 ${activeFeatureCard === 2 ? 'text-cyan-400' : 'text-slate-900'}`}>
                      Notably quiet
                    </h4>
                    <p className={`text-sm leading-relaxed transition-colors duration-500 ${activeFeatureCard === 2 ? 'text-slate-400' : 'text-slate-500'}`}>
                      In contrast to helicopters, our quiet pioneer seamlessly blends into the cityscape – inaudible at a 170-meter distance within such an environment.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveFeatureCard(index)}
                className={`transition-all duration-500 rounded-full ${
                  activeFeatureCard === index 
                    ? 'w-8 h-2 bg-cyan-500' 
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Aircraft Image Section */}
      <section className="!hidden md:!block relative bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          {/* Featured Image with Rounded Top Corners Only */}
          <div className="relative overflow-hidden rounded-t-3xl bg-white">
            <img 
              src="/about-airavath.png"
              alt="AIRAVATH Aircraft Wireframe Design"
              className="w-full h-[300px] sm:h-[380px] lg:h-[450px] xl:h-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Newsroom Style Section - White Background */}
      <section 
        id="beliefs"
        className="relative bg-white py-6 md:py-12 lg:py-16 -mt-32 md:mt-0"
      >
        <div ref={believeRef} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          {/* Section Header - Left Aligned */}
          <div className="mb-10 lg:mb-12">
            <h2 
              className="believe-title text-slate-900 font-bold mb-4"
              style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '700',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              NEWSROOM
            </h2>
            <p 
              className="believe-line text-slate-600"
              style={{
                fontFamily: "'Poppins', system-ui, sans-serif",
                fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                fontWeight: '400',
                lineHeight: '1.3',
              }}
            >
              Keep up with the latest AIRAVATH news
            </p>
          </div>

          {/* Newsroom Link - Right Aligned */}
          <div className="flex justify-end mb-8">
            <a 
              href="/contact" 
              className="flex items-center gap-2 text-slate-800 font-medium hover:text-cyan-600 transition-colors duration-300 group"
              style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
            >
              <span className="tracking-wide">NEWSROOM</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* News Card 1 */}
            <div className="believe-card group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src="/airtaxi.jpg"
                  alt="AIRAVATH Air Taxi"
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Date */}
              <p 
                className="text-slate-500 text-sm font-medium mb-3 uppercase tracking-wider"
                style={{ letterSpacing: '0.05em' }}
              >
                December 5, 2025
              </p>
              {/* Title */}
              <h3 
                className="text-slate-900 font-semibold text-lg leading-snug group-hover:text-cyan-600 transition-colors duration-300"
                style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
              >
                AIRAVATH Announces Strategic Partnership for eVTOL Operations in India
              </h3>
            </div>

            {/* News Card 2 */}
            <div className="believe-card group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src="/about-airavath.png"
                  alt="AIRAVATH Aircraft Design"
                  className="w-full h-[240px] object-cover bg-sky-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Date */}
              <p 
                className="text-slate-500 text-sm font-medium mb-3 uppercase tracking-wider"
                style={{ letterSpacing: '0.05em' }}
              >
                November 20, 2025
              </p>
              {/* Title */}
              <h3 
                className="text-slate-900 font-semibold text-lg leading-snug group-hover:text-cyan-600 transition-colors duration-300"
                style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
              >
                Pioneering Sustainable Air Mobility Technology for Urban Transportation
              </h3>
            </div>

            {/* News Card 3 */}
            <div className="believe-card group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src="/airtaxi 2s.jpg"
                  alt="AIRAVATH Future Vision"
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Date */}
              <p 
                className="text-slate-500 text-sm font-medium mb-3 uppercase tracking-wider"
                style={{ letterSpacing: '0.05em' }}
              >
                October 15, 2025
              </p>
              {/* Title */}
              <h3 
                className="text-slate-900 font-semibold text-lg leading-snug group-hover:text-cyan-600 transition-colors duration-300"
                style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
              >
                AIRAVATH Conducts First Electric Air Taxi Test Flight in Bangalore
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* 3D Roadmap Section */}
      <section 
        id="objectives"
        className="relative bg-white py-8 lg:py-10 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-8 lg:mb-10">
            <p className="text-slate-600 text-xl md:text-2xl max-w-2xl mx-auto">
              From vision to reality—charting our path to revolutionize urban mobility.
            </p>
          </div>
        </div>
          
        {/* 3D Road Visualization - Using Image - Full Width */}
        <div ref={objectivesRef} className="relative w-full">
          {/* Desktop & Tablet: Road Image - Full Width Edge to Edge */}
          <div className="hidden md:block relative w-full">
            <img 
              src="/roadmap-road.png" 
              alt="Roadmap Journey"
              className="w-full h-auto"
            />
          </div>

          {/* Mobile: Roadmap Image */}
          <div className="md:hidden px-6 sm:px-8">
            <img 
              src="/roadmap-mobile.jpg" 
              alt="AIRAVATH Roadmap"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Slideshow Section with Custom Cursor */}
      <section className="relative bg-white">
        <div className="w-full">
          <div 
            className="relative w-full overflow-hidden"
            style={{ 
              backgroundColor: '#0B1B3D',
              aspectRatio: '16 / 9'
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center px-8 lg:px-16">
              <div className="w-full max-w-4xl">
                {/* Slideshow Container */}
                <div
                  ref={slideshowRef}
                  className="relative aspect-video rounded-t-2xl overflow-hidden cursor-none"
                  onClick={handleSlideshowClick}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ 
                    cursor: 'none',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)'
                  }}
                >
                  {/* Slideshow Images */}
                  {slideshowImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {/* Custom Cursor */}
                  {customCursor.visible && (
                    <div
                      className="absolute w-20 h-20 rounded-full bg-cyan-400 flex items-center justify-center pointer-events-none transition-transform duration-150 ease-out z-50"
                      style={{
                        left: `${customCursor.x}px`,
                        top: `${customCursor.y}px`,
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.9,
                      }}
                    >
                      <ArrowRight className="text-white" size={32} />
                    </div>
                  )}
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                  {slideshowImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide
                          ? 'w-8 h-2 bg-cyan-400'
                          : 'w-2 h-2 bg-cyan-400/30 hover:bg-cyan-400/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section 
        id="contact"
        className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 md:pt-16 lg:pt-16 pb-12 lg:pb-16 overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left Side - Text Content */}
            <div ref={contactHeaderRef}>
              <p 
                className="text-cyan-400 uppercase tracking-widest text-sm font-medium mb-4"
                style={{ letterSpacing: '0.2em' }}
              >
                Contact Us
              </p>
              <h2 
                className="text-white font-bold mb-6"
                style={{
                  fontFamily: "'Poppins', system-ui, sans-serif",
                  fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                  fontWeight: '700',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                }}
              >
                Let's shape the future<br />
                <span className="text-cyan-400">together.</span>
              </h2>
              <p className="hidden md:block text-slate-400 text-lg mb-10 leading-relaxed">
                Ready to revolutionize your mobility experience? Get in touch with our team and discover how AIRAVATH can transform your journey.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Phone</p>
                    <a href="tel:+13213899564" className="text-white font-medium hover:text-cyan-400 transition-colors">
                      +1 (321) 389-9564
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Email</p>
                    <a href="mailto:pradyaviation@gmail.com" className="text-white font-medium hover:text-cyan-400 transition-colors">
                      pradyaviation@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                Send us a message
              </h3>
              <p className="text-slate-500 mb-8">
                We'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="hero-name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="hero-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500/20 h-12 rounded-xl"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="hero-email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="hero-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500/20 h-12 rounded-xl"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="hero-message" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="hero-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none rounded-xl"
                    placeholder="Tell us about your interest in AIRAVATH..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 h-12 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send size={18} />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />

      </div>{/* End Scrollable Content Container */}

    </div>
    </>
  );
};

export default Home;

