
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Plane, Target, Users, Zap, Phone } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for styling
      setScrolled(currentScrollY > 50);
      
      // Show/hide menu button based on scroll direction
      if (currentScrollY < 100) {
        // Always show at the top
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide menu button
        setVisible(false);
      } else {
        // Scrolling up - show menu button
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/mission', label: 'Our Mission' },
    { path: '/air-taxi', label: 'Services' },
    
    { path: '/objectives', label: 'Future Objectives' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (path: string) => {
    // Special handling for Services to scroll to services section
    if (path === '/air-taxi') {
      // If already on air-taxi page, scroll to services section
      if (location.pathname === '/air-taxi') {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to air-taxi page and scroll to services section
        window.location.href = '/air-taxi#services';
      }
    } else {
      // Scroll to top when navigating to other pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  const handleGeneralNavClick = () => {
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <>
      {/* Mobile slide-in menu is now controlled by Navbar component */}
    </>
  );
};

export default Navigation;
