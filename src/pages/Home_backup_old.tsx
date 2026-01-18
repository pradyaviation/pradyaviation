
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { ArrowRight, ChevronDown, Calendar, Plane, Building, MapPin, Globe, Phone, Mail, Send } from 'lucide-react';

// Import styles
import '@/styles/responsive.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();
  
  // Refs for animations
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const logoSectionRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const secondContentRef = useRef<HTMLDivElement>(null);
  const featuresContentRef = useRef<HTMLDivElement>(null);
  const airTaxiContentRef = useRef<HTMLDivElement>(null);
  const futureVisionContentRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const aboutHeaderRef = useRef<HTMLDivElement>(null);
  const teamSectionRef = useRef<HTMLDivElement>(null);
  const believeRef = useRef<HTMLDivElement>(null);
  const missionContentRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const contactHeaderRef = useRef<HTMLDivElement>(null);
  const objectivesRef = useRef<HTMLDivElement>(null);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Air Taxi section animation (left to right)
    if (airTaxiContentRef.current) {
      const elements = airTaxiContentRef.current.children;
      
      gsap.set(elements, {
        x: -100,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: airTaxiContentRef.current,
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

    // Team section animation on scroll
    if (teamSectionRef.current) {
      const teamTitle = teamSectionRef.current.querySelector('.team-title');
      const teamLine = teamSectionRef.current.querySelector('.team-line');
      const teamCircles = teamSectionRef.current.querySelectorAll('.team-circle');

      gsap.set([teamTitle, teamLine, ...teamCircles], {
        y: 40,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: teamSectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.to(teamTitle, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          });

          gsap.to(teamLine, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.out"
          });

          gsap.to(teamCircles, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.4,
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

        const content = item.querySelector('.timeline-content');
        const isEven = index % 2 === 0;
        
        gsap.fromTo(content, {
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
        description: "Thank you for your interest in AIRAVATA. We'll be in touch soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="relative overflow-hidden pt-16">
      {/* New Black Screen Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-black"
        style={{
          backgroundImage: `url('https://i.ibb.co/Fq4LhRvc/IMG-20250717-113043.webp')`, // Change this URL to your desired image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
        
        <div ref={logoSectionRef} className="relative z-10 text-center text-white">
          {/* Airavata Logo */}
          <img 
            src="/1000127425-removebg-preview.png" 
            alt="AIRAVATA" 
            className="mx-auto mb-8 h-64 w-auto md:h-80 lg:h-96 xl:h-[28rem]"
            style={{ 
              maxHeight: '450px',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
            }}
          />
        </div>
      </section>

      {/* Cinematic Hero Section - Air Taxi Background */}
      <section 
        className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black"
        style={{
          backgroundImage: `url('/lovable-uploads/ebd12fbc-533d-4ca7-b87e-72929c269ec1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        role="img"
        aria-label="Futuristic medical air taxi aircraft"
      >
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        
        {/* Hero Two-Line Uppercase Text - Bottom-Left Position */}
        <div ref={heroContentRef} className="relative z-10 pb-8 pl-12 lg:pb-16 lg:pl-20 max-w-4xl" style={{ paddingBottom: '2vw', paddingLeft: '5vw' }}>
          <h1 
            className="font-bold text-white leading-tight text-left uppercase mb-3"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: '900',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            OPTIMIZING TRAVEL  <br /> SAVING YOUR TIME
          </h1>
          
          {/* Sub heading */}
          <p 
            className="text-white/80 font-medium leading-relaxed text-left mb-6"
            style={{
              fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.1em',
              fontWeight: '500',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            SMARTER. SAFER. FASTER.
          </p>
          
          {/* Learn More Button */}
          <button 
            onClick={() => navigate('/mission')}
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-ddin font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
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

      {/* Content Section - Revealed on Scroll */}
      <section 
        id="content" 
        className="relative min-h-screen flex items-end justify-end overflow-hidden bg-black"
        style={{
          backgroundImage: `url('https://i.ibb.co/XQXyZF2/IMG-20250727-090428.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Content Text - Bottom-Right Position */}
        <div ref={secondContentRef} className="relative z-10 pb-8 pr-12 lg:pb-16 lg:pr-20 max-w-4xl" style={{ paddingBottom: '2vw', paddingRight: '5vw' }}>
          <h2 
            className="font-bold text-white leading-tight text-left uppercase mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: '900',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.2',
              textAlign: 'left',
            }}
          >
            ESCAPE <br /> CONGESTION<br />AND TRAFFIC
          </h2>
          
          <p 
            className="text-white/80 font-medium leading-relaxed text-left"
            style={{
              fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.1em',
              fontWeight: '500',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
              textAlign: 'left',
              marginTop: '1rem',
            }}
          >
            REACH ANYWHERE IN MINUTES
          </p>
          
          {/* Learn More Button */}
          <button 
            onClick={() => navigate('/mission')}
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-ddin font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden mt-6"
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

      {/* Features Section */}
      <section 
        id="features" 
        className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black"
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
        <div ref={featuresContentRef} className="relative z-10 pb-8 pl-12 lg:pb-16 lg:pl-20 max-w-4xl" style={{ paddingBottom: '2vw', paddingLeft: '5vw' }}>
          <h1 
            className="font-bold text-white leading-tight text-left uppercase mb-3"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
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
            className="text-white/80 font-medium leading-relaxed text-left mb-6"
            style={{
              fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
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
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-ddin font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
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

      {/* Air Taxi Section 1 - Meet the Air Taxi */}
      <section 
        id="air-taxi"
        className="relative min-h-screen flex items-end justify-start overflow-hidden bg-black"
        style={{
          backgroundImage: `url('./airtaxi.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        role="img"
        aria-label="Advanced air taxi aircraft in flight"
      >
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        
        {/* Text and Button - Bottom Left */}
        <div ref={airTaxiContentRef} className="relative z-10 pb-16 pl-8 max-w-lg" style={{ paddingBottom: '3vw', paddingLeft: '4vw' }}>
          <h1 
            className="font-bold text-white leading-tight uppercase mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: '900',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              lineHeight: '1.1',
            }}
          >
            Meet the Air Taxi
          </h1>
          
          <p 
            className="text-white/90 font-medium leading-relaxed mb-8"
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '0.02em',
              fontWeight: '500',
              textShadow: '0 1px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.5',
            }}
          >
            AIR TAXIS ARE ELECTRIC VERTICAL TAKEOFF AND LANDING (EVTOL) AIRCRAFT DESIGNED TO REVOLUTIONIZE URBAN TRANSPORTATION.
          </p>
          
          {/* Learn More Button */}
          <button 
            onClick={() => navigate('/mission')}
            className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">LEARN OUR MISSION</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
      </section>

      {/* Air Taxi Section 2 - Future Vision */}
      <section 
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
        <div ref={futureVisionContentRef} className="relative z-10 pb-16 pr-16 max-w-lg text-right" style={{ paddingBottom: '3vw', paddingRight: '6vw' }}>
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
            EXPERIENCE THE NEXT GENERATION OF URBAN MOBILITY WITH AIRAVATA'S REVOLUTIONARY AIR TAXI TECHNOLOGY. 
            BYPASS TRAFFIC, REDUCE TRAVEL TIME, AND ELEVATE YOUR JOURNEY TO NEW HEIGHTS.
          </p>
          
          {/* Discover More Button */}
          <button 
            onClick={() => navigate('/about')}
            className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase overflow-hidden"
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

      {/* ABOUT SECTION - Meet AIRAVATA */}
      <section 
        id="about"
        className="relative min-h-screen bg-black"
        style={{
          backgroundImage: `url('https://i.ibb.co/n8zMKHsB/IMG-20250719-140017.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
        
        {/* Header Section */}
        <div ref={aboutHeaderRef} className="absolute top-20 left-8 z-10 max-w-md">
          <h1 className="text-white text-4xl font-bold mb-2">
            MEET AIRAVATA
          </h1>
          <div className="w-24 h-0.5 bg-white mb-4"></div>
          <p className="text-white text-base uppercase leading-relaxed mb-6">
            WE ARE A VISIONARY TEAM OF AVIATION EXPERTS AND TECHNOLOGY INNOVATORS UNITED BY A COMMON GOAL: REVOLUTIONIZING URBAN MOBILITY THROUGH THE SKIES.
          </p>
          <p className="text-white text-base uppercase leading-relaxed mb-8">
            TODAY, WE'RE PIONEERING THE DEVELOPMENT OF LUXURIOUS, MEDICALLY-EQUIPPED AIR TAXIS THAT WILL TRANSFORM HOW PEOPLE MOVE THROUGH CITIES, STARTING WITH EMERGENCY MEDICAL TRANSPORT AND EXPANDING TO EXECUTIVE TRAVEL SOLUTIONS.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Connect With Us Button */}
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <div className="relative z-10 flex items-center">
                <span className="mr-3 group-hover:text-black transition-colors duration-500">Connect With Us</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
              </div>
            </button>

            {/* Explore Button */}
            <button 
              onClick={() => {
                document.getElementById('mission')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <div className="relative z-10 flex items-center">
                <span className="mr-3 group-hover:text-black transition-colors duration-500">Explore</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Connect Our Team */}
      <section 
        id="team"
        className="relative min-h-screen bg-black"
      >
        <div ref={teamSectionRef} className="h-screen bg-black relative overflow-hidden flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-8">
            {/* Section Title */}
            <h2 className="team-title text-white text-4xl font-bold mb-4 uppercase tracking-wider">
              Connect Our Team
            </h2>
            {/* Line under title */}
            <div className="team-line w-32 h-0.5 bg-white mx-auto mb-16"></div>
            
            {/* Team Circles */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20">
              
              {/* Team Member 1 */}
              <div className="team-circle group relative cursor-pointer">
                <div className="relative w-80 h-80 mx-auto">
                  <div className="w-full h-full rounded-full border-2 border-white/30 overflow-hidden transition-all duration-500 group-hover:border-white group-hover:shadow-2xl group-hover:shadow-white/20 group-hover:scale-105 relative">
                    <img 
                      src="https://i.ibb.co/1fZs5G5t/Screenshot-2025-08-17-16-54-20-61-99c04817c0de5652397fc8b56c3b3817.webp" 
                      alt="CEO - Sarah Johnson" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-black/70 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100 p-8 text-center">
                      <h3 className="text-white text-2xl font-bold mb-3 uppercase tracking-wide">
                        XXXXXXX
                      </h3>
                      <p className="text-white/80 text-sm mb-4 uppercase tracking-wider font-semibold">
                        XXXXXXX
                      </p>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Aviation expert with 15+ years in aerospace engineering. Former Boeing engineer leading AIRAVATA's vision for urban air mobility.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-all duration-500"></div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="team-circle group relative cursor-pointer">
                <div className="relative w-80 h-80 mx-auto">
                  <div className="w-full h-full rounded-full border-2 border-white/30 overflow-hidden transition-all duration-500 group-hover:border-white group-hover:shadow-2xl group-hover:shadow-white/20 group-hover:scale-105 relative">
                    <img 
                      src="https://i.ibb.co/1fZs5G5t/Screenshot-2025-08-17-16-54-20-61-99c04817c0de5652397fc8b56c3b3817.webp" 
                      alt="CTO - Michael Chen" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-black/70 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100 p-8 text-center">
                      <h3 className="text-white text-2xl font-bold mb-3 uppercase tracking-wide">
                        XXXXXXX
                      </h3>
                      <p className="text-white/80 text-sm mb-4 uppercase tracking-wider font-semibold">
                        XXXXXXX
                      </p>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Technology innovator specializing in autonomous flight systems and AI integration. Former Tesla Autopilot team member.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-all duration-500"></div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="team-circle group relative cursor-pointer">
                <div className="relative w-80 h-80 mx-auto">
                  <div className="w-full h-full rounded-full border-2 border-white/30 overflow-hidden transition-all duration-500 group-hover:border-white group-hover:shadow-2xl group-hover:shadow-white/20 group-hover:scale-105 relative">
                    <img 
                      src="https://i.ibb.co/1fZs5G5t/Screenshot-2025-08-17-16-54-20-61-99c04817c0de5652397fc8b56c3b3817.webp" 
                      alt="CMO - Dr. Lisa Rodriguez" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-black/70 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100 p-8 text-center">
                      <h3 className="text-white text-2xl font-bold mb-3 uppercase tracking-wide">
                        XXXXXXXX
                      </h3>
                      <p className="text-white/80 text-sm mb-4 uppercase tracking-wider font-semibold">
                        XXXXXXXXXX
                      </p>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Emergency medicine specialist with 20+ years experience. Leading the integration of medical equipment in AIRAVATA aircraft.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-all duration-500"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - What We Believe */}
      <section 
        id="beliefs"
        className="relative min-h-screen bg-black py-16 px-4"
      >
        <div ref={believeRef} className="min-h-screen bg-black py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
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
              Solving Urban Congestion<br />from the Sky
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
            Our mission is to unlock the third dimension of transportation, creating a smart, sustainable, and accessible aerial mobility ecosystem. We aim to empower cities, enhance connectivity, and deliver a future where mobility is cleaner, faster, and frictionless.
              <br /><br />
             By embracing the skies, AIRAVATA revolutionizes mobility through advanced vertical takeoff and landing (VTOL) air taxis that dramatically reduce travel time—transforming hours into minutes. Designed for urban commutes, critical medical emergencies, and executive travel, AIRAVATA ensures that time, safety, and efficiency are no longer compromised by traffic or terrain
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={() => {
                  document.getElementById('air-taxi')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <div className="relative z-10 flex items-center">
                  <span className="mr-3 group-hover:text-black transition-colors duration-500">Explore Air Taxi</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
                </div>
              </button>

              <button 
                onClick={() => {
                  document.getElementById('objectives')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <div className="relative z-10 flex items-center">
                  <span className="mr-3 group-hover:text-black transition-colors duration-500">Our Future Vision</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
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
        <div ref={comparisonRef} className="w-full h-screen bg-black flex items-center justify-center p-8">
          <div className="flex max-w-4xl w-full mx-auto overflow-hidden">
            
            <div className="before-box bg-black border-2 border-white/30 h-80 flex-1 flex flex-col items-center justify-center p-8 space-y-4 transform transition-all duration-700 ease-in-out hover:flex-[1.5] hover:translate-x-2 hover:shadow-2xl hover:border-white cursor-pointer relative overflow-hidden group">
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-in-out"></div>
              
              <div className="relative z-10 flex flex-col items-center space-y-4 transform group-hover:scale-105 transition-transform duration-500">
                <h2 className="text-white text-xl font-semibold tracking-wider uppercase group-hover:text-black transition-colors duration-700">
                  Before
                </h2>
                <p className="text-gray-300 text-base leading-relaxed text-center px-2 group-hover:text-black transition-colors duration-700">
                  Ground transportation stuck in traffic
                </p>
                <div className="text-gray-500 text-4xl font-bold leading-none group-hover:text-black transition-colors duration-700">
                  2+ Hours
                </div>
                <p className="text-gray-400 text-base tracking-wide uppercase group-hover:text-black transition-colors duration-700">
                  Traditional Transport
                </p>
              </div>
            </div>

            <div className="after-box bg-black border-2 border-white/30 h-80 flex-1 flex flex-col items-center justify-center p-8 space-y-4 transform transition-all duration-700 ease-in-out hover:flex-[1.5] hover:-translate-x-2 hover:shadow-2xl hover:border-white cursor-pointer relative overflow-hidden group">
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-in-out"></div>
              
              <div className="relative z-10 flex flex-col items-center space-y-4 transform group-hover:scale-105 transition-transform duration-500">
                <h2 className="text-white text-xl font-semibold tracking-wider uppercase group-hover:text-black transition-colors duration-700">
                  After
                </h2>
                <p className="text-gray-300 text-base leading-relaxed text-center px-2 group-hover:text-black transition-colors duration-700">
                  AIRAVATA air taxi flying directly to destination
                </p>
                <div className="text-white text-4xl font-bold leading-none group-hover:text-black transition-colors duration-700">
                  15 Minutes
                </div>
                <p className="text-gray-400 text-base tracking-wide uppercase group-hover:text-black transition-colors duration-700">
                  AIRAVATA Solution
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
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wider">
              Future Objectives
            </h2>
            <div className="w-32 h-0.5 bg-white mx-auto"></div>
          </div>

          {/* Timeline Container */}
          <div ref={objectivesRef} className="relative">
            {/* Central Timeline Line */}
            <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

            {/* Timeline Items */}
            <div className="space-y-20">
              
              {/* 2025 - Product Development */}
              <div className="timeline-item relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="timeline-content bg-airavata-gray/20 p-6 rounded-lg border border-airavata-gray">
                    <div className="flex items-center justify-end mb-3">
                      <Calendar className="text-white mr-2" size={20} />
                      <span className="text-white font-bold text-xl">2027</span>
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-3 uppercase tracking-wide">
                      Pilot Program & Acquisition
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      2 cities, services & emergency medical transport priority

Launch pilot operations in Andhra Pradesh & Telangana
Acquire and deploy initial AirTaxi fleet
Partner with hospitals and vertiports
                    </p>
                  </div>
                </div>
                
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-black"></div>
                
                <div className="w-1/2 pl-8">
                  <div className="text-white/60">
                    <Plane size={40} />
                  </div>
                </div>
              </div>

              {/* 2026 - Urban Deployment */}
              <div className="timeline-item relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-white/60">
                    <Building size={40} />
                  </div>
                </div>
                
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-black"></div>
                
                <div className="w-1/2 pl-8">
                  <div className="timeline-content bg-airavata-gray/20 p-6 rounded-lg border border-airavata-gray">
                    <div className="flex items-center mb-3">
                      <Calendar className="text-white mr-2" size={20} />
                      <span className="text-white font-bold text-xl">2026</span>
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-3 uppercase tracking-wide">
                      Urban Deployment Phase
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Launch commercial operations in major metropolitan areas. Establish vertiports and build partnerships with hospitals and emergency services.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2027 - Network Expansion */}
              <div className="timeline-item relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="timeline-content bg-airavata-gray/20 p-6 rounded-lg border border-airavata-gray">
                    <div className="flex items-center justify-end mb-3">
                      <Calendar className="text-white mr-2" size={20} />
                      <span className="text-white font-bold text-xl">2027</span>
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-3 uppercase tracking-wide">
                      Network Expansion
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Expand to 10+ cities with integrated air traffic management systems. Introduce autonomous flight capabilities and passenger services.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-black"></div>
                
                <div className="w-1/2 pl-8">
                  <div className="text-white/60">
                    <MapPin size={40} />
                  </div>
                </div>
              </div>

              {/* 2028 - Global Reach */}
              <div className="timeline-item relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-white/60">
                    <Globe size={40} />
                  </div>
                </div>
                
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-black"></div>
                
                <div className="w-1/2 pl-8">
                  <div className="timeline-content bg-airavata-gray/20 p-6 rounded-lg border border-airavata-gray">
                    <div className="flex items-center mb-3">
                      <Calendar className="text-white mr-2" size={20} />
                      <span className="text-white font-bold text-xl">2028+</span>
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-3 uppercase tracking-wide">
                      Global Leadership
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Achieve global market leadership in urban air mobility. Establish international routes and next-generation sustainable aviation technology.
                    </p>
                  </div>
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
                  placeholder="Tell us about your interest in AIRAVATA..."
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden bg-transparent border-2 border-white text-white font-semibold py-2 px-8 rounded-md transition-all duration-300 disabled:opacity-50 h-10 hover:text-black group"
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
                  <p className="font-semibold text-white mb-2">AIRAVATA Headquarters</p>
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
                  <p className="font-semibold text-white mb-2">AIRAVATA Main Line</p>
                  <p>+91  123-4567 phone</p>
                  <p>+91  123-4568 facsimile</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">AIRAVATA 24/7 Department</p>
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
                  <p>info@airavata.com</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">for Calls</p>
                  <p>service@airavata.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
