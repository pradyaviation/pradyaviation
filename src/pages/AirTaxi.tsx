import { ArrowRight, Play, Zap, TrendingUp, Shield, Users, Plane, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const AirTaxi = () => {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      
      {/* SECTION 1: Hero Image */}
      <section className="relative h-screen md:h-[70vh] overflow-hidden mt-0 pt-0">
        <div 
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a52] to-[#2d5f7f]"></div>
          {/* Mobile Background */}
          <img 
            src="./mobile-airtaxi-bg.jpg" 
            alt="Air Taxi" 
            className="md:hidden w-full h-full object-cover opacity-80"
          />
          {/* Desktop Background */}
          <img 
            src="./airtaxi-bg.png" 
            alt="Air Taxi" 
            className="hidden md:block w-full h-full object-cover opacity-80"
          />
        </div>
      </section>

      {/* SECTION 2: VOLOCITY Details */}
      <section className="hidden md:block relative bg-white py-20 rounded-t-[3rem] -mt-20 md:-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight uppercase" style={{ color: '#0B1B3D' }}>
              NEXT-GEN AIR MOBILITY
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed mb-12">
              unlocking new market potential
            </p>

            {/* Before & After Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              {/* Before */}
              <div>
                <div className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-4">BEFORE</div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 leading-relaxed">
                  Ground transportation stuck in traffic
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-bold text-gray-900">2+</span>
                  <span className="text-2xl font-light text-gray-700">Hours</span>
                </div>
                <p className="text-gray-600 font-light">Traditional Transport</p>
              </div>

              {/* After */}
              <div>
                <div className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-4">AFTER</div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 leading-relaxed">
                  AIRAVATH air taxi flying directly to destination
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-bold text-gray-900">15</span>
                  <span className="text-2xl font-light text-gray-700">Minutes</span>
                </div>
                <p className="text-gray-600 font-light">AIRAVATH Solution</p>
              </div>
            </div>
          </div>

          {/* VoloCity Specs */}
          <div className="mb-20">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0B1B3D' }}>
                IN FOCUS: AIRAVATH              </h2>
              <h3 className="text-2xl md:text-3xl text-gray-600 font-light mb-6">
                built for the modern city
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Designed for dense urban environments, the Airavath Air Taxi redefines short-range aerial travel with a focus on passenger comfort and operational efficiency. Optimized for city routes, it enables fast point-to-point movement while upholding high safety standards. Its fully electric design ensures quiet, eco-friendly operation, making it a practical solution for next-generation urban mobility.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#0B1B3D' }}>340km</div>
                  <p className="text-gray-600 text-sm">Maximum Range</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#0B1B3D' }}>220</div>
                  <p className="text-gray-600 text-sm">km/h Top Speed</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#0B1B3D' }}>4+</div>
                  <p className="text-gray-600 text-sm">Passengers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#0B1B3D' }}>06</div>
                  <p className="text-gray-600 text-sm">Rotors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VOLOREGION - Video Section */}
      <section className="hidden md:block relative h-screen overflow-hidden -mt-20">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${(scrollY - 1000) * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute inset-0 bg-black"></div>
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="./videos/Future_infrastructure_vertiports_20250724205.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-6 md:px-12">
          <div 
            className="space-y-6"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 1000) * 0.3)}px)`,
              opacity: Math.min(1, Math.max(0, (scrollY - 800) / 300))
            }}
          >
          </div>
        </div>
      </section>

      {/* SECTION 4: VOLOREGION Details */}
      <section className="hidden md:block relative bg-white py-10 md:py-20 md:rounded-t-[3rem] md:-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Platform Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="./airtaxi 2s.jpg" 
                  alt="eVTOL Aircraft" 
                  className="w-full rounded-3xl shadow-xl"
                />
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Plane className="mx-auto mb-2 text-gray-600" size={24} />
                    <p className="text-sm font-semibold text-gray-700">Zero Emission</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Zap className="mx-auto mb-2 text-gray-600" size={24} />
                    <p className="text-sm font-semibold text-gray-700">300+ km range</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Users className="mx-auto mb-2 text-gray-600" size={24} />
                    <p className="text-sm font-semibold text-gray-700">4-5 Passengers</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#0B1B3D' }}>
                  PLATFORM
                </h2>
                <h3 className="text-2xl text-gray-600 font-light mb-6">
                  The vehicle
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Capable of providing true eVTOL mobility by CTOL electric aircraft designed for sustainable, efficient, and scalable urban transportation with cutting-edge electric propulsion systems.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our platform represents the convergence of aerospace innovation and environmental responsibility, designed specifically for the demands of modern urban air mobility.
                </p>
                <button 
                  onClick={() => navigate('/vehicle')}
                  className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-full transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#0B1B3D' }}
                >
                  <span className="mr-2">LEARN MORE</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Starting in Europe Section */}
          <div className="mb-20">
            <div className="py-12 px-6 bg-gray-100 rounded-3xl">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0B1B3D' }}>
                    STARTING IN
                  </h2>
                  <h3 className="text-5xl font-bold mb-2" style={{ color: '#0B1B3D' }}>
                    INDIA
                  </h3>
                </div>
                
                <div className="lg:w-1/2">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We are launching in India, leveraging its growing urban infrastructure, supportive regulations, and focus on sustainable mobility. Our plan includes starting in major cities, expanding to key economic hubs, partnering with aviation authorities, and building a scalable air mobility network.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>Launching operations in Andhra Pradesh and Telangana</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>Expand into key economic hubs nationwide</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>Collaborate with aviation authorities and government bodies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>Building a scalable, sustainable air mobility network</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Mission - With Parallax Background */}
      <section className="hidden md:block relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white"
          style={{
            transform: `translateY(${(scrollY - 2500) * 0.3}px)`
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* On A Mission Section */}
          <div className="mb-20">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0B1B3D' }}>
                ON A MISSION
              </h2>
              <h3 className="text-2xl md:text-3xl text-gray-600 font-light mb-6">
                for Future aviation
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We are building a new layer of urban transportation that lifts mobility above the ground. By deploying electric vertical flight, we aim to reduce road dependence, cut emissions, and enable faster, smarter movement across cities—reshaping how people and services travel in the modern world.
              </p>
              <button 
                onClick={() => navigate('/mission')}
                className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-full transition-all hover:shadow-lg"
                style={{ backgroundColor: '#0B1B3D' }}
              >
                <span className="mr-2">READ MORE</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: 360-Degree Approach */}
      <section className="hidden md:block relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-6"
        >
          <div className="py-12 px-6 bg-gray-50 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#0B1B3D' }}>
                A 360-DEGREE APPROACH
              </h2>
              <p className="text-xl text-gray-600 font-light">
                Technological, Regulatory, and Societal Efforts
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                    <Zap className="text-blue-600" size={32} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-center" style={{ color: '#0B1B3D' }}>
                  Pioneering battery electric aviation
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Over 200+ kW are currently flying in our eVTOL, providing a baseline for electric aviation's scalable future with improved energy efficiency, safety, and zero emissions.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <TrendingUp className="text-green-600" size={32} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-center" style={{ color: '#0B1B3D' }}>
                  Leading the way in innovation
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Advanced R&D driving the future of sustainable aviation through cutting-edge technology, continuous improvement, and revolutionary designs that redefine air travel.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center">
                    <Shield className="text-purple-600" size={32} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-center" style={{ color: '#0B1B3D' }}>
                  Pushing regulatory boundaries
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Working to define the novel regulatory framework needed to safely operate in urban and regional airspace with authorities worldwide.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                    <Users className="text-orange-600" size={32} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-center" style={{ color: '#0B1B3D' }}>
                  Collaborative integration development
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We partner to integrate air mobility within existing transport systems, ensuring seamless multimodal connectivity and enhanced accessibility.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                    <Plane className="text-red-600" size={32} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-center" style={{ color: '#0B1B3D' }}>
                  Air taxi development
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Focused on eVTOL aircraft design optimized for urban air mobility networks with safety, efficiency, and passenger comfort at the forefront.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center">
                    <Building2 className="text-teal-600" size={32} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-center" style={{ color: '#0B1B3D' }}>
                  Infrastructure on demand
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We are supporting the buildout of vertiports and charging stations to create a robust air taxi network across major urban areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA - Final Section */}
      <section className="hidden md:block relative bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="py-12 px-6 bg-gradient-to-br from-gray-900 to-black rounded-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing urban transportation with sustainable air mobility solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center px-8 py-3 bg-white text-navy-900 font-semibold rounded-full transition-all hover:shadow-lg hover:scale-105"
              >
                <span className="mr-2">CONTACT US</span>
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full transition-all hover:bg-white hover:text-navy-900"
              >
                <span className="mr-2">LEARN MORE</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirTaxi;
