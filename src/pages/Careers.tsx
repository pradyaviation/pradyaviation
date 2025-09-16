import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, Clock, Users, Zap, Globe } from 'lucide-react';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior eVTOL Pilot",
      department: "Flight Operations",
      location: "Silicon Valley, CA",
      type: "Full-time",
      description: "Lead pilot for our next-generation eVTOL fleet with commercial aviation experience."
    },
    {
      title: "Aerospace Engineer",
      department: "Engineering",
      location: "Silicon Valley, CA",
      type: "Full-time",
      description: "Design and optimize eVTOL aircraft systems for urban air mobility solutions."
    },
    {
      title: "Flight Safety Manager",
      department: "Safety & Compliance",
      location: "Remote/Hybrid",
      type: "Full-time",
      description: "Develop and implement safety protocols for eVTOL operations and training programs."
    },
    {
      title: "UX/UI Designer",
      department: "Product Design",
      location: "Silicon Valley, CA",
      type: "Full-time",
      description: "Create intuitive user experiences for our booking platform and in-flight systems."
    }
  ];

  const benefits = [
    { icon: Zap, title: "Innovation First", description: "Work on cutting-edge eVTOL technology" },
    { icon: Users, title: "Great Team", description: "Collaborate with world-class engineers and pilots" },
    { icon: Globe, title: "Global Impact", description: "Shape the future of urban transportation" },
    { icon: Clock, title: "Work-Life Balance", description: "Flexible hours and remote work options" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Briefcase className="h-12 w-12 text-blue-500" />
              <h1 className="text-5xl font-bold">Join Our Team</h1>
            </div>
            <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
              Help us revolutionize urban transportation and shape the future of aviation. 
              We're looking for passionate individuals to join our mission.
            </p>
          </div>
        </div>

        {/* Why Work With Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why AIRAVAT?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-zinc-600 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-zinc-300 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                      <span className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Application Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Apply Online</h3>
              <p className="text-zinc-400 text-sm">Submit your application and resume through our portal</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Interview</h3>
              <p className="text-zinc-400 text-sm">Technical and cultural fit interviews with our team</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Welcome</h3>
              <p className="text-zinc-400 text-sm">Join our team and start making an impact</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-lg border border-blue-800/30 text-center">
            <h2 className="text-2xl font-bold mb-4">Don't See Your Role?</h2>
            <p className="text-zinc-300 mb-6">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you'd like to contribute.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
