import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  ChevronUp, 
  ChevronDown,
  Instagram, 
  Facebook, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Plane,
  ExternalLink
} from 'lucide-react';

const ResponsiveFooter = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
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
      url: 'https://instagram.com/AIRAVATHh',
      color: 'hover:text-pink-500',
      handle: '@airavathHh'
    },
    {
      name: 'Facebook', 
      icon: Facebook,
      url: 'https://facebook.com/AIRAVATHh',
      color: 'hover:text-blue-500',
      handle: '@airavathHh'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/AIRAVATHh',
      color: 'hover:text-red-500',
      handle: '@airavathHh'
    }
  ];

  const ContactItem = ({ icon: Icon, title, content, link, linkText }: {
    icon: React.ElementType;
    title: string;
    content: string;
    link?: string;
    linkText?: string;
  }) => (
    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zinc-900/50 transition-colors">
      <Icon size={18} className="text-white mt-1 flex-shrink-0" />
      <div className="flex-1 text-left">
        <p className="text-zinc-400 text-xs uppercase tracking-wide mb-1">{title}</p>
        {link ? (
          <a 
            href={link}
            className="text-zinc-200 hover:text-white transition-colors text-sm block"
          >
            {linkText || content}
          </a>
        ) : (
          <p className="text-zinc-200 text-sm leading-relaxed">{content}</p>
        )}
      </div>
    </div>
  );

  return (
    <footer className="bg-black border-t border-zinc-800">
      {/* Mobile-First Design */}
      <div className="lg:hidden">
        <div className="px-4 py-8">
          
          {/* Logo Section - Always Visible */}
          <div className="text-left mb-8 pb-6 border-b border-zinc-800">
            <div className="flex justify-start mb-4">
              <img 
                src="/new-AIRAVATHa-logo.png" 
                alt="AIRAVATH" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden flex items-center space-x-2">
                <Plane className="h-8 w-8 text-blue-500" />
                <span className="text-2xl font-bold text-white">AIRAVATHH</span>
              </div>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed text-left">
              Leading the future of urban air mobility with cutting-edge eVTOL technology.
            </p>
            
            {/* Social Media - Always Visible on Mobile */}
            <div className="flex justify-start space-x-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon footer-mobile-touch-target flex items-center justify-center w-10 h-10 bg-white border border-white rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon size={18} className="text-black" />
                </a>
              ))}
            </div>
          </div>

          {/* Collapsible Sections */}
          
          {/* Quick Links & Legal Combined */}
          <div className="border-b border-zinc-800 pb-4 mb-4">
            <button
              onClick={() => toggleSection('links')}
              className="w-full flex items-center justify-between py-3 text-white font-semibold text-left"
            >
              <span>Quick Links</span>
              {expandedSection === 'links' ? 
                <ChevronUp size={20} /> : 
                <ChevronDown size={20} />
              }
            </button>
            
            {expandedSection === 'links' && (
              <div className="mt-4 animate-in slide-in-from-top-2 duration-300">
                {/* Side by side layout for mobile */}
                <div className="grid grid-cols-2 gap-x-6">
                  {/* Quick Links Column */}
                  <div>
                    <div className="space-y-1">
                      {quickLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="block py-1 px-2 text-zinc-400 hover:text-white text-sm transition-colors duration-200 text-left"
                          onClick={() => setExpandedSection(null)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Legal Links Column */}
                  <div>
                    <h5 className="text-zinc-300 font-medium text-sm mb-2 text-left">Legal</h5>
                    <div className="space-y-1">
                      {legalLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="block py-1 px-2 text-zinc-500 hover:text-zinc-300 text-sm transition-colors duration-200 text-left"
                          onClick={() => setExpandedSection(null)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="border-b border-zinc-800 pb-4 mb-4">
            <button
              onClick={() => toggleSection('contact')}
              className="w-full flex items-center justify-between py-3 text-white font-semibold text-left"
            >
              <span>Contact Info</span>
              {expandedSection === 'contact' ? 
                <ChevronUp size={20} /> : 
                <ChevronDown size={20} />
              }
            </button>
            
            {expandedSection === 'contact' && (
              <div className="space-y-1 mt-4 animate-in slide-in-from-top-2 duration-300">
                <ContactItem
                  icon={Mail}
                  title="Email"
                  content="info@airavathH.com"
                  link="mailto:info@airavathH.com"
                />
                <ContactItem
                  icon={Phone}
                  title="Phone"
                  content="+1 (555) AIRAVATH"
                  link="tel:+1-555-AIRAVATH"
                />
                <ContactItem
                  icon={MapPin}
                  title="Address"
                  content="Innovation District, Tech Hub Center, Silicon Valley, CA 94025"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Design */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="/new-AIRAVATHa-logo.png" 
                  alt="AIRAVATHH" 
                  className="h-20 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden flex items-center space-x-2">
                  <Plane className="h-12 w-12 text-blue-500" />
                  <span className="text-4xl font-bold text-white">AIRAVATH</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-zinc-300 text-lg leading-relaxed max-w-lg">
                  Leading the future of urban air mobility with cutting-edge eVTOL technology. 
                  Revolutionizing transportation through sustainable, efficient, and safe aerial solutions.
                </p>
                <div className="flex items-center space-x-2 text-zinc-400">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Pioneering Tomorrow's Transportation Today</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">Follow Our Journey</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <div key={social.name} className="group">
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 ${social.color} transition-all duration-300 group-hover:scale-110`}
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <social.icon size={22} />
                      </a>
                      <p className="text-xs text-zinc-500 mt-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                        {social.handle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-white font-semibold text-xl">Navigation</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex items-center text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight size={16} className="mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    <span className="group-hover:translate-x-2 transition-transform duration-200 text-lg">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </nav>
              
              <div className="pt-6 border-t border-zinc-800">
                <h5 className="text-zinc-300 font-medium mb-4">Legal</h5>
                <nav className="space-y-2">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-white font-semibold text-xl">Connect With Us</h4>
              
              <div className="space-y-4">
                <ContactItem
                  icon={Mail}
                  title="Email"
                  content="info@airavathH.com"
                  link="mailto:info@airavathH.com"
                />
                <ContactItem
                  icon={Phone}
                  title="Phone"
                  content="+1 (555) AIRAVATH"
                  link="tel:+1-555-AIRAVATH"
                />
                <ContactItem
                  icon={MapPin}
                  title="Address"
                  content="Innovation District, Tech Hub Center, Silicon Valley, CA 94025"
                />
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  Get In Touch
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Both Mobile & Desktop */}
      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between py-6 gap-4">
            
            <div className="flex flex-col lg:flex-row items-center lg:space-x-6 space-y-2 lg:space-y-0 text-center lg:text-left">
              <span className="text-zinc-400 text-sm font-mono">
                © {currentYear} AIRAVATH. All rights reserved.
              </span>
              <div className="hidden lg:block h-4 w-px bg-zinc-700"></div>
              <span className="text-zinc-500 text-xs font-mono">
                v2.0.0 | Built with ❤️ for the future
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-12 h-12 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-all duration-200 group hover:scale-105 rounded-lg"
              aria-label="Back to top"
            >
              <ChevronUp 
                size={20} 
                className="text-zinc-400 group-hover:text-zinc-200 group-hover:-translate-y-0.5 transition-all duration-200" 
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
