
import { Link } from 'react-router-dom';
import { 
  ChevronUp, 
  Instagram, 
  Facebook, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Plane
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Technology', path: '/technology' },
    { name: 'Careers', path: '/careers' },
    { name: 'News', path: '/news' },
    { name: 'Objectives', path: '/objectives' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Safety Standards', path: '/safety' }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/airavath',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Facebook', 
      icon: Facebook,
      url: 'https://facebook.com/airavath',
      color: 'hover:text-blue-500'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/airavath',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <footer className="bg-black border-t border-zinc-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info - Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/aira-vath-logo.png" 
                  alt="AIRAVATH" 
                  className="h-5 w-auto sm:h-6 lg:h-16 object-contain"
                  onError={(e) => {
                    // Fallback to text logo if image fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden">
                  <div className="flex items-center space-x-2">
                    <Plane className="h-4 w-4 lg:h-10 lg:w-10 text-blue-500" />
                    <span className="text-base lg:text-3xl font-bold text-white">AIRAVATH</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-zinc-300 text-sm lg:text-base leading-relaxed max-w-lg">
                Leading the future of urban air mobility with cutting-edge eVTOL technology. 
                Revolutionizing transportation through sustainable, efficient, and safe aerial solutions 
                for modern cities.
              </p>
            
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm lg:text-base">Follow Us</h4>
              <div className="flex space-x-3 lg:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-transparent lg:bg-zinc-900 border-2 border-white lg:border-zinc-700 rounded-full hover:bg-white/10 lg:hover:bg-zinc-800 lg:hover:border-zinc-500 transition-all duration-300 group hover:scale-110"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon size={18} className="lg:w-6 lg:h-6 text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 lg:space-y-6">
            {/* Mobile: Two separate sections side by side */}
            <div className="grid grid-cols-2 gap-x-8 lg:block lg:space-y-6">
              {/* Quick Links Column */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-4 lg:mb-6">Quick Links</h4>
                <nav className="space-y-1 lg:space-y-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="group flex items-center text-zinc-400 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                    >
                      <ArrowRight size={12} className="lg:size-[14px] mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      <span className="group-hover:translate-x-2 transition-transform duration-200">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
              
              {/* Legal Links Column */}
              <div className="lg:pt-4 lg:border-t lg:border-zinc-800">
                <h4 className="text-white font-semibold text-lg mb-4 lg:mb-3 lg:hidden">Legal</h4>
                <h5 className="text-zinc-300 font-medium text-sm mb-2 lg:mb-3 hidden lg:block">Legal</h5>
                <nav className="space-y-1 lg:space-y-2">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block text-zinc-500 hover:text-zinc-300 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Get In Touch</h4>
            
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-white mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-zinc-400 text-sm">Email</p>
                  <a 
                    href="mailto:info@airavath.com" 
                    className="text-zinc-200 hover:text-white transition-colors"
                  >
                    info@airavath.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-white mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-zinc-400 text-sm">Phone</p>
                  <a 
                    href="tel:+1-555-AIRAVATH" 
                    className="text-zinc-200 hover:text-white transition-colors"
                  >
                    +1 (555) AIRAVATH
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-white mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-zinc-400 text-sm">Address</p>
                  <address className="text-zinc-200 not-italic text-sm leading-relaxed">
                    Innovation District<br />
                    Tech Hub Center<br />
                    Silicon Valley, CA 94025
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
            
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <span className="text-zinc-400 text-sm font-mono">
                © {currentYear} AIRAVATH. All rights reserved.
              </span>
              <div className="hidden sm:block h-4 w-px bg-zinc-700"></div>
              <span className="text-zinc-500 text-xs font-mono">
                v2.0.0 | Built for the future
              </span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-all duration-200 group hover:scale-105"
              aria-label="Back to top"
            >
              <ChevronUp 
                size={18} 
                className="text-zinc-400 group-hover:text-zinc-200 group-hover:-translate-y-0.5 transition-all duration-200" 
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
