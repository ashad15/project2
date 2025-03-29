import React from 'react';
import imgLoginLeft from '../assets/LoginLeftImg.svg';
import Image from 'next/image';
import { LEFT_SECTION_INFO_CONTAINER_TEXT } from './constants';
function LoginLeftSection(props) {
    const BrandName = 'BNE_DESIGN';

    return (
        <div className="login-left-section">
            <div className="login-left-section-info-container ">
                <span className="font-normal text-[32px]">{BrandName}</span>
                <Image  className='img-login-left' src={imgLoginLeft} alt="BNE" />
                <h1 className="text-[36px] font-normal">{LEFT_SECTION_INFO_CONTAINER_TEXT.heading}</h1>
                <p className="text-[18px] font-medium">{LEFT_SECTION_INFO_CONTAINER_TEXT.subHeading}</p>
            </div>
        </div>

    );
}

export default LoginLeftSection;
