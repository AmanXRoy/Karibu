import React from 'react'
import logo from "../../assets/images/karibu_logo.png";
import userLogo from "../../assets/images/user_svgrepo.com.svg";
import walletLogo from "../../assets/images/wallet_svgrepo.com.svg";
import RouterLink from '../base/RouterLink';

function Navbar() {
  return (
    <div className='h-36 bg-secondary px-16 flex items-center justify-between'>
      <img src={logo} alt="kabiru logo" className="logo" />
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/all-competition">All Competition</RouterLink>
      <RouterLink to="/live-draw">Live Draw</RouterLink>
      <RouterLink to="/winner">Winners</RouterLink>
      <div className="buttonWrapper">
      <button className='bg-[#FFFFFF66] p-2 rounded-[100%] me-[10px]'>
          <img src={walletLogo}/>
        </button>
        <button className='bg-[#FFFFFF66] p-2 rounded-[100%]'>
          <img src={userLogo}/>
        </button>
       
      </div>
    </div>
  )
}

export default Navbar