import React, { useState } from 'react';
import OvAIRegistration from './OvAIRegistration';
import OvAIAssessment from './OvAIAssessment';

export interface UserData {
  fullName: string;
  email: string;
  userType: 'patient' | 'professional';
}

const OvAIApp: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null);

  const handleRegistration = (userData: UserData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {!user ? (
        <OvAIRegistration onRegister={handleRegistration} />
      ) : (
        <OvAIAssessment user={user} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default OvAIApp;