import React, { useState } from "react";
import loginGraphic from '../../assets/images/loginGraphic.svg';
import user from '../../assets/images/user.svg';
import shop from '../../assets/images/shop.svg';
import merchant from '../../assets/images/merchant.svg';
import Signup from "../Signup/Signup.jsx";
import VerifyOTP from "./verifyOTP/VerifyOTP";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox"







const Login = () => {


  const [isOTP, setOTP] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [loginType, setLoginType] = useState('user');

  const showDropdown = () => setIsDropdown(true);
  return (

    <>
      <div className="text-black px-16 py-8 relative">

        {isOTP ? <>
          <VerifyOTP />
        </> : <>
          <div className="loginContainer flex items-center justify-between">
            <div className="loginForm">
              <h1 className="text-5xl font-semibold mb-2">Member Login</h1>
              <h2 className="text-4xl text-[#28A745]">Welcome back</h2>
              <div className="tabsWrapper">
                <Tabs defaultValue="loginUser" className="w-full h-full my-4">
                  <TabsList className="grid w-full grid-cols-2 bg-primary text-[#000] p-1 h-full">
                    <TabsTrigger value="loginUser" className="p-4">Login as User/Merchant</TabsTrigger>
                    <TabsTrigger value="loginShop" className="p-4">Login as Shop</TabsTrigger>
                  </TabsList>
                  <TabsContent value="loginUser">
                    <form className="my-4">
                      <div className="formControl my-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" placeholder="Enter your email" />
                      </div>
                      <div className="formControl my-2">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" placeholder="Enter your Password" />
                      </div>
                      <div className="flex my-2">
                        <Checkbox id="terms1" className="" />
                        <div className="grid gap-1.5 leading-none ms-2">
                          <label
                            htmlFor="terms1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </form>
                    <Button className="bg-primary w-full">Login</Button>
                  </TabsContent>
                  <TabsContent value="loginShop">
                    <form className="my-4">
                      <div className="formControl my-2">
                        <Label htmlFor="phoneNumber">Phone</Label>
                        <div className="flex">
                          <Select>
                            <SelectTrigger className="w-[100px]">
                              <SelectValue placeholder="+91" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="+91">+91</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <Input type="number" placeholder="Enter your phone number" />
                        </div>
                      </div>
                      <div className="formControl my-2">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" placeholder="Enter your Password" />
                      </div>
                      <div className="flex space-x-2 my-2">
                        <Checkbox id="terms1" />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="terms1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </form>
                    <Button className="bg-primary w-full">Login</Button>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* login Graphic */}
            <div className="loginImage place-items-end">
              <img src={loginGraphic} alt="login" className="w-[600px]" />
            </div>
          </div>
          <Signup />
        </>}
      </div>
    </>
  );
};

export default Login;
