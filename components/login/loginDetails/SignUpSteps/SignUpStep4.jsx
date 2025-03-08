// Step4.js
import React from 'react';
import { LOGIN_CONST_TEXT } from '../../constants';

const SignUpStep4 = ({ onBack }) => {
  return (
    <div className={'sign-up-steps '}>
      <h2>{LOGIN_CONST_TEXT.SIGN_UP.LOVE_IT}</h2>
      <input
        type="text"
        placeholder={LOGIN_CONST_TEXT.SIGN_UP.LINKEDIN_URL}
        className={'infoInput'}
      />
      <textarea
        placeholder={LOGIN_CONST_TEXT.SIGN_UP.WHAT_OFFER}
        className={'offerTextarea'}
      />
      <div className={'navigationButtons'}>
        <button className={'backButton'} onClick={onBack}>{LOGIN_CONST_TEXT.LOGIN.NEXT}</button>
        <button className={'nextButton'}>{LOGIN_CONST_TEXT.SIGN_UP.FINISH}</button>
      </div>
    </div>
  );
};

export default SignUpStep4;