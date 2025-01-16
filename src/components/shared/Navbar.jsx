import { useEffect, useState } from 'react';
import logo from "../../assets/images/karibu_logo.png";
import RouterLink from '../base/RouterLink';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [showDropdown, setShowDropdown] = useState(false);


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }


  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <div className='h-36 bg-secondary px-16 flex items-center justify-between'>
      <img src={logo} alt="kabiru logo" className="logo" />
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/all-competition">All Competition</RouterLink>
      <RouterLink to="/live-draw">Live Draw</RouterLink>
      <RouterLink to="/winner">Winners</RouterLink>
      <div className="buttonWrapper relative">
      <Link to={'/login'}>
        <button className='rounded-[100px] bg-[#FFA500] py-4 px-8'>Login</button>
      </Link>
        {/* {showDropdown && <div className="dropdown absolute bg-white py-2 rounded-[10px] top-16 right-0 w-[200px] z-10" ref={dropdownRef}>
          <Link to={'/login?type=user'}>
            <button className='bg-[#FFA500] w-full p-2 border-[#fff] border-solid border-b-[2px]'>Login as User</button>
          </Link>
          <Link to={'/login?type=merchant'}>
          <button className='bg-[#FFA500] w-full p-2 border-[#fff] border-solid border-b-[2px]'>Login as Merchant</button>
          </Link>
          <Link to={'/login?type=shop'}>
          <button className='bg-[#FFA500] w-full p-2 border-[#fff] border-solid border-b-[2px]'>Login as Shop</button>
          </Link>
        </div>} */}

      </div>
    </div>
  )
}

export default Navbar