// Login.js
import React, { useState } from 'react';
import { LOGIN_CONST_TEXT } from '../constants';
import { getPasswordStrength } from '../helper';
import { Eye, EyeOff } from 'lucide-react';

const LoginUser = ({ onLoginSuccess }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const strength = getPasswordStrength(password);
  const progress = (Math.min(
    4,
    (password.length >= 8 ? 1 : 0) +
    /[A-Z]/.test(password) +
    /[0-9]/.test(password) +
    /[^A-Za-z0-9]/.test(password)
  ) / 4) * 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    onLoginSuccess();
  };

  return (
    <div className={'login-page-container'}>
      <h2>{LOGIN_CONST_TEXT.LOGIN.TITLE}</h2>
      <p>{LOGIN_CONST_TEXT.LOGIN.SUB_TITLE}</p>

      <form onSubmit={handleSubmit}>

        <label htmlFor="email" className='loginLabel'>{LOGIN_CONST_TEXT.LOGIN.EMAIL}</label>
        <input
          type="email"
          id='email'
          placeholder={LOGIN_CONST_TEXT.LOGIN.EMAIL_PLACEHOLDER}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={'loginInput'}
        />

        <label htmlFor="password" className='loginLabel'>{LOGIN_CONST_TEXT.LOGIN.PASSWORD}</label>
        <div className='passwordWrapper'>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            placeholder={LOGIN_CONST_TEXT.LOGIN.PASSWORD_PLACEHOLDER}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={'loginInput pr-10'}
          />
          <button
            type='button'
            className='showPassword'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>


        <div className='progressBar'>
          <div
            className={`progress-fill ${strength.color}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="password-strength-text">
          Strength: <span className="password-strength-label">{strength.label}</span>
        </p>

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