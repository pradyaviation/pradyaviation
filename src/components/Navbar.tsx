import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/mission', label: 'Our Mission' },
    { path: '/vehicle', label: 'Vehicle' },
    { path: '/air-taxi', label: 'Services' },
    { path: '/objectives', label: 'Future Objectives' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for styling
      setScrolled(currentScrollY > 50);
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < 100) {
        // Always show navbar at the top
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setVisible(false);
      } else {
        // Scrolling up - show navbar
        setVisible(true);
      }
      
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

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isVehiclePage 
          ? 'bg-transparent backdrop-blur-none shadow-none border-none' 
          : scrolled 
            ? 'lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:border-none bg-black/90 backdrop-blur-md shadow-xl border-b border-gray-700' 
            : 'bg-transparent backdrop-blur-none'
      }`}>
        <div className={`max-w-7xl mx-auto ${getPadding()}`}>
          <div className={`flex items-center justify-between ${getNavbarHeight()}`}>
            {/* Logo */}
            <div className="flex-shrink-0 py-1 sm:py-2">
              <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
                <img 
                  src="/aira-vath-logo.png" 
                  alt="AIRAVATH Logo" 
                  className="w-auto object-contain"
                  style={getLogoSize()}
                />
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button - Hidden on desktop */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className={`rounded-md text-white hover:text-gray-300 transition-colors touch-manipulation ${
                  responsive.isVerySmall ? 'p-1' : 'p-2'
                }`}
                aria-label="Toggle navigation menu"
                style={{ minHeight: '48px', minWidth: '48px' }}
              >
                {isMenuOpen ? (
                  <X size={responsive.isVerySmall ? 18 : responsive.isExtraSmall ? 20 : 24} />
                ) : (
                  <Menu size={responsive.isVerySmall ? 18 : responsive.isExtraSmall ? 20 : 24} />
                )}
              </button>
            </div>
            
            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 border-b-2 hover:scale-105 ${
                      location.pathname === item.path
                        ? 'text-white border-white'
                        : 'text-gray-300 border-transparent hover:text-white hover:border-gray-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 lg:hidden backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      {/* Enhanced Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
          responsive.isVerySmall || responsive.isExtraSmall ? 'w-full' : 
          responsive.isSmall ? 'w-4/5 max-w-sm' : 
          'w-80'
        } bg-black/95 backdrop-blur-md border-l border-gray-700`}
      >
        <div className="flex flex-col h-full safe-area-padding">
          {/* Close Button */}
          <div className={`flex justify-end items-center ${
            responsive.isVerySmall ? 'p-3 h-12' : 
            responsive.isExtraSmall ? 'p-4 h-14' : 
            'p-4 h-16'
          }`}>
            <button
              onClick={closeMenu}
              className="text-white hover:text-gray-300 transition-colors touch-manipulation flex items-center justify-center rounded-md"
              style={{ minHeight: '48px', minWidth: '48px' }}
              aria-label="Close menu"
            >
              <X size={responsive.isVerySmall ? 18 : responsive.isExtraSmall ? 20 : 24} />
            </button>
          </div>

          {/* Menu Items */}
          <div className={`flex-1 flex flex-col justify-start ${
            responsive.isVerySmall ? 'px-4 py-2 space-y-2' : 
            responsive.isExtraSmall ? 'px-6 py-4 space-y-3' :
            'px-8 py-6 space-y-4'
          }`}>
            {navItems.map((item, index) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-right border-b border-gray-700 transition-all duration-300 ease-out group transform touch-manipulation ${
                  responsive.isVerySmall ? 'py-2' : 
                  responsive.isExtraSmall ? 'py-3' : 
                  'py-4'
                } ${
                  location.pathname === item.path
                    ? 'text-white border-white bg-white/5'
                    : 'text-gray-400 hover:text-white hover:border-gray-500 hover:bg-white/5'
                } ${
                  isMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-8 opacity-0'
                } rounded-lg`}
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  fontSize: responsive.isVerySmall ? '0.875rem' : 
                           responsive.isExtraSmall ? '1rem' : 
                           'clamp(0.875rem, 3vw, 1.125rem)',
                  fontWeight: '500',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transitionDelay: isMenuOpen ? `${(index + 1) * 0.1}s` : '0s',
                  transitionDuration: '0.4s',
                  minHeight: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: responsive.isVerySmall ? '1rem' : '1.5rem',
                  paddingLeft: responsive.isVerySmall ? '1rem' : '1.5rem',
                }}
              >
                {item.label}
              </button>
            ))}
            
            {/* Additional spacing for safe area on mobile devices with notches */}
            {responsive.hasNotch && (
              <div style={{ height: 'env(safe-area-inset-bottom)' }} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
