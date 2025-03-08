// Login main page
import React, { useState } from 'react';
import SignUpFlow from './SignUpFlow';
import Login from './LoginUser';

const LoginDetails = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // Redirect to dashboard using Next.js router
    window.location.href = '/dashboard';
  };

  const handleSwitchToLogin = () => {
    setIsSignUp(false);
  };

  return (
    <div className={'login-details-container'}>
      {isSignUp ? (
        <SignUpFlow onSwitchToLogin={handleSwitchToLogin} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default LoginDetails;
