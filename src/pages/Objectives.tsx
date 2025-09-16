
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Plane, Building, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Objectives = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const timeline = timelineRef.current;
    if (!timeline) return;

    // Enhanced timeline animation with individual milestone animations
    const timelineItems = timeline.querySelectorAll('.timeline-item');
    
    // Animate the main timeline line
    gsap.fromTo('.timeline-line', {
      scaleY: 0,
    }, {
      scaleY: 1,
      duration: 1.5,
      ease: 'power2.out',
      transformOrigin: 'top',
      scrollTrigger: {
        trigger: timeline,
        start: 'top 80%',
        end: 'bottom 20%',
      }
    });

    // Create individual animations for each milestone
    timelineItems.forEach((item, index) => {
      const isEven = index % 2 === 0;
      
      // Animate the timeline dot
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

      // Animate the content box with fade-in and slide-up
      gsap.fromTo(item.querySelector('.timeline-content'), {
        opacity: 0,
        y: 50,
        x: isEven ? -30 : 30,
      }, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      // Animate the icon with a subtle bounce
      gsap.fromTo(item.querySelector('.milestone-icon'), {
        scale: 0,
        rotation: 180,
      }, {
        scale: 1,
        rotation: 0,
        duration: 0.7,
        delay: 0.4,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      // Animate the details list items with stagger
      gsap.fromTo(item.querySelectorAll('.detail-item'), {
        opacity: 0,
        x: -20,
      }, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const milestones = [
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
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes dropDown {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      }} />
      
      <div className="min-h-screen bg-airavata-black pt-16">
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
          </div>        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-white to-white/30 rounded-full" style={{ opacity: 1, visibility: 'visible' }}></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`timeline-item relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-airavata-black z-10" style={{ opacity: 1, visibility: 'visible' }}></div>
                
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
    </div>
    </>
  );
};

export default Objectives;
