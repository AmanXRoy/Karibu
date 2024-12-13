import React from 'react'
import logo from "../../assets/images/karibu_logo.png";
import RouterLink from '../base/RouterLink';

function Navbar() {
  return (
    <div className='h-36 bg-secondary px-16 flex items-center justify-between'>
      <img src={logo} alt="kabiru logo" className="logo" />
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/all-competition">All Competition</RouterLink>
      <RouterLink to="/live-draw">Live Draw</RouterLink>
      <RouterLink to="/winner">Winners</RouterLink>
      <RouterLink to="/more">More <i className="icon dropdown_action"></i></RouterLink>
      <button className="button button-primary px-4 py-2 rounded-full">Buy Tickets</button>
    </div>
  )
}

export default Navbar