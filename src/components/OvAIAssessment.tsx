import React, { useState } from 'react';
import { LogOut, Mail, Brain, AlertCircle, CheckCircle } from 'lucide-react';
import { UserData } from './OvAIApp';

interface OvAIAssessmentProps {
  user: UserData;
  onLogout: () => void;
}

interface AssessmentData {
  patientName: string;
  physicianName: string;
  age: string;
  amh: string;
  afc: string;
  weight: string;
  height: string;
  basalFSH: string;
}

const OvAIAssessment: React.FC<OvAIAssessmentProps> = ({ user, onLogout }) => {
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    patientName: '',
    physicianName: '',
    age: '',
    amh: '',
    afc: '',
    weight: '',
    height: '',
    basalFSH: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isReportSent, setIsReportSent] = useState(false);

  const handleInputChange = (field: keyof AssessmentData, value: string) => {
    setAssessmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isRequiredFieldsFilled = () => {
    return assessmentData.patientName && 
           assessmentData.physicianName && 
           assessmentData.age && 
           assessmentData.amh && 
           assessmentData.afc && 
           assessmentData.weight && 
           assessmentData.height && 
           assessmentData.basalFSH;
  };

  const sendReportToEmail = async () => {
    if (!isRequiredFieldsFilled()) return;

    setIsSending(true);
    
    // Simulate email sending
    setTimeout(() => {
      setIsSending(false);
      setIsReportSent(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-teal via-primary-coral to-primary-orange text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">OvAI Assessment App</h1>
                <p className="text-white/90">AI-Powered Ovarian Reserve Analysis</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-semibold">{user.fullName}</p>
                <p className="text-sm text-white/80 capitalize">{user.userType}</p>
              </div>
              <button
                onClick={onLogout}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                aria-label="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* AI Model Explanation */}
      <div className="bg-blue-50/50 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-teal to-primary-coral rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our AI Model</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our OvAI system utilizes advanced machine learning algorithms trained on thousands of clinical cases 
                  to assess ovarian reserve and predict fertility outcomes. The model analyzes key biomarkers including 
                  Anti-Müllerian Hormone (AMH), Antral Follicle Count (AFC), and other clinical parameters to provide 
                  personalized insights.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This assessment tool is designed to support clinical decision-making and provide patients with 
                  data-driven insights into their reproductive health. Results should always be interpreted in 
                  consultation with qualified healthcare professionals.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  IMPORTANT: No patient data is stored alongside the clinical information. Only physician names and contact details are                          retained, and solely for commercial and follow-up purposes. This assessment tool is intended exclusively for use                    by qualified healthcare professionals. Embryoxite assumes no responsibility or liability for how the tool is used                    or interpreted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Form */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 px-8 py-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment Parameters</h3>
            <p className="text-gray-600">
              Please provide the following information. Fields marked with * are required.
            </p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Patient Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Patient ID (Do not use personal name) *
                </label>
                <input
                  type="text"
                  value={assessmentData.patientName}
                  onChange={(e) => handleInputChange('patientName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all duration-200"
                  placeholder="Enter patient's full name"
                />
              </div>

              {/* Physician Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Physician Name *
                </label>
                <input
                  type="text"
                  value={assessmentData.physicianName}
                  onChange={(e) => handleInputChange('physicianName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all duration-200"
                  placeholder="Enter physician's name"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Age * <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={assessmentData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all duration-200"
                  placeholder="Enter age in years"
                  min="18"
                  max="50"
                />
              </div>

              {/* AMH */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Anti-Müllerian Hormone (AMH) * <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={assessmentData.amh}
                    onChange={(e) => handleInputChange('amh', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all duration-200"
                    placeholder="Enter AMH level"
                    min="0"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    ng/ml
                  </span>
                </div>
              </div>

              {/* AFC */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Antral Follicle Count (AFC) * <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={assessmentData.afc}
                  onChange={(e) => handleInputChange('afc', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all duration-200"
                  placeholder="Enter follicle count"
                  min="0"
                />
              </div>

              {/* Weight */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Weight
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={assessmentData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all duration-200"
                    placeholder="Enter weight"
                    min="30"
                    max="200"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    kg
                  </span>
                </div>
              </div>

              {/* Height */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Height
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={assessmentData.height}
                    onChange={(e) => handleInputChange('height', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all duration-200"
                    placeholder="Enter height"
                    min="140"
                    max="200"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    cm
                  </span>
                </div>
              </div>

              {/* Basal FSH */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Basal FSH (Optional)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={assessmentData.basalFSH}
                  onChange={(e) => handleInputChange('basalFSH', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all duration-200"
                  placeholder="Enter basal FSH level"
                  min="0"
                />
              </div>
            </div>

            {/* Status Indicator */}
            <div className="mt-8 p-4 rounded-xl border-2 border-dashed border-gray-200">
              <div className="flex items-center space-x-3">
                {isRequiredFieldsFilled() ? (
                  <>
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-green-700 font-semibold">
                      All required fields completed. Ready to generate report.
                    </span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-6 w-6 text-amber-500" />
                    <span className="text-amber-700 font-semibold">
                     Please complete all assessment parameter fields to proceed.
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Send Report Button or Success Message */}
            <div className="mt-8 text-center">
              {isReportSent ? (
                <>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Report Sent Successfully!</h3>
                    <p className="text-green-700 font-medium">
                      Your report was sent to your email: <span className="font-semibold">{user.email}</span>
                    </p>
                  </div>
                </>
              ) : (
                <button
                  onClick={sendReportToEmail}
                  disabled={!isRequiredFieldsFilled() || isSending}
                  className="bg-gradient-to-r from-primary-teal via-primary-coral to-primary-orange text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center mx-auto"
                >
                  {isSending ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending Report...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-3 h-6 w-6" />
                      Send Report to my Email
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OvAIAssessment;