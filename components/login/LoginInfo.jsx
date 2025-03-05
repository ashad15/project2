import React from 'react';
import LoginLeftSection from './LoginLeftSection';
import LoginDetails from './loginDetails/LoginDetails';
function LoginInfo(props) {
    return (
        // <div className="login-wrapper-container">
        <div className='split-screen'>
            <LoginLeftSection />
            {/* <LoginDetails /> */}
        </div>
    );
}

export default LoginInfo;
