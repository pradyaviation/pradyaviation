import { ArrowRight, Play, Zap, TrendingUp, Shield, Users, Plane, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AirTaxi = () => {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      <style>
        {`
          /* Hide scrollbars */
          html, body {
            overflow-x: hidden;
          }
          
          /* Hide scrollbar for Chrome, Safari and Opera */
          *::-webkit-scrollbar {
            display: none;
          }
          
          /* Hide scrollbar for IE, Edge and Firefox */
          * {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>
      
      {/* Navigation with black text */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <style>
          {`
            /* Force black text for navbar on this page only */
            .navigation-container a,
            .navigation-container button,
            .navigation-container span {
              color: #000000 !important;
            }
            .navigation-container svg {
              stroke: #000000 !important;
            }
          `}
        </style>
        <div className="navigation-container">
          <Navigation />
        </div>
      </div>
      
      {/* First Layer - Fixed Background Image */}
      <div className="fixed inset-0 w-full h-screen z-0">
        <img 
          src="./airtaxi-bg.png" 
          alt="AIRAVATH Air Mobility" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10">
        {/* Spacer to show the first layer (background image) */}
        <div className="h-[60vh] md:h-[70vh]"></div>
        
        {/* Second Layer - Navy Blue Section with Video */}
        <div className="min-h-screen rounded-t-[3rem] shadow-2xl" style={{ backgroundColor: '#0B1B3D' }}>
          <div className="max-w-7xl mx-auto px-6 py-16">
            {/* Header with Icon */}
            <div className="mb-8">
              <div className="flex items-center gap-3 text-white/90 mb-6">
                <Building2 size={24} />
                <span className="text-lg md:text-xl font-light">Reimagine: Transforming Mobility</span>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl bg-black aspect-video max-w-5xl mx-auto">
              <video 
                className="w-full h-full object-cover"
                controls={isVideoPlaying}
                onClick={() => setIsVideoPlaying(true)}
              >
                <source src="./videos/Future_infrastructure_vertiports_20250724205.mp4" type="video/mp4" />
              </video>
              
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                  <div className="w-16 h-16 rounded-full bg-cyan-400/90 flex items-center justify-center hover:bg-cyan-400 transition-all transform hover:scale-110 shadow-lg shadow-cyan-500/50">
                    <Play size={28} className="text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Third Layer - White Content Section (Scrolls up over second layer) */}
        <div className="bg-white rounded-t-[3rem] shadow-2xl -mt-12">
          <div className="max-w-7xl mx-auto px-6 py-16">
            
            {/* Hero Section - Innovative Air Mobility */}
            <div className="mb-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight uppercase" style={{ color: '#0B1B3D' }}>
                INNOVATIVE AIR MOBILITY
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed mb-12">
                Unlocking vast, market potential
              </p>
            </div>

            {/* On A Mission Section */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0B1B3D' }}>
                ON A MISSION
              </h2>
              <h3 className="text-2xl md:text-3xl text-gray-600 font-light mb-6">
                to electrify aviation
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                We envision cities where congestion is almost unheard of, and commute times are slashed by urban air mobility. 
                Our electric vertical takeoff and landing (eVTOL) aircraft will revolutionize transportation, 
                making it faster, cleaner, and more efficient for everyone.
              </p>
              <button 
                onClick={() => navigate('/mission')}
                className="inline-flex items-center px-8 py-3 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: '#0B1B3D' }}
              >
                <span className="mr-2">READ MORE</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Fourth Layer - 360-Degree Approach */}
        <div className="bg-gray-50 rounded-t-[3rem] shadow-2xl -mt-12">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#0B1B3D' }}>
                A 360-DEGREE APPROACH
              </h2>
              <p className="text-xl text-gray-600 font-light">
                Technological, Regulatory, and Societal Efforts
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 - Pioneering battery electric aviation */}
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

              {/* Card 2 - Leading the way in innovation */}
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

              {/* Card 3 - Pushing regulatory boundaries */}
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

              {/* Card 4 - Collaborative integration development */}
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

              {/* Card 5 - Air taxi development */}
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

              {/* Card 6 - Infrastructure on demand */}
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

        {/* Fifth Layer - Platform Section */}
        <div className="bg-white rounded-t-[3rem] shadow-2xl -mt-12">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="./airtaxi 2s.jpg" 
                  alt="eVTOL Aircraft" 
                  className="w-full rounded-lg shadow-xl"
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
        </div>

        {/* Sixth Layer - Starting in Europe */}
        <div className="bg-gray-100 rounded-t-[3rem] shadow-2xl -mt-12">
          <div className="max-w-7xl mx-auto px-6 py-16">
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
                  We are starting our operations in Europe to leverage the region's advanced infrastructure, 
                  supportive regulatory environment, and commitment to sustainable transportation.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span>Launch in key EU cities with existing vertiport infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span>Expansion into major economic hubs across Europe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span>Partnerships with European aviation authorities and transport ministries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span>Building a sustainable and scalable air mobility network</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Seventh Layer - In Focus: Volocity */}
        <div className="bg-white rounded-t-[3rem] shadow-2xl -mt-12">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0B1B3D' }}>
              IN FOCUS: AIRAVATH            </h2>
            <h3 className="text-2xl md:text-3xl text-gray-600 font-light mb-6">
              built for the modern city
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl">
              Designed for dense urban environments, the Airavath Air Taxi redefines short-range aerial travel with a focus on passenger comfort and operational efficiency. Optimized for city routes, it enables fast point-to-point movement while upholding high safety standards. Its fully electric design ensures quiet, eco-friendly operation, making it a practical solution for next-generation urban mobility.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: '#0B1B3D' }}>35km</div>
                <p className="text-gray-600 text-sm">Maximum Range</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: '#0B1B3D' }}>110</div>
                <p className="text-gray-600 text-sm">km/h Top Speed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: '#0B1B3D' }}>2+</div>
                <p className="text-gray-600 text-sm">Passengers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: '#0B1B3D' }}>18</div>
                <p className="text-gray-600 text-sm">Rotors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Eighth Layer - CTA Section */}
        <section className="py-16 bg-black/90 backdrop-blur-md rounded-t-[3rem] shadow-2xl -mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        </section>
      </div>
      
      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default AirTaxi;
