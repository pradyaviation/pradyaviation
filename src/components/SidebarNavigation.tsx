
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const SidebarNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/mission', label: 'Our Mission' },
    { path: '/about', label: 'About Us' },
    { path: '/objectives', label: 'Future Objectives' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-white hover:text-gray-300 transition-colors z-50 relative"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-black transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo in Sidebar */}
          <div className="p-6 border-b border-gray-800">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img 
                src="/new-AIRAVATHa-logo.png" 
                alt="AIRAVATH" 
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block font-ddin font-bold text-lg transition-colors duration-200
                      ${location.pathname === item.path 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SidebarNavigation;
