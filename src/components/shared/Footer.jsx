import React from 'react'
import footerlogo from "../../assets/images/footerlogo.png";
import location_icon from "../../assets/images/location_icon.png";
import mail_icon from "../../assets/images/mail_icon.png";
import telephone_icon from "../../assets/images/telephone_icon.png";

function Footer() {
    return (
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
                    <li>Home</li>
                    <li>Listing</li>
                    <li>Details</li>
                    <li>Login</li>
                    <li>Live Draw</li>
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
    )
}

export default Footer