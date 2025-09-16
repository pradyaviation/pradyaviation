import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

const Terms = () => {
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
            <FileText className="h-8 w-8 text-blue-500" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-zinc-400 text-lg">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <div className="bg-yellow-900/20 border border-yellow-800/30 p-4 rounded-lg mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-yellow-200 text-sm font-medium">Important Notice</p>
                    <p className="text-yellow-300 text-sm">
                      These terms govern your use of AIRAVATH's eVTOL transportation services. 
                      Please read carefully before using our services.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Acceptance of Terms</h2>
              <p className="text-zinc-300 leading-relaxed">
                By accessing or using AIRAVATH's services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any part of these terms, 
                you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Service Description</h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  AIRAVATH provides electric vertical take-off and landing (eVTOL) aircraft services 
                  for urban air mobility, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Point-to-point passenger transportation</li>
                  <li>Airport transfer services</li>
                  <li>Emergency medical transport</li>
                  <li>Cargo and logistics operations</li>
                  <li>Tourism and recreational flights</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">User Responsibilities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium">Age Requirements</h3>
                      <p className="text-zinc-300 text-sm">Must be 18+ to book services independently</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium">Valid Documentation</h3>
                      <p className="text-zinc-300 text-sm">Government-issued ID required for all flights</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium">Health Requirements</h3>
                      <p className="text-zinc-300 text-sm">Must meet medical fitness criteria</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium">Safety Compliance</h3>
                      <p className="text-zinc-300 text-sm">Follow all safety instructions and protocols</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium">Prohibited Items</h3>
                      <p className="text-zinc-300 text-sm">No dangerous goods or restricted materials</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium">Payment Terms</h3>
                      <p className="text-zinc-300 text-sm">Valid payment method required for booking</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Booking and Cancellation</h2>
              <div className="bg-zinc-900 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Booking Policy</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-zinc-300 text-sm">
                    <li>Bookings are subject to availability and weather conditions</li>
                    <li>Full payment required at time of booking</li>
                    <li>Minimum 24-hour advance notice recommended</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Cancellation Policy</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-zinc-300 text-sm">
                    <li>Full refund: 48+ hours before scheduled flight</li>
                    <li>50% refund: 24-48 hours before scheduled flight</li>
                    <li>No refund: Less than 24 hours before scheduled flight</li>
                    <li>Weather cancellations: Full refund or rebooking</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Liability and Insurance</h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                AIRAVATH maintains comprehensive insurance coverage for all operations. However, passengers 
                participate at their own risk and should maintain personal travel and health insurance.
              </p>
              <div className="bg-blue-900/20 border border-blue-800/30 p-4 rounded-lg">
                <p className="text-blue-200 text-sm">
                  Our liability is limited to the maximum extent permitted by applicable aviation law 
                  and regulations. Emergency procedures and safety protocols are strictly enforced.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Modifications to Terms</h2>
              <p className="text-zinc-300 leading-relaxed">
                AIRAVATH reserves the right to modify these terms at any time. Users will be notified 
                of significant changes via email or through our platform. Continued use of services 
                constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
              <p className="text-zinc-300 leading-relaxed">
                For questions about these Terms of Service, please contact our legal team at 
                legal@AIRAVATH.com or through our 
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

export default Terms;
