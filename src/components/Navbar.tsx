import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useResponsive } from '@/hooks/use-responsive';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const responsive = useResponsive();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/air-taxi', label: 'AIR MOBILITY' },
    { path: '/vehicle', label: 'SOLUTIONS' },
    { path: '/about', label: 'ABOUT' },
    { path: '/objectives', label: 'TIME LINE' },
    { path: '/contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8; // 80% of viewport height
      
      // Set scrolled state when past hero section
      setScrolled(currentScrollY > heroHeight);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (path: string) => {
    if (path === '/air-taxi') {
      // If already on air-taxi page, scroll to services section
      if (location.pathname === '/air-taxi') {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to air-taxi page with hash to trigger services scroll
        navigate('/air-taxi');
        // Use timeout to ensure the page has loaded before scrolling
        setTimeout(() => {
          const servicesSection = document.getElementById('services-section');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Navigate to other pages
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getNavbarHeight = () => {
    if (responsive.isVerySmall) return 'h-12';
    if (responsive.isExtraSmall) return 'h-14';
    if (responsive.isSmall) return 'h-14';
    return 'h-14 sm:h-16';
  };

  const getLogoSize = () => {
    if (responsive.isVerySmall) return { maxWidth: '80px', height: '20px', maxHeight: '20px' };
    if (responsive.isExtraSmall) return { maxWidth: '100px', height: '24px', maxHeight: '24px' };
    if (responsive.isSmall) return { maxWidth: '120px', height: '28px', maxHeight: '28px' };
    return { 
      maxWidth: 'clamp(120px, 15vw, 160px)', 
      height: 'clamp(28px, 4vw, 40px)', 
      maxHeight: '40px' 
    };
  };

  const getPadding = () => {
    if (responsive.isVerySmall) return 'px-2';
    if (responsive.isExtraSmall) return 'px-3';
    if (responsive.isSmall) return 'px-4';
    return 'px-4 sm:px-6 lg:px-8';
  };

  // Check if current page is Vehicle
  const isVehiclePage = location.pathname === '/vehicle';
  const isObjectivesPage = location.pathname === '/objectives';

  return (
    <>
      {/* Premium Navbar - Transparent in hero, White after scroll */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
              >
                {/* Logo Icon */}
                <div className="w-24 h-12 sm:w-32 sm:h-14 lg:w-40 lg:h-16 flex items-center justify-center">
                  <img 
                    src="/aira-vath-logo.png" 
                    alt="AIRAVATH" 
                    className="w-full h-full object-contain transition-all duration-500"
                    style={{ filter: (scrolled || isObjectivesPage) ? 'none' : 'brightness(0) invert(1)' }}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8 xl:space-x-12">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`relative text-sm font-medium tracking-wider transition-all duration-500 py-2 group ${
                      (scrolled || isObjectivesPage)
                        ? 'text-slate-700 hover:text-slate-900' 
                        : 'text-white/90 hover:text-white'
                    } ${
                      location.pathname === item.path 
                        ? ((scrolled || isObjectivesPage) ? 'text-slate-900' : 'text-white') 
                        : ''
                    }`}
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      letterSpacing: '0.1em',
                    }}
                  >
                    {item.label}
                    {/* Active/Hover Underline */}
                    <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                      (scrolled || isObjectivesPage) ? 'bg-slate-900' : 'bg-white'
                    } ${
                      location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Globe & Hamburger */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Globe Icon - Desktop */}
              <button 
                className={`hidden lg:flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-500 ${
                  (scrolled || isObjectivesPage)
                    ? 'border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400' 
                    : 'border-white/30 text-white/80 hover:text-white hover:border-white/60'
                }`}
                aria-label="Language selector"
              >
                <Globe size={18} />
              </button>

              {/* Premium Hamburger Menu Button */}
              <button
                onClick={toggleMenu}
                className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 transition-all duration-500 ${
                  (scrolled || isObjectivesPage)
                    ? 'border-slate-800 bg-slate-800 text-white hover:bg-slate-900' 
                    : 'border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50'
                }`}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? (
                  <X size={20} strokeWidth={2} />
                ) : (
                  <Menu size={20} strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 transition-opacity duration-500 backdrop-blur-md"
          onClick={closeMenu}
        />
      )}

      {/* Premium Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform transition-all duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`}
      >
        <div className="flex flex-col h-full">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between px-6 sm:px-8 h-20 lg:h-24">
            {/* Logo in menu */}
            <Link 
              to="/" 
              className="flex items-center gap-2"
              onClick={closeMenu}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10">
                <img 
                  src="/aira-vath-logo.png" 
                  alt="AIRAVATH" 
                  className="w-full h-full object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <span className="text-white font-bold tracking-wide text-lg sm:text-xl">
                AIRAVATH
              </span>
            </Link>
            
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={2} />
            </button>
          </div>

          {/* Menu Items - Centered */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 -mt-10">
            <nav className="flex flex-col items-center space-y-6 sm:space-y-8">
              {/* Home Link */}
              <button
                onClick={() => { navigate('/'); closeMenu(); }}
                className={`text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 hover:text-white transition-all duration-300 tracking-wide ${
                  location.pathname === '/' ? 'text-white' : ''
                }`}
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  letterSpacing: '0.05em',
                }}
              >
                HOME
              </button>
              
              {navItems.map((item, index) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 hover:text-white transition-all duration-300 tracking-wide transform ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  } ${location.pathname === item.path ? 'text-white' : ''}`}
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    letterSpacing: '0.05em',
                    transitionDelay: isMenuOpen ? `${(index + 1) * 0.08}s` : '0s',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Bottom Section - Social & Language */}
          <div className="px-6 sm:px-8 py-8 flex items-center justify-between border-t border-white/10">
            <div className="flex items-center gap-4">
              <button 
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white/60 transition-all duration-300"
                aria-label="Language selector"
              >
                <Globe size={18} />
              </button>
              <span className="text-white/60 text-sm">English</span>
            </div>
            
            <p className="text-white/40 text-sm">
              © 2025 AIRAVATH
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
