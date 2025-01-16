import React, { useState } from "react";
import loginGraphic from '../../assets/images/loginGraphic.svg';
import user from '../../assets/images/user.svg';
import shop from '../../assets/images/shop.svg';
import merchant from '../../assets/images/merchant.svg';
import Signup from "../Signup/Signup";
import VerifyOTP from "./verifyOTP/VerifyOTP";
import { useSearchParams } from "react-router-dom";



type LoginType = 'user' | 'shop' | 'merchant';
const Login = () => {


  const [isOTP, setOTP] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [loginType, setLoginType] = useState<LoginType>('user');

  const showDropdown = () => setIsDropdown(true);

  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type') as LoginType;
  console.log(typeParam)

  return (

    <div className="text-black  px-16 relative">
      {isOTP ? <>
        <VerifyOTP />
      </> : <>
        <div className="loginContainer flex items-center">
          <div className="loginForm">
            <h1 className="text-[64px] font-semibold">Member Login</h1>
            <h2 className="text-[45px] text-[#28A745]">Welcome back</h2>
            {typeParam === 'user' || typeParam === 'merchant' ? <>

              <p className="text-[45px] text-[#000]">Phone</p>
              <div className="mobileInputControl">
                <input
                  type="text"
                  className="mobileNumber p-[30px] border-[#D9D9D9] border-solid border-[1px] rounded-[8px] mr-[134px] focus:border-solid focus:border-[#D9D9D9] focus:border-[1px]"
                  placeholder="Enter Your Mobile No"
                />
                <button 
                  className="bg-[#FFA500] rounded-[79px] p-[30px] w-[211px]" 
                  onClick={() => setOTP(true)}
                >
                  <p className="text-[34px] text-white m-0">OTP</p>
                </button>
              </div>
            </> : <>
              <div className="shopLogin">
                <p className="text-[20px] text-[#000] mb-0">Email</p>
                <input
                  type="email"
                  className="email p-[30px] w-full border-[#D9D9D9] border-solid border-[1px] rounded-[8px] mr-[134px] focus:border-solid focus:border-[#D9D9D9] focus:border-[1px]"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="shopLogin my-2">
                <p className="text-[20px] text-[#000] mb-0">Password</p>
                <input
                  type="password"
                  className="email p-[30px] w-full border-[#D9D9D9] border-solid border-[1px] rounded-[8px] mr-[134px] focus:border-solid focus:border-[#D9D9D9] focus:border-[1px]"
                  placeholder="Enter Your Password"
                />
              </div>
                <button className="bg-[#FFA500] rounded-[79px] p-[15px] w-[211px] my-3" onClick={() => setOTP(true)}>
                  <p className="text-[34px] text-white m-0">Login</p>
                </button>
            </>}

            <div className="rememberMe flex items-center mt-[41px]">
              <input
                type="checkbox"
                className="w-[55px] h-[55px] bg-[#E7E7E7] rounded-[5px] accent-[#5BB450]"
              ></input>
              <p className="m-0 text-[24px] ms-[28px] text-[#5BB450]">
                Remember Me
              </p>
            </div>
          </div>

          {/* login Graphic */}
          <div className="loginImage place-items-end flex-1">
            <img src={loginGraphic} alt="login" />
          </div>
        </div>
        <Signup />
      </>}
    </div>
  );
};

export default Login;
