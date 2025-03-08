// SignUpFlow.js
import React, { useState } from 'react';
import SignUpStep1 from './SignUpSteps/SignUpStep1';
import SignUpStep2 from './SignUpSteps/SignUpStep2';
import SignUpStep3 from './SignUpSteps/SignUpStep3';
import SignUpStep4 from './SignUpSteps/SignUpStep4';

const SignUpFlow = ({ onSwitchToLogin }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className={'signupContainer'}>
      {step === 1 && <SignUpStep1 onNext={handleNext} onSwitchToLogin={onSwitchToLogin} />}
      {step === 2 && <SignUpStep2 onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <SignUpStep3 onNext={handleNext} onBack={handleBack} />}
      {step === 4 && <SignUpStep4 onBack={handleBack} />}
    </div>
  );
};

export default SignUpFlow;
