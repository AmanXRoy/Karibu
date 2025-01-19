import React from 'react'
import footerlogo from "../../assets/images/footerlogo.png";
import location_icon from "../../assets/images/location_icon.png";
import mail_icon from "../../assets/images/mail_icon.png";
import telephone_icon from "../../assets/images/telephone_icon.png";
import RouterLink from '../base/RouterLink';

function Footer() {
    return (
        <>
            <div className='flex justify-between px-16 py-8 text-black'>
                <div className='w-1/5'>
                    <div className="logo">
                        <img src={footerlogo} alt="logo" />
                    </div>
                    <p>Our Car Lottery is your chance to win a brand-new luxury car. It’s simple, thrilling, and could change your life. </p>
                </div>
                <div className='w-1/5 mt-5'>
                    <p className="font-semibold mb-3">Quick Links</p>
                    <ul className="grid gap-1">
                        <RouterLink to='/' >
                            <li className="text-[#000]">Home</li>
                        </RouterLink>
                        <RouterLink to='/'>
                            <li className="text-[#000]">Listing</li>
                        </RouterLink>
                        <RouterLink to='/'>
                            <li className="text-[#000]">Details</li>

                        </RouterLink>
                        <RouterLink to='/login'>
                            <li className="text-[#000]">Login</li>

                        </RouterLink>
                        <RouterLink to='/live-draw'>
                            <li className="text-[#000]">Live Draw</li>

                        </RouterLink>
                    </ul>
                </div>
                <div className='w-1/5 mt-5'>
                    <p className="font-semibold mb-3">Contact Us</p>
                    <ul>
                        <li className="flex gap-2 items-center mb-3">
                            <img src={location_icon} className="h-4" />
                            602 Central Ave., Findlay Ohio, CO
                        </li>
                        <li className="flex gap-2 items-center mb-3">
                            <img src={mail_icon} className="h-4" />
                            Karibuwinner@gmail.com
                        </li>
                        <li className="flex gap-2 items-center mb-3">
                            <img src={telephone_icon} className="h-4" />
                            Phone: 720-674-9305
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bottomBar bg-[#000] text-white py-[14px] px-16 flex items-center justify-between'>
                <p>Copyright © 2024 Karibu Winner </p>
                <ul className='flex items-center'>
                    <RouterLink to='/faq'>
                        <li>FAQ |</li>
                    </RouterLink>
                    <RouterLink to='privacypolicy'>
                    <li className='ms-[17px]'>Privacy Policy |</li>
                    </RouterLink>
                    <RouterLink to='terms&service'>
                    <li className='ms-[17px]'>Terms of Service </li>
                    </RouterLink>
                </ul>
            </div>
        </>
    )
}

export default Footer