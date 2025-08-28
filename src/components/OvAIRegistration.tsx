import React, { useState } from 'react';
import { User, Mail, ArrowRight, Brain, Shield } from 'lucide-react';
import { UserData } from './OvAIApp';

interface OvAIRegistrationProps {
  onRegister: (userData: UserData) => void;
}

const OvAIRegistration: React.FC<OvAIRegistrationProps> = ({ onRegister }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<'patient' | 'professional' | ''>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !userType) return;

    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      onRegister({
        fullName,
        email,
        userType: userType as 'patient' | 'professional'
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-teal/20 to-primary-coral/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary-orange/20 to-primary-teal/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Registration Card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-teal via-primary-coral to-primary-orange p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">OvAI System</h1>
            <p className="text-white/90 font-medium">AI-Powered Ovarian Assessment</p>
          </div>

          {/* Registration Form */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Field */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all duration-200 font-medium"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all duration-200 font-medium"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* User Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Registration Type:
                </label>
                <label className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={userType === 'professional'}
                    onChange={(e) => setUserType(e.target.checked ? 'professional' : '')}
                    className="w-4 h-4 text-primary-teal bg-gray-100 border-gray-300 focus:ring-primary-teal focus:ring-2"
                  />
                  <span className="ml-3 text-gray-700 font-medium">I'm a Healthcare Professional</span>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={isLoading || !fullName || !email || !userType}
                className="w-full bg-gradient-to-r from-primary-teal via-primary-coral to-primary-orange text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Register & Continue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 text-center">
            <p className="text-sm text-gray-600">
              By registering, you agree to our{' '}
              <a href="#" className="text-primary-teal hover:text-primary-coral transition-colors font-semibold">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary-teal hover:text-primary-coral transition-colors font-semibold">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        {/* Back to Main Site */}
        <div className="mt-6 text-center">
          <button
            onClick={() => window.location.href = '/'}
            className="text-gray-600 hover:text-primary-teal transition-colors font-medium text-sm"
          >
            ← Back to Embryoxite.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default OvAIRegistration;