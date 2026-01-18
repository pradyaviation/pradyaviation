
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const solutionSectionRef = useRef<HTMLDivElement>(null);
  
  // Function to scroll to solution section
  const scrollToSolution = () => {
    if (solutionSectionRef.current) {
      solutionSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (contentRef.current) {
      const elements = contentRef.current.children;
      
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

    // Second section animation
    if (secondSectionRef.current) {
      const elements = secondSectionRef.current.children;
      
      // Set initial state - slide from right
      gsap.set(elements, {
        x: 100,
        opacity: 0
      });

      ScrollTrigger.create({
        trigger: secondSectionRef.current,
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Change this URL to customize the background image
  const backgroundImageUrl = "/airtaxi.jpg"; // Default image from public folder
  
  return (
    <>
      <div className="min-h-screen relative overflow-x-hidden">

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('./mission-hero-bg.png')`,
          top: '4rem', // Push background down to account for navbar height
        }}
      >
        {/* Light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Content area - ready for your content */}
      <div className="relative z-10 flex items-center justify-start min-h-screen px-2 xs:px-4 sm:px-8 w-full">
        <div ref={contentRef} className="w-full max-w-full xs:max-w-lg sm:max-w-xl">
          {/* Mission Heading */}
          <h1 
            className="text-white max-w-full xs:max-w-xl mb-4 xs:mb-6"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(1.25rem, 3.2vw, 1.75rem)', // Reduced from clamp(1.5rem, 4vw, 2rem)
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              lineHeight: '1.2',
            }}
          >
            THE PROBLEM<br />
          </h1>
          
          {/* Sub Text - Clean and balanced typography */}
          <div 
            className="text-white/90 max-w-[600px] pr-4 sm:pr-8"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontSize: 'clamp(14px, 1.4vw, 18px)', // Reduced from clamp(16px, 1.8vw, 22px)
              fontWeight: '400',
              letterSpacing: '0.02em',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              lineHeight: '1.6', // Consistent line spacing
              textTransform: 'uppercase',
            }}
          >
            Traditional transport systems are overwhelmed—congested<br />
            roads, unpredictable delays, and limited emergency<br />
            mobility restrict both daily life and critical services.<br />
            As cities grow, time loss and inefficiency become<br />
            part of everyday travel.
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            {/* Explore Air Taxi Button */}
            <button 
              onClick={() => navigate('/air-taxi')}
              className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
            >
              {/* White hover animation background */}
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center">
                <span className="mr-3 group-hover:text-black transition-colors duration-500">Explore Air Taxi</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
              </div>
            </button>

            {/* Our Future Vision Button */}
            <button 
              onClick={() => navigate('/objectives')}
              className="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
            >
              {/* White hover animation background */}
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center">
                <span className="mr-3 group-hover:text-black transition-colors duration-500">Our Future Vision</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  {/* Second Section - The Problem We're Solving */}
  <div className="w-full h-screen relative flex items-center justify-end overflow-x-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co/9Hvwh46m/IMG-20250727-103216.webp')`, // Replace with your image URL
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
  <div ref={secondSectionRef} className="relative z-10 w-full px-4 sm:px-8 max-w-3xl text-right">
        <h2 
          className="text-white mb-6"
          style={{
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            lineHeight: '1.2',
          }}
        >
          You've Been Here Before
        </h2>
        
  <div className="w-32 h-0.5 bg-white mb-8 ml-auto"></div>
        
        {/* Mobile content (shorter) */}
  <div className="block sm:hidden">
          <div 
            className="text-white/90 leading-relaxed mb-12 space-y-3"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontSize: '0.875rem',
              fontWeight: '400',
              letterSpacing: '0.02em',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              lineHeight: '1.5',
            }}
          >
            <p className="font-semibold">Gridlocked streets. Soaring fuel costs.</p>
            <p>A 20-minute drive takes 90. Deadlines missed.</p>
            <p>Emergencies delayed. Lives at risk.</p>
            <p>Airports? No better — long lines, security checks, delays.</p>
            <p className="font-semibold text-red-400">Today's transport is slow, unpredictable, and outdated.</p>
          </div>
        </div>
        
        {/* Desktop content (original) */}
  <div className="hidden sm:block">
          <div 
            className="text-white/90 leading-relaxed mb-12 space-y-6"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontSize: '1rem',
              fontWeight: '400',
              letterSpacing: '0.02em',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              lineHeight: '1.6',
            }}
          >
            <div className="space-y-2">
              <p className="font-semibold">Gridlocked streets. Soaring fuel costs.</p>
              <p>A 20-minute drive takes 90. Deadlines missed.</p>
              <p>Emergencies delayed. Lives at risk.</p>
            </div>
            
            <div className="space-y-2">
              <p>Airports? No better — long lines, security checks, delays.</p>
            </div>
            
            <div className="space-y-2">
              <p>Whether it's your daily commute or a critical moment,</p>
              <p className="font-semibold">Today's transport is slow, unpredictable, and outdated.</p>
              <p className="text-red-400 font-semibold">It's costing us time, money — and sometimes, lives.</p>
            </div>
          </div>
        </div>
        
        {/* Call-to-Action Button */}
  <div className="flex justify-end">
          <button 
            onClick={scrollToSolution}
            className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-semibold tracking-wide transition-all duration-500 hover:border-white uppercase text-sm overflow-hidden"
          >
            {/* White hover animation background */}
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            
            {/* Button content */}
            <div className="relative z-10 flex items-center">
              <span className="mr-3 group-hover:text-black transition-colors duration-500">See Our Solution</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 group-hover:text-black transition-all duration-500" />
            </div>
          </button>
        </div>
      </div>
    </div>
    
    {/* Before vs After Comparison Section */}
    <div ref={comparisonRef} className="w-full h-auto min-h-screen bg-black flex items-center justify-center px-0 sm:px-8 overflow-x-hidden">
      <div className="flex flex-col md:flex-row w-full mx-auto overflow-hidden gap-4 md:gap-0">
        
        {/* Before Box */}
        <div className="before-box bg-black border-2 border-white/30 h-80 flex-1 flex flex-col items-center justify-center p-6 sm:p-8 space-y-4 transform transition-all duration-700 ease-in-out hover:flex-[1.5] hover:translate-x-2 hover:shadow-2xl hover:border-white cursor-pointer relative overflow-hidden group min-w-0">
          {/* White hover animation background */}
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-in-out"></div>
          
          {/* Content */}
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

        {/* After Box */}
        <div className="after-box bg-black border-2 border-white/30 h-80 flex-1 flex flex-col items-center justify-center p-6 sm:p-8 space-y-4 transform transition-all duration-700 ease-in-out hover:flex-[1.5] hover:-translate-x-2 hover:shadow-2xl hover:border-white cursor-pointer relative overflow-hidden group min-w-0">
          {/* White hover animation background */}
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-in-out"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center space-y-4 transform group-hover:scale-105 transition-transform duration-500">
            <h2 className="text-white text-xl font-semibold tracking-wider uppercase group-hover:text-black transition-colors duration-700">
              After
            </h2>
            <p className="text-gray-300 text-base leading-relaxed text-center px-2 group-hover:text-black transition-colors duration-700">
              AIRAVATH air taxi flying directly to destination
            </p>
            <div className="text-white text-4xl font-bold leading-none group-hover:text-black transition-colors duration-700">
              15 Minutes
            </div>
            <p className="text-gray-400 text-base tracking-wide uppercase group-hover:text-black transition-colors duration-700">
              AIRAVATH Solution
            </p>
          </div>
        </div>

      </div>
    </div>
    
    {/* Fourth Section - Our Services & Infrastructure */}
    <div ref={solutionSectionRef} className="w-full min-h-screen relative flex items-center justify-center py-8 sm:py-16 overflow-x-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co/dybMFS0/IMG-20250727-112558.webp')`, // Replace with your image URL
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center w-full px-0 sm:px-8 mx-auto">
        <h2 className="text-white text-4xl font-bold mb-4 uppercase tracking-wider">
          Our vision & solution
        </h2>
        <div className="w-32 h-0.5 bg-white mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          
          {/* Point-to-Point Air Travel */}
          <div className="bg-transparent border border-white/30 p-6 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-3">🚁</div>
            <h3 className="text-white text-lg font-semibold mb-3 uppercase tracking-wide">
              Point-to-Point Air Travel
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Say goodbye to traffic delays. Our air taxis offer direct, uninterrupted city-to-city and intra-city routes — fast, precise, and hassle-free.
            </p>
          </div>

          {/* Emergency Air Services */}
          <div className="bg-transparent border border-white/30 p-6 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-3">🆘</div>
            <h3 className="text-white text-lg font-semibold mb-3 uppercase tracking-wide">
              Emergency Air Services
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Designed for critical moments, our emergency response crafts ensure rapid airlift services when time is everything.
            </p>
          </div>

          {/* Vertiport & Ground Hub Network */}
          <div className="bg-transparent border border-white/30 p-6 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-3">🛬</div>
            <h3 className="text-white text-lg font-semibold mb-3 uppercase tracking-wide">
              Vertiport & Ground Hub Network
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              We're building a dense network of vertiports and ground ports for smooth and efficient sky-to-ground transitions.
            </p>
          </div>

          {/* Future-Ready Tech Ecosystem */}
          <div className="bg-transparent border border-white/30 p-6 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="text-white text-lg font-semibold mb-3 uppercase tracking-wide">
              Future-Ready Tech Ecosystem
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Our infrastructure is built to integrate with next-gen mobility solutions, ensuring long-term compatibility and intelligent automation.
            </p>
          </div>

          {/* Hospital Helipad Integration */}
          <div className="bg-transparent border border-white/30 p-6 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-3">🏥</div>
            <h3 className="text-white text-lg font-semibold mb-3 uppercase tracking-wide">
              Hospital Helipad Integration
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Strategically placed helipads on local hospitals enable immediate medical airlifts — bridging time-sensitive care gaps.
            </p>
          </div>

          {/* Statewide Helipad Connectivity */}
          <div className="bg-transparent border border-white/30 p-6 hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-white text-lg font-semibold mb-3 uppercase tracking-wide">
              Extensive Connectivity 
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              We build seamless connectivity across groundports and vertiports — laying the foundation for a robust regional air mobility network.
            </p>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Mission;
