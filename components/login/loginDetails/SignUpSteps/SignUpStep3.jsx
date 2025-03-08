// Step3.js
import React from 'react';
import { LOGIN_CONST_TEXT } from '../../constants';
  
const SignUpStep3 = ({ onNext, onBack }) => {
  return (
    <div className={'sign-up-steps'}>
      <h2>{LOGIN_CONST_TEXT.SIGN_UP.PROFESSIONAL_TITLE}</h2>
      <input
        type="text"
        placeholder={LOGIN_CONST_TEXT.SIGN_UP.YOUR_TITLE}
        className={'infoInput'}
      />
      <input
        type="text"
        placeholder={LOGIN_CONST_TEXT.SIGN_UP.YEARS_EXPERIENCE}
        className={'infoInput'}
      />
      <input
        type="text"
        placeholder={LOGIN_CONST_TEXT.SIGN_UP.COMPANY_NAME}
        className={'infoInput'}
      />
      <div className={'navigationButtons'}>
        <button className={'backButton'} onClick={onBack}>{LOGIN_CONST_TEXT.LOGIN.NEXT}</button>
        <button className={'nextButton'} onClick={onNext}>{LOGIN_CONST_TEXT.LOGIN.NEXT}</button>
      </div>
    </div>
  );
};

export default SignUpStep3;