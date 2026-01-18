
import { useEffect } from 'react';

const Objectives = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const objectives = [
    {
      number: '01',
      title: 'PILOT PROGRAM & ACQUISITION',
      description: '2 cities, services & emergency medical transport priority. Launch pilot operations in Andhra Pradesh & Telangana. Acquire and deploy initial AirTaxi fleet. Partner with hospitals and vertiports.',
      color: 'from-orange-400 to-orange-500',
      side: 'left',
      year: '2027'
    },
    {
      number: '02',
      title: 'SERVICE LAUNCH',
      description: 'Andhra Pradesh & Telangana — full commercial AirTaxi operations begin. Emergency medical and premium travel routes. Integration with vertiport network. 24/7 service availability.',
      color: 'from-indigo-500 to-indigo-600',
      side: 'right',
      year: '2027'
    },
    {
      number: '03',
      title: 'NATIONWIDE EXPANSION',
      description: 'Pan-India rollout of AirTaxi services. Operations in all major cities. Expanded fleet for high-demand routes. Nationwide vertiport connectivity.',
      color: 'from-red-500 to-red-600',
      side: 'left',
      year: '2028'
    },
    {
      number: '04',
      title: 'GLOBAL OPERATIONS',
      description: 'Home helipads and integrated healthcare ecosystem. Residential helipad installations, Direct home-to-hospital, office etc... to anywhere transport, Integrated health monitoring, Smart city infrastructure.',
      color: 'from-blue-600 to-blue-700',
      side: 'right',
      year: '2029'
    },
    {
      number: '05',
      title: 'INNOVATION & SUSTAINABILITY',
      description: 'Next-generation electric AirTaxis with enhanced range. AI-powered route optimization and safety systems. Carbon-neutral operations. Leading the future of urban air mobility.',
      color: 'from-teal-500 to-teal-600',
      side: 'left',
      year: '2030+'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-16">
          Our journey to revolutionize urban mobility
        </h1>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {objectives.map((objective, index) => (
              <div key={index} className="relative">
                {/* Number Circle - Center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 z-10 hidden md:flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-800 flex items-center justify-center shadow-xl">
                    <span className="text-lg font-bold text-gray-800">{objective.year}</span>
                  </div>
                  {index < objectives.length - 1 && (
                    <div className="flex flex-col items-center mt-2">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-gray-800 mb-2"></div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`flex items-center ${objective.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                  {/* Content Box */}
                  <div className={`w-full md:w-[45%] ${objective.side === 'left' ? 'md:pr-16 md:flex md:justify-end' : 'md:pl-16 md:flex md:justify-start'} ${objective.number === '05' ? 'md:pr-8' : ''}`}>
                    <div className={`relative bg-gradient-to-r ${objective.color} text-white px-8 py-4 shadow-lg transform hover:scale-105 transition-transform duration-300 inline-block`}
                      style={{
                        clipPath: objective.side === 'left' 
                          ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 10px 50%)' 
                          : 'polygon(0 0, 100% 0, calc(100% - 10px) 50%, 100% 100%, 0 100%)'
                      }}
                    >
                      <h3 className="text-base md:text-xl font-bold uppercase tracking-wider whitespace-nowrap">{objective.title}</h3>
                    </div>
                  </div>

                  {/* Description Side */}
                  <div className={`w-full md:w-[45%] ${objective.side === 'left' ? 'md:pl-16 md:flex md:justify-start' : 'md:pr-16 md:flex md:justify-end'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">
                       
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {objective.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Number Circle */}
                <div className="flex md:hidden justify-center mt-8 mb-4">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-800 flex items-center justify-center shadow-xl">
                    <span className="text-base font-bold text-gray-800">{objective.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Dots */}
          <div className="flex justify-center gap-4 mt-16">
            {objectives.map((obj, index) => {
              const colorClasses = {
                'from-orange-400 to-orange-500': 'bg-orange-500',
                'from-indigo-500 to-indigo-600': 'bg-indigo-600',
                'from-red-500 to-red-600': 'bg-red-500',
                'from-blue-600 to-blue-700': 'bg-blue-700',
                'from-teal-500 to-teal-600': 'bg-teal-600'
              };
              return (
                <div key={index} className={`w-4 h-4 rounded-full ${colorClasses[obj.color as keyof typeof colorClasses]} shadow-md`}></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
