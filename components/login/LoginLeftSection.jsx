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

        // <div className="h-screen flex">
        //     {/* Left Side - Gradient Background with Image */}
        //     <div className="w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white p-10">
        //         <img
        //             src="/your-image.png" // Replace with your image path
        //             alt="Community"
        //             className="w-80 mb-6"
        //         />
        //         <h1 className="text-3xl font-bold text-center">Online Community For Front-end Developers</h1>
        //         <p className="text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        //     </div>

        //     {/* Right Side - White Background with Form */}
        //     <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
        //         <h2 className="text-2xl font-bold text-center">Join & Connect the Fastest Growing Online Community</h2>
        //         <p className="text-gray-500 text-center mt-2">Made possible by mentoring and learning from them</p>

        //         {/* Form Options */}
        //         <div className="mt-6 w-full max-w-sm">
        //             <div className="border rounded-lg p-4 flex items-center space-x-4 hover:border-purple-500 cursor-pointer">
        //                 <img src="/user-avatar.png" alt="Avatar" className="w-10 h-10 rounded-full" />
        //                 <div>
        //                     <h3 className="font-semibold">Browse a Mentor</h3>
        //                     <p className="text-gray-500 text-sm">Mentoring can help you turn your passion...</p>
        //                 </div>
        //             </div>

        //             <div className="border rounded-lg p-4 flex items-center space-x-4 mt-4 hover:border-purple-500 cursor-pointer">
        //                 <img src="/user-avatar.png" alt="Avatar" className="w-10 h-10 rounded-full" />
        //                     <div>
        //                         <h3 className="font-semibold">Become a Mentor</h3>
        //                         <p className="text-gray-500 text-sm">Mentoring can help you turn your passion...</p>
        //                     </div>
        //             </div>

        //             {/* Button */}
        //             <button className="bg-purple-600 text-white w-full py-3 mt-6 rounded-lg hover:bg-purple-700">
        //                 Next
        //             </button>

        //             {/* Login Link */}
        //             <p className="text-gray-500 text-center mt-4">
        //                 Already have an account? <a href="#" className="text-purple-600">Log in</a>
        //             </p>
        //         </div>
        //     </div>
        // </div>
    );
}

export default LoginLeftSection;
