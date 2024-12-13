import React from 'react';
import profile from '../../assets/images/profile.svg';
import calender from '../../assets/images/calender.svg';
import lock from '../../assets/images/Lock.svg';


const Signup = () => {
  return (
    <div>
        <h1 className='text-[64px] text-center font-semibold'>Signup</h1>

        <div className="signupForm flex items-center gap-20 pt-[100px] pb-20">
            <div className="inputControl px-6 py-4 flex items-center bg-white border-solid border-[#F4F4F4] border-[1px] rounded-[8px] shadow-lg flex-1">
                <img src={profile} alt="Name" className='mr-3' />
                <input type="text" name="name" id="name" className=''placeholder='Name' />
            </div>
            <div className="inputControl px-6 py-4 flex items-center bg-white border-solid border-[#F4F4F4] border-[1px] rounded-[8px] shadow-lg flex-1">
                <img src={calender} alt="Name" className='mr-3' />
                <input type="date" name="name" id="name" className=''placeholder='Name' />
            </div>
            <div className="inputControl px-6 py-4 flex items-center bg-white border-solid border-[#F4F4F4] border-[1px] rounded-[8px] shadow-lg flex-1">
                <img src={lock} alt="Name" className='mr-3' />
                <input type="text" name="name" id="name" className=''placeholder='Mobile Number' />
            </div>
        </div>
        <div className='flex items-center justify-center'>
        <button className='bg-[#FFA500] py-8 px-14 rounded-[79px]'>
            <p className='m-0 text-[34px] font-medium text-white'>Create Account</p>
        </button>
        </div>
        <p className='text-center py-10 text-[28px]'>By providing your details, you agree to our <span className='font-semibold text-[#5BB450]'>Terms & Privacy Policy.</span></p>
    </div>
  )
}

export default Signup