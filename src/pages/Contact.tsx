import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGetInTouch = () => {
    // Create WhatsApp message
    const phoneNumber = '13213899564';
    const whatsappMessage = `Hello! I'm reaching out from the AIRAVATH website. I'd like to get in touch with your team.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation with black text */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <style>
          {`
            /* Force black text for navbar on contact page */
            nav a,
            nav button,
            nav span,
            nav div {
              color: #000000 !important;
            }
            nav svg {
              stroke: #000000 !important;
            }
            /* Ensure menu button is black */
            button[aria-label*="menu"] svg {
              stroke: #000000 !important;
            }
          `}
        </style>
        <Navigation />
      </div>

      <div className="flex items-center justify-center px-6 py-20 min-h-screen">
        <div className="max-w-4xl w-full">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0B1B3D' }}>
              CONTACT US
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 font-light">
              We’re here to assist with any questions
            </p>
          </div>

          <button
            onClick={handleGetInTouch}
            className="inline-flex items-center px-10 py-4 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:scale-105 text-lg"
            style={{ backgroundColor: '#0B1B3D' }}
          >
            <span className="mr-3">GET IN TOUCH</span>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
