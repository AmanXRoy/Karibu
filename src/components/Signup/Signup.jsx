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
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from 'react-router-dom';


const Signup = (showLoginForm) => {
    console.log(showLoginForm.showLoginForm)
    const [date, setDate] = React.useState()
    return (
        <>
            <div className='relative'>
                <h1 className='text-5xl text-center font-semibold'>Signup</h1>
                <Tabs defaultValue="loginUser" className="w-full h-full my-4">
                    <TabsList className="grid w-full grid-cols-2 bg-primary text-[#000] p-1 h-full">
                        <TabsTrigger value="loginUser" className="p-2">Signup as Individual</TabsTrigger>
                        <TabsTrigger value="loginShop" className="p-2">Signup as Merchant</TabsTrigger>
                    </TabsList>
                    <TabsContent value="loginUser">
                        <div className="signupForm">
                            {/* <div className="formControl my-4">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" placeholder="Enter your email" />
                            </div> */}
                            <div className="formControl my-3">
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
                            {/* <div className="formControl my-4">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" placeholder="Enter your Password" />
                            </div> */}
                            <div className="formControl my-4">
                                <Label htmlFor="Upload Government Id(Front)">Upload Government Id(Front)</Label>
                                <Input type="file" placeholder="Upload Government Id(Front)" />
                            </div>
                            <div className="formControl my-4">
                                <Label htmlFor="Upload Government Id(Back)">Upload Government Id(Back)</Label>
                                <Input type="file" placeholder="Upload Government Id(Back)" />
                            </div>
                            {/* <div className="formControl my-4">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon />
                                            {date ? format(date, "PPP") : <span>Date of birth</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            className="w-full"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div> */}
                             <Link to="/verifyotp">
                            <Button className="bg-primary w-full my-4" >Create Account</Button>
                            </Link>
                        </div>
                    </TabsContent>
                    <TabsContent value="loginShop">
                        <div className="signupForm">
                            <div className="formControl my-3">
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
                            {/* <div className="formControl my-4">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" placeholder="Enter your Password" />
                            </div> */}
                            <div className="formControl my-4">
                                <Label htmlFor="Upload Government Id(Front)">Upload Government Id(Front)</Label>
                                <Input type="file" placeholder="Upload Government Id(Front)" />
                            </div>
                            <div className="formControl my-4">
                                <Label htmlFor="Upload Government Id(Back)">Upload Government Id(Back)</Label>
                                <Input type="file" placeholder="Upload Government Id(Back)" />
                            </div>
                            {/* <div className="formControl my-4">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon />
                                            {date ? format(date, "PPP") : <span>Date of birth</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            className="w-full"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div> */}
                            <Link to="/verifyotp">
                            <Button className="bg-primary w-full my-4" >Create Account</Button>
                            </Link>
                        </div>
                    </TabsContent>
                </Tabs>
                <p className='text-center py-2 text-[14px]'>By providing your details, you agree to our <span className='font-semibold text-[#5BB450]'>Terms & Privacy Policy.</span></p>
                {/* <p className='text-center pb-0 text-[14px]'>if you have an account, click on <span className='font-semibold text-[#5BB450] cursor-pointer' onClick={() => showLoginForm.showLoginForm()}>Login</span></p> */}
            </div>

        </>

    )
}

export default Signup