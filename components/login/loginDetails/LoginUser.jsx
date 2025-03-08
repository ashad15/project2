// Login.js
import React, { useState } from 'react';
import { LOGIN_CONST_TEXT } from '../constants';

const LoginUser = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    onLoginSuccess();
  };

  return (
    <div className={'login-page-container'}>
      <h2>{LOGIN_CONST_TEXT.LOGIN.TITLE}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder={LOGIN_CONST_TEXT.LOGIN.EMAIL_PLACEHOLDER}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={'loginInput'}
        />
        <input
          type="password"
          placeholder={LOGIN_CONST_TEXT.LOGIN.PASSWORD_PLACEHOLDER}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={'loginInput'}
        />
        <div className={'rememberForgot'}>
          <label>
            <input type="checkbox" /> {LOGIN_CONST_TEXT.LOGIN.REMEMBER_ME}
          </label>
          <a href="/forgot-password">{LOGIN_CONST_TEXT.LOGIN.FORGOT_PASSWORD}</a>
        </div>
        <button type="submit" className={'loginButton'}>{LOGIN_CONST_TEXT.LOGIN.NEXT}</button>
      </form>
      <p>{LOGIN_CONST_TEXT.LOGIN.DONT_HAVE_ACCOUNT} <a href="/signup">{LOGIN_CONST_TEXT.LOGIN.SIGNUP}</a></p>
    </div>
  );
};

export default LoginUser;