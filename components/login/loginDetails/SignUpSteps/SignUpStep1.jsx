import { LOGIN_CONST_TEXT, SIGN_UP_STEP_1_CARDS } from '../../constants';
import Card from '../../Cards';
import { useState } from 'react';
import signUpImage from '../../../assets/SignUpCardImage.svg'

const SignUpStep1 = ({ onNext, onSwitchToLogin }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    
    return (
        <div className={'sign-up-steps '}>
            <h2>{LOGIN_CONST_TEXT.SIGN_UP.TITLE}</h2>
            <p>{LOGIN_CONST_TEXT.SIGN_UP.DESCRIPTION}</p>
            {/* <button className={'signupButton'} onClick={onNext}>
                {LOGIN_CONST_TEXT.SIGN_UP.BECOME_MENTOR}
            </button>
            <button className={'signupButton'} onClick={onNext}>
                {LOGIN_CONST_TEXT.SIGN_UP.BROWSE_MENTOR}
            </button> */}
            <div className='mt-14 mb-5'>
                {SIGN_UP_STEP_1_CARDS.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        imagesrc={signUpImage}
                        selected={selectedCard === index}
                        onClick={() => setSelectedCard(index)}
                    />
                ))}
            </div>
            <button 
                className='signupButton' 
                onClick={onNext} 
                disabled={selectedCard === null || selectedCard === undefined}
            >
                Next
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
