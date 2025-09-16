import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Cookie, Scale } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-blue-500" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-zinc-400 text-lg">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Introduction</h2>
              <p className="text-zinc-300 leading-relaxed">
                At AIRAVATH, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our services 
                and eVTOL transportation solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
              <div className="space-y-4 text-zinc-300">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact information (name, email, phone number)</li>
                    <li>Account credentials and profile data</li>
                    <li>Payment and billing information</li>
                    <li>Travel preferences and booking history</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Usage Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Website and app usage analytics</li>
                    <li>Device information and identifiers</li>
                    <li>Location data for service provision</li>
                    <li>Communication logs and preferences</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-3">Service Delivery</h3>
                  <p className="text-zinc-300 text-sm">
                    Providing safe and efficient eVTOL transportation services, managing bookings, 
                    and ensuring optimal flight operations.
                  </p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-3">Safety & Security</h3>
                  <p className="text-zinc-300 text-sm">
                    Maintaining the highest safety standards, conducting security checks, 
                    and ensuring regulatory compliance.
                  </p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-3">Communication</h3>
                  <p className="text-zinc-300 text-sm">
                    Sending important updates, service notifications, and marketing communications 
                    with your consent.
                  </p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-3">Improvement</h3>
                  <p className="text-zinc-300 text-sm">
                    Analyzing usage patterns to enhance our services, develop new features, 
                    and optimize user experience.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Data Protection</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
                <li>End-to-end encryption for sensitive data transmission</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication protocols</li>
                <li>Secure data storage with backup and recovery systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-lg border border-blue-800/30">
                <p className="text-zinc-300 leading-relaxed mb-4">
                  You have the right to access, modify, or delete your personal information. 
                  You can also opt-out of marketing communications and request data portability.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Contact Us About Your Data
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
              <p className="text-zinc-300 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact our Data Protection Officer at privacy@AIRAVATH.com or through our 
                <Link to="/contact" className="text-blue-400 hover:text-blue-300 ml-1 underline">
                  contact page
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
