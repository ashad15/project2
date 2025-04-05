import React from 'react';
import imgLoginLeft from '../assets/LoginLeftImg.svg';
import logoImg from '../assets/Logo.svg';
import Image from 'next/image';
import { LEFT_SECTION_INFO_CONTAINER_TEXT } from './constants';
function LoginLeftSection(props) {
    const BrandName = 'BNE_DESIGN';

    return (
        <div className="login-left-section">
            <div className="login-left-section-info-container ">
                <div className='flex justify-center mt-3 -ml-40'>
                    <Image src={logoImg}></Image>
                    <span className="font-normal text-[25px] pl-2 pt-2">{BrandName}</span>
                </div>
                <Image  className='img-login-left' src={imgLoginLeft} alt="BNE" />
                <h1 className="text-[32px] font-normal">{LEFT_SECTION_INFO_CONTAINER_TEXT.heading}</h1>
                <p className="text-[15px] font-medium">{LEFT_SECTION_INFO_CONTAINER_TEXT.subHeading}</p>
            </div>
        </div>

    );
}

export default LoginLeftSection;
