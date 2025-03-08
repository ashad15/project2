import { LOGIN_CONST_TEXT } from '../../constants';

const SignUpStep1 = ({ onNext, onSwitchToLogin }) => {
    return (
        <div className={'sign-up-steps '}>
            <h2>{LOGIN_CONST_TEXT.SIGN_UP.TITLE}</h2>
            <p>{LOGIN_CONST_TEXT.SIGN_UP.DESCRIPTION}</p>
            <button className={'signupButton'} onClick={onNext}>
                {LOGIN_CONST_TEXT.SIGN_UP.BECOME_MENTOR}    
            </button>
            <button className={'signupButton'} onClick={onNext}>
                {LOGIN_CONST_TEXT.SIGN_UP.BROWSE_MENTOR}
            </button>
            <p>
                {LOGIN_CONST_TEXT.SIGN_UP.ALREADY_HAVE_ACCOUNT}{' '}
                <button className={'loginLink'} onClick={onSwitchToLogin}>
                    {LOGIN_CONST_TEXT.SIGN_UP.LOGIN}
                </button>
            </p>
        </div>
    );
};

export default SignUpStep1;
