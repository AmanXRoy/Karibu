import React, { useState } from 'react';
import otpGraphic from '../../../assets/images/otpGraphic.svg';

const VerifyOTP = () => {

    const [otpControl, setOTPControl] = useState([1, 2, 3, 4]);
    return (
        <div>
            <h1 className='text-[64px] font-medium pb-3'>Verification Code</h1>
            <div className="otpBanner bg-[#FFA500] px-[94px] py-8 rounded-[38px] flex relative">
                <div>
                    <p className='text-[48px] text-white font-light'>Please type the verification code sent to</p>
                    <p className='text-[48px] text-white font-semibold'>+91 9778652365</p>
                    <form className="otpForm pt-[37px] pb-[55px]">
                        {otpControl.map((control) => <input key={control} type='text' className='otpcontorl w-[118px] h-[118px] mx-4 first-of-type:ms-0 rounded-[34px] bg-transparent border-solid border-[3px] border-[#fff] forcus:border-[3px]' />)}
                    </form>
                    <div className="ctaWrapper flex items-center">
                        <p className='text-[38px] font-semibold text-white me-[60px]'>Verify Code</p>
                        <button className='px-[60px] py-[32px] bg-white rounded-[24px]'>
                            <p className='font-semibold text-[44px]'>Submit</p>
                        </button>
                    </div>
                </div>
                <img src={otpGraphic} className='w-[500px] absolute right-0 bottom-[-51px]' />
            </div>
        </div>
    )
}

export default VerifyOTP