import React from 'react';
import tvsBrand from '../../assets/images/tvs.svg';
import toyataBrand from '../../assets/images/toyata.svg';
import iphoneBrand from '../../assets/images/iphone.svg';
import samsungBrand from '../../assets/images/samsung.svg';

const Partners = () => {
  return (
    <div className='partnersWrapper bg-[#F6F6F6] py-[70px] px-[100px]'>
        <p className='text-[40px] font-bold text-[#000] text-center mb-[40px]'>Our Brand Partner</p>
            <div className="brandCardWrapper flex gap-[35px] ">
                <div className="brandCard rounded-[34px] bg-[#fff] flex items-center">
                <img src={tvsBrand}/>
                </div>
                <div className="brandCard rounded-[34px] bg-[#fff] flex items-center">
                <img src={toyataBrand}/>
                </div>
                <div className="brandCard rounded-[34px] bg-[#fff] flex items-center">
                <img src={iphoneBrand}/>
                </div>
                <div className="brandCard rounded-[34px] bg-[#fff] flex items-center">
                <img src={samsungBrand}/>
                </div>
            </div>
    </div>
  )
}

export default Partners