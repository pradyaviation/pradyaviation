
import { Link } from 'react-router-dom';
import { 
  ChevronUp, 
  Instagram, 
  Facebook, 
  Youtube, 
  Mail, 
  Phone, 
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
    <div className="bg-white border-t border-zinc-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-6">
          
          {/* Company Info - Logo & Description */}
          <div className="space-y-6">
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
                    <span className="text-base lg:text-3xl font-bold text-black">AIRAVATH</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-zinc-700 text-sm lg:text-base leading-relaxed max-w-lg">
                Leading the future of urban air mobility with cutting-edge eVTOL technology. 
                Revolutionizing transportation through sustainable, efficient, and safe aerial solutions 
                for modern cities.
              </p>
            
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-black font-semibold text-sm lg:text-base">Follow Us</h4>
              <div className="flex space-x-3 lg:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-transparent lg:bg-zinc-100 border-2 border-black lg:border-zinc-300 rounded-full hover:bg-black/10 lg:hover:bg-zinc-200 lg:hover:border-zinc-400 transition-all duration-300 group hover:scale-110"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon size={18} className="lg:w-6 lg:h-6 text-black transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Quick Links, Legal, and Get In Touch in one row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4 lg:pl-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-black font-semibold text-base lg:text-lg mb-3">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex items-center text-zinc-600 hover:text-black transition-colors duration-200 text-sm"
                  >
                    <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    <span className="group-hover:translate-x-2 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="text-black font-semibold text-base lg:text-lg mb-3">Legal</h4>
              <nav className="space-y-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex items-center text-zinc-600 hover:text-black transition-colors duration-200 text-sm"
                  >
                    <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    <span className="group-hover:translate-x-2 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-black font-semibold text-base lg:text-lg mb-3">Get In Touch</h4>
              
              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-start space-x-2">
                  <Mail size={16} className="text-black mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-zinc-600 text-xs">Email</p>
                    <a 
                      href="mailto:pradyaviation@gmail.com" 
                      className="text-zinc-800 hover:text-black transition-colors text-sm break-all"
                  >
                    pradyaviation@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-2">
                <Phone size={16} className="text-black mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-zinc-600 text-xs">Phone</p>
                  <a 
                    href="tel:+13213899564" 
                    className="text-zinc-800 hover:text-black transition-colors text-sm"
                  >
                    +1 (321) 389-9564
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-300 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
            
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <span className="text-zinc-700 text-sm font-mono">
                © {currentYear} AIRAVATH. All rights reserved.
              </span>
              <div className="hidden sm:block h-4 w-px bg-zinc-400"></div>
              <span className="text-zinc-600 text-xs font-mono">
                Designed & Developed By DREAM TEAM SERVICES
              </span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 bg-zinc-200 border border-zinc-400 hover:border-zinc-500 hover:bg-zinc-300 transition-all duration-200 group hover:scale-105"
              aria-label="Back to top"
            >
              <ChevronUp 
                size={18} 
                className="text-zinc-700 group-hover:text-black group-hover:-translate-y-0.5 transition-all duration-200" 
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
