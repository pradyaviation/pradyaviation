
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-screen z-0">
        {/* Mobile Background */}
        <img 
          src="/mobile-about-bg.png" 
          alt="AIRAVATH" 
          className="md:hidden w-full h-full object-cover"
        />
        {/* Desktop Background */}
        <img 
          src="/IMG_20251228_203444.jpg" 
          alt="AIRAVATH" 
          className="hidden md:block w-full h-full object-cover"
        />
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10">
        {/* Spacer to show the image first - reduced to show white layer sooner */}
        <div className="h-[60vh] md:h-[70vh]"></div>
        
        {/* White Content Section */}
        <div className="bg-white rounded-t-[3rem] shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-16">
            
            {/* From Prototype to Pioneer Section */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left - Title and Image */}
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 uppercase tracking-wider">
                    FROM VISION
                  </h2>
                  <p className="text-xl md:text-3xl text-gray-600 mb-8 font-light">
                    to reality
                  </p>
                  
                  <div className="rounded-t-3xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070" 
                      alt="AIRAVATH Facility" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Right - Description Text */}
                <div className="lg:pl-8 lg:pt-24">
                  {/* Mobile Description */}
                  <p className="md:hidden text-base text-gray-700 leading-relaxed">
                    At Airavath, our name unites heritage and vision. Inspired by Lord Indra's white elephant, it symbolizes strength, guardianship, and connection—values reflected in our commitment to safety, AI-driven innovation, sustainable aviation, and global connectivity.
                  </p>
                  
                  {/* Desktop Description */}
                  <div className="hidden md:block">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                      A VISIONARY TEAM REVOLUTIONIZING URBAN MOBILITY THROUGH THE SKIES WITH LUXURIOUS, MEDICALLY-EQUIPPED AIR TAXIS — FROM EMERGENCY CARE TO EXECUTIVE TRAVEL.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      AT AIRAVATH, OUR NAME UNITES HERITAGE AND VISION. INSPIRED BY THE MYTHICAL WHITE ELEPHANT OF LORD INDRA, IT SYMBOLIZES STRENGTH, GUARDIANSHIP, AND CONNECTION — PRINCIPLES WE BRING TO MODERN AVIATION. STRENGTH & RELIABILITY: Trust, protection, and safety in the skies. INNOVATION: AI-driven solutions shaping the future of aviation. SUSTAINABILITY: Eco-friendly, safe, and responsible aerospace. GLOBAL CONNECTIVITY: Bridging people, places, and possibilities through flight.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Where The Magic Happens Section */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image - Shows first on mobile, right on desktop */}
                <div className="rounded-t-3xl overflow-hidden shadow-lg lg:order-2 mb-8 lg:mb-0">
                  <img 
                    src="/IMG_20251228_211947.jpg" 
                    alt="Office Space" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Title and Description - Shows second on mobile, left on desktop */}
                <div className="lg:order-1">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 uppercase tracking-wider">
                    YOU'VE BEEN HERE<br />BEFORE
                  </h2>

                  {/* Problem Description */}
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-sm md:text-base">Gridlocked streets. Soaring fuel costs.</p>
                    <p className="text-sm md:text-base">A 20-minute drive takes 90. Deadlines missed.</p>
                    <p className="text-sm md:text-base">Emergencies delayed. Lives at risk.</p>
                    <p className="text-sm md:text-base">Airports? No better — long lines, security checks, delays.</p>
                    <p className="text-sm md:text-base">Whether it's your daily commute or a critical moment,</p>
                    <p className="text-sm md:text-base">Today's transport is slow, unpredictable, and outdated.</p>
                    <p className="text-sm md:text-base font-semibold">It's costing us time, money — and sometimes, lives.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Problem Section */}
            <div className="mb-20 md:mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left - Image */}
                <div className="rounded-t-3xl overflow-hidden shadow-lg">
                  <img 
                    src="/IMG_20251228_214716.jpg" 
                    alt="The Problem" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right - Description Text */}
                <div className="lg:pl-8">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 uppercase tracking-wider">
                    THE PROBLEM
                  </h2>
                  <p className="text-base md:text-lg text-blue-600 leading-relaxed">
                    Traditional transport systems are overwhelmed—congested roads, unpredictable delays, and limited emergency mobility restrict both daily life and critical services. As cities grow, time loss and inefficiency become part of everyday travel.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Believe Section */}
            <div className="mb-16 mt-16 md:mt-0">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 uppercase tracking-wider">
                Our Core Beliefs
              </h2>

              {/* Belief Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                
                {/* Card 1 - Time & Access */}
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-5 md:p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 uppercase tracking-wide">
                    Time & Access
                  </h3>
                  <p className="text-base md:text-lg text-gray-800 mb-4 md:mb-6 font-semibold">
                    Time Should Be Respected
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">Air mobility should save time, not just cost more.</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">Emergency access should never be delayed.</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">The faster we move, the more lives we empower.</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Vision & Future */}
                <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 rounded-lg p-5 md:p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 uppercase tracking-wide">
                    Vision & Future
                  </h3>
                  <p className="text-base md:text-lg text-gray-800 mb-4 md:mb-6 font-semibold">
                    The Sky Is Our Starting Point
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">The future of transport is above us.</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">Every rooftop can become a launchpad.</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">Cities must grow vertically — not just outward.</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Purpose & Equality */}
                <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 rounded-lg p-5 md:p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 uppercase tracking-wide">
                    Purpose & Equality
                  </h3>
                  <p className="text-base md:text-lg text-gray-800 mb-4 md:mb-6 font-semibold">
                    Mobility Is for Everyone
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">Flying shouldn't be a luxury.</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">It should be accessible, sustainable, and life-saving.</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">Our mission is built on purpose, not privilege.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* AIRAVATH Heritage Section */}
            <div className="hidden md:block bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 md:p-12">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                AT AIRAVATH, OUR NAME UNITES HERITAGE AND VISION. INSPIRED BY THE MYTHICAL WHITE ELEPHANT OF LORD INDRA, IT SYMBOLIZES STRENGTH, GUARDIANSHIP, AND CONNECTION — PRINCIPLES WE BRING TO MODERN AVIATION.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">STRENGTH & RELIABILITY:</h4>
                  <p className="text-gray-700">Trust, protection, and safety in the skies.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">INNOVATION:</h4>
                  <p className="text-gray-700">AI-driven solutions shaping the future of aviation.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">SUSTAINABILITY:</h4>
                  <p className="text-gray-700">Eco-friendly, safe, and responsible aerospace.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">GLOBAL CONNECTIVITY:</h4>
                  <p className="text-gray-700">Bridging people, places, and possibilities through flight.</p>
                </div>
              </div>
            </div>

            {/* Investment Section */}
            <div className="mt-20 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 uppercase tracking-wider">
                SHAPE THE FUTURE WITH US
              </h2>
              <p className="text-2xl md:text-3xl text-gray-600 mb-12 font-light">
                by supporting us today
              </p>
              
              <div className="max-w-4xl mx-auto rounded-t-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" 
                  alt="Air Taxi Future" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
