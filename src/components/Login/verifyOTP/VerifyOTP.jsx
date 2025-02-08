import React, { useState } from 'react';
import otpGraphic from '../../../assets/images/otpGraphic.svg';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import successSvg from '../../../assets/images/success.svg';
import ticketPopup from '../../../assets/images/ticketPopup.svg';

const VerifyOTP = () => {

    const [otpControl, setOTPControl] = useState([1, 2, 3, 4]);
    return (
        <div className='mx-[100px]'>
            <h1 className='text-[40px] font-medium pb-3 text-[#000]'>Verification Code</h1>
            <div className="otpBanner bg-[#FFA500] px-[94px] py-8 rounded-[38px] flex relative">
                <div>
                    <p className='text-[30px] text-white font-light'>Please type the verification code sent to</p>
                    <p className='text-[30px] text-white font-semibold'>+91 9778652365</p>
                    <form className="otpForm pt-[37px] pb-[55px]">
                        {otpControl.map((control) => <input key={control} type='text' className='otpcontorl w-[80px] h-[80px] mx-4 first-of-type:ms-0 rounded-[12px] bg-transparent border-solid border-[3px] border-[#fff] forcus:border-[3px] text-center text-[24px]' />)}
                    </form>
                    <div className="ctaWrapper flex items-center">
                        <p className='text-[24px] font-semibold text-white me-[60px]'>Verify Code</p>

                        <Dialog>
                            <DialogTrigger asChild>
                                <button className='px-[60px] py-[30px] bg-white rounded-[24px]'>
                                    <p className='font-semibold text-[24px] text-[#000]'>Submit</p>
                                </button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[400px]">
                                <div className='congratulationsWrapper flex items-center justify-center flex-col'>
                                    <img src={successSvg} alt={'success'} width={200} height={200} />
                                    <p className='text-[#4E4E4E] text-[24px] pb-[20px] font-medium'>Congratulations</p>
                                    <p className='text-[#4E4E4E] text-[16px] pb-[40px] text-[#5BB450]'>Your Profile Is Ready To Use</p>
                                    <div className='flex items-center gap-[14px]'>
                                            <button className="tracking-tighter text-center text-white whitespace-nowrap bg-amber-500 rounded-[89px] max-md:px-5 max-md:text-4xl hover:bg-amber-600 transition-colors  py-[20px] px-[45px] font-medium">
                                                Let’s Explore
                                            </button>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <img src={otpGraphic} className='w-[500px] absolute right-0 bottom-[-51px]' />
            </div>
        </div>
    )
}

export default VerifyOTP