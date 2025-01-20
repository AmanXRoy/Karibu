import React from 'react';
import profile from '../../assets/images/profile.svg';
import calender from '../../assets/images/calender.svg';
import lock from '../../assets/images/Lock.svg';
import upload from '../../assets/images/upload.svg';
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


const Signup = () => {
    return (
        <>
            <div className='relative'>
                <h1 className='text-5xl text-center font-semibold'>Signup</h1>
                <Tabs defaultValue="loginUser" className="w-full h-full my-4">
                    <TabsList className="grid w-full grid-cols-2 bg-primary text-[#000] p-1 h-full">
                        <TabsTrigger value="loginUser" className="p-4">Signup as User/Merchant</TabsTrigger>
                        <TabsTrigger value="loginShop" className="p-4">Signup as Shop</TabsTrigger>
                    </TabsList>
                    <TabsContent value="loginUser">
                        <div className="signupForm grid grid-cols-2 gap-20 pt-[100px] pb-20">
                            <div className="inputControl px-6 py-4 flex items-center bg-white border-solid border-[#F4F4F4] border-[1px] rounded-[8px] shadow-lg flex-1">
                                <img src={profile} alt="Name" className='mr-3' />
                                <input type="text" name="name" id="name" className='' placeholder='Name' />
                            </div>
                            <div className="inputControl px-6 py-4 flex items-center bg-white border-solid border-[#F4F4F4] border-[1px] rounded-[8px] shadow-lg flex-1">
                                <img src={lock} alt="Name" className='mr-3' />
                                <input type="text" name="name" id="name" className='' placeholder='Mobile Number' />
                            </div>
                            <div className="inputControl px-6 py-4 flex justify-between items-center bg-white border-solid border-[#F4F4F4] border-[1px] rounded-[8px] shadow-lg flex-1 relative">
                                <img src={upload} alt="Name" className='mr-3' />
                                <input
                                    type="file"
                                    name="frontId"
                                    id="frontId"
                                    className='absolute top-0 right-0 bottom-0 left-0 opacity-0'
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onload = (e) => {
                                                const preview = document.getElementById('frontPreview');
                                                if (preview && e.target?.result) {
                                                    preview.src = e.target.result;
                                                    preview.style.display = 'block';
                                                }
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                                {<img id="frontPreview" className='h-10 hidden' alt="Preview" />}
                                <p className='text-center'>Upload Government Id (front)</p>
                            </div>
                            <div className="inputControl px-6 py-4 flex justify-between items-center bg-white border-solid border-[#F4F4F4] border-[1px] rounded-[8px] shadow-lg flex-1 relative">
                                <img src={upload} alt="Name" className='mr-3' />
                                <input
                                    type="file"
                                    name="backId"
                                    id="backId"
                                    className='absolute top-0 right-0 bottom-0 left-0 opacity-0'
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onload = (e) => {
                                                const preview = document.getElementById('backPreview');
                                                if (preview && e.target?.result) {
                                                    preview.src = e.target.result;
                                                    preview.style.display = 'block';
                                                }
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                                {<img id="backPreview" className='h-10 hidden' alt="Preview" />}
                                <p className='text-center'>Upload Government Id (Back)</p>
                            </div>

                            <div className="inputControl px-6 py-4 flex items-center bg-white border-solid border-[#F4F4F4] border-[1px] rounded-[8px] shadow-lg flex-1">
                                <img src={calender} alt="Name" className='mr-3' />
                                <input type="date" name="name" id="name" className='' placeholder='Name' />
                            </div>

                        </div>
                    </TabsContent>
                    <TabsContent value="loginShop">
                        <div className="signupForm grid grid-cols-2 gap-20 pt-[100px] pb-20">
                            <div className="inputControl px-6 py-4 flex items-center bg-white border-solid border-[#F4F4F4] border-[1px] rounded-[8px] shadow-lg flex-1">
                                <img src={profile} alt="Name" className='mr-3' />
                                <input type="text" name="name" id="name" className='' placeholder='Name' />
                            </div>
                            <div className="inputControl px-6 py-4 flex items-center bg-white border-solid border-[#F4F4F4] border-[1px] rounded-[8px] shadow-lg flex-1">
                                <img src={lock} alt="Name" className='mr-3' />
                                <input type="text" name="name" id="name" className='' placeholder='Mobile Number' />
                            </div>
                            <div className="inputControl px-6 py-4 flex justify-between items-center bg-white border-solid border-[#F4F4F4] border-[1px] rounded-[8px] shadow-lg flex-1 relative">
                                <img src={upload} alt="Name" className='mr-3' />
                                <input
                                    type="file"
                                    name="frontId"
                                    id="frontId"
                                    className='absolute top-0 right-0 bottom-0 left-0 opacity-0'
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onload = (e) => {
                                                const preview = document.getElementById('frontPreview');
                                                if (preview && e.target?.result) {
                                                    preview.src = e.target.result;
                                                    preview.style.display = 'block';
                                                }
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                                {<img id="frontPreview" className='h-10 hidden' alt="Preview" />}
                                <p className='text-center'>Upload Government Id (front)</p>
                            </div>
                            <div className="inputControl px-6 py-4 flex justify-between items-center bg-white border-solid border-[#F4F4F4] border-[1px] rounded-[8px] shadow-lg flex-1 relative">
                                <img src={upload} alt="Name" className='mr-3' />
                                <input
                                    type="file"
                                    name="backId"
                                    id="backId"
                                    className='absolute top-0 right-0 bottom-0 left-0 opacity-0'
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onload = (e) => {
                                                const preview = document.getElementById('backPreview');
                                                if (preview && e.target?.result) {
                                                    preview.src = e.target.result;
                                                    preview.style.display = 'block';
                                                }
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                                {<img id="backPreview" className='h-10 hidden' alt="Preview" />}
                                <p className='text-center'>Upload Government Id (Back)</p>
                            </div>

                            <div className="inputControl px-6 py-4 flex items-center bg-white border-solid border-[#F4F4F4] border-[1px] rounded-[8px] shadow-lg flex-1">
                                <img src={calender} alt="Name" className='mr-3' />
                                <input type="date" name="name" id="name" className='' placeholder='Name' />
                            </div>

                        </div>
                        <Button className="bg-primary w-full">Login</Button>
                    </TabsContent>
                </Tabs>
                <div className='flex items-center justify-center gap-24'>
                    <button className='bg-[#FFA500] py-8 px-14 rounded-[79px]'>
                        <p className='m-0 text-[34px] font-medium text-white'>Create Account</p>
                    </button>
                </div>
                <p className='text-center py-10 text-[28px]'>By providing your details, you agree to our <span className='font-semibold text-[#5BB450]'>Terms & Privacy Policy.</span></p>
            </div>

        </>

    )
}

export default Signup