import React from 'react';
import { LOGIN_CONST_TEXT } from '../../constants';

const SignUpStep2 = ({ onNext, onBack }) => {
  return (
    <div className={'sign-up-steps '}>
      <h2>{LOGIN_CONST_TEXT.SIGN_UP.WELCOME}</h2>
      <div className={'updatePhoto'}>
        <p>{LOGIN_CONST_TEXT.SIGN_UP.UPDATE_PHOTO}</p>
        <p>{LOGIN_CONST_TEXT.SIGN_UP.PHOTO_SIZE}</p>
      </div>
      <input
        type="text"
        placeholder={LOGIN_CONST_TEXT.SIGN_UP.COUNTRY_PLACEHOLDER}
        className={'countryInput'}
      />
      <button className={'nextButton'} onClick={onNext}>{LOGIN_CONST_TEXT.LOGIN.NEXT}</button>
      <p>{LOGIN_CONST_TEXT.SIGN_UP.TERMS} <a href="/terms">{LOGIN_CONST_TEXT.SIGN_UP.TERMS_LINK}</a></p>
    </div>
  );
};

export default SignUpStep2;