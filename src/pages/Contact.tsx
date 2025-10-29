
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Header animation (left to right)
    if (headerRef.current) {
      const elements = headerRef.current.children;
      
      // Set initial state
      gsap.set(elements, {
        x: -100,
        opacity: 0
      });

      // Animate elements from left to right with stagger
      gsap.to(elements, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
        delay: 0.5
      });
    }

    // Form animation
    ScrollTrigger.create({
      trigger: formRef.current,
      start: 'top 70%',
      onEnter: () => {
        gsap.from('.contact-item', {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message with form data
    const phoneNumber = '13213899564'; // +1 (321) 389-9564 without special characters
    const whatsappMessage = `Hello! I'm reaching out from the AIRAVATH website.

*Name:* ${formData.name}
*Email:* ${formData.email}

*Message:*
${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Show success toast
    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp to send your message...",
    });
    
    // Reset form and button state
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-airavata-black pt-16">
      <style>
        {`
          @keyframes pinPulse {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
        `}
      </style>
      {/* First Section - Background Image Section with Contact Form */}
      <section 
        className="relative min-h-screen flex items-start justify-start bg-black pt-8"
        style={{
          backgroundImage: `url('./contact airtaxi.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        
        {/* Contact Form - Left Side */}
        <div className="relative z-10 max-w-lg" style={{ marginLeft: '2vw' }}>
          <div ref={headerRef} className="px-4 pb-4">
            <h1 className="text-3xl font-bold text-white mb-2 uppercase">
              GET IN TOUCH?
            </h1>
            <p className="text-white/80 mb-6 text-sm">
              Ready to revolutionize your mobility? Get in touch with us.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="hero-name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <Input
                  id="hero-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-transparent border-2 border-white text-white placeholder-white focus:border-white focus:ring-white/20 h-12"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="hero-email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <Input
                  id="hero-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-transparent border-2 border-white text-white placeholder-white focus:border-white focus:ring-white/20 h-12"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="hero-message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <Textarea
                  id="hero-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-transparent border-2 border-white text-white placeholder-white focus:border-white focus:ring-white/20 resize-none"
                  placeholder="Tell us about your interest in AIRAVATH..."
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden bg-transparent border-2 border-white text-white font-semibold py-2 px-8 rounded-md transition-all duration-300 disabled:opacity-50 h-10 hover:text-black group"
                >
                  <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="bg-airavata-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* GET IN TOUCH Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wider">
              GET IN TOUCH
            </h2>
            <p className="text-airavata-light-gray text-lg">
              We'd love to hear from you. Reach out to us through any of the following channels.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Phone Card */}
            <div className="bg-gradient-to-br from-airavata-gray/20 to-airavata-gray/5 rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Phone className="text-white" size={36} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center uppercase tracking-wider">
                Phone
              </h3>
              <div className="text-center space-y-2">
                <a 
                  href="tel:+13213899564" 
                  className="text-airavata-light-gray hover:text-white transition-colors duration-200 text-lg font-medium block"
                >
                  +1 (321) 389-9564
                </a>
                <p className="text-sm text-airavata-light-gray/70">
                  Available during business hours
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-airavata-gray/20 to-airavata-gray/5 rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Mail className="text-white" size={36} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center uppercase tracking-wider">
                Email
              </h3>
              <div className="text-center space-y-2">
                <a 
                  href="mailto:pradyaviation@gmail.com" 
                  className="text-airavata-light-gray hover:text-white transition-colors duration-200 text-lg font-medium block break-all"
                >
                  pradyaviation@gmail.com
                </a>
                <p className="text-sm text-airavata-light-gray/70">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Section - Background Image */}
        <div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative mt-16"
          style={{
            backgroundImage: `url('./1000127425-removebg-preview.png')`,
            backgroundSize: '70%',
            backgroundPosition: 'center 0%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
