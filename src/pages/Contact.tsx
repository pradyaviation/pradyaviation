
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your interest in AIRAVATH. We'll be in touch soon.",
      });
      
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
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Address - Higher position */}
            <div className="text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-airavata-gray/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                ADDRESS
              </h3>
              <div className="space-y-3 text-airavata-light-gray">
                <div className="mb-4">
                  <p className="font-semibold text-white mb-2">AIRAVATH Headquarters</p>
                  <p>123 Innovation Drive</p>
                  <p>INDIA, 94102</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Northern Division Office</p>
                  <p>456 Tech city</p>
                  <p>Andhra Pradesh, 555555</p>
                </div>
              </div>
            </div>

            {/* Phone - Lower position */}
            <div className="text-center flex flex-col items-center mt-16">
              <div className="w-24 h-24 bg-airavata-gray/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                PHONE
              </h3>
              <div className="space-y-3 text-airavata-light-gray">
                <div className="mb-4">
                  <p className="font-semibold text-white mb-2">AIRAVAT Main Line</p>
                  <p>+91  123-4567 phone</p>
                  <p>+91  123-4568 facsimile</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">AIRAVAT 24/7 Department</p>
                  <p>+91  911-HELP</p>
                </div>
              </div>
            </div>

            {/* Email - Higher position */}
            <div className="text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-airavata-gray/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                EMAIL
              </h3>
              <div className="space-y-3 text-airavata-light-gray">
                <div className="mb-4">
                  <p className="font-semibold text-white mb-2">Request for Proposal</p>
                  <p>info@airavat.com</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">for Calls</p>
                  <p>service@airavat.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Section - Map Only */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
          <div className="flex items-center justify-between">
            {/* Left side - Location Icon */}
            <div className="w-1/2 flex justify-center items-center">
              <div 
                className="w-96 h-96 flex items-center justify-center"
                style={{
                  boxShadow: '0 10px 30px rgba(169, 169, 169, 0.3), 0 5px 15px rgba(169, 169, 169, 0.2)'
                }}
              >
                <svg 
                  width="300" 
                  height="300" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white animate-bounce"
                  style={{
                    animation: 'pinPulse 2s ease-in-out infinite'
                  }}
                >
                  <defs>
                    <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="0.5"/>
                      <feOffset dx="0" dy="1" result="offset"/>
                      <feFlood floodColor="black" floodOpacity="0.2"/>
                      <feComposite in2="offset" operator="in"/>
                      <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Multiple shadow layers for realistic effect */}
                  <ellipse 
                    cx="12" 
                    cy="22.5" 
                    rx="9" 
                    ry="2.5" 
                    fill="currentColor" 
                    opacity="0.05"
                  />
                  <ellipse 
                    cx="12" 
                    cy="22" 
                    rx="8" 
                    ry="2" 
                    fill="currentColor" 
                    opacity="0.08"
                  />
                  <ellipse 
                    cx="12" 
                    cy="21.5" 
                    rx="7.5" 
                    ry="1.8" 
                    fill="currentColor" 
                    opacity="0.12"
                  />
                  
                  {/* Circular base */}
                  <ellipse 
                    cx="12" 
                    cy="21" 
                    rx="7" 
                    ry="1.5" 
                    fill="currentColor" 
                    opacity="0.3"
                    filter="url(#dropShadow)"
                  />
                  
                  {/* Location pin */}
                  <path 
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                    fill="currentColor"
                    filter="url(#dropShadow)"
                  />
                </svg>
              </div>
            </div>
            
            {/* Right side - Map */}
            <div className="w-1/2 h-96 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d-122.89308605078125!3d37.77492950312436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1704369600000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
