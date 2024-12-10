import React from 'react';
import AllCompetitionBannerBalloonRight from "../../assets/images/banner-balloon-right.png"
import AllCompetitionBannerBalloonLeft from "../../assets/images/banner-balloon-left.png"
import AllCompetitionBannerSuv from "../../assets/images/all-competition-banner-suv.png"

function Banner() {
  return (
    <div className='grid grid-cols-2 bg-[#333333]'>
        <div className="relative p-12">
            <img src={AllCompetitionBannerBalloonLeft} alt="banner" className='absolute top-0 left-0 h-40' />
            <h1 className='text-7xl font-semibold h-full flex items-center justify-center'>All competitions</h1>
        </div>
        <div className="relative p-12">
            <img src={AllCompetitionBannerBalloonRight} alt="banner" className='absolute top-0 right-0 z-0 h-[100%]' />
            <img src={AllCompetitionBannerSuv} alt="banner" className='relative z-5' />
        </div>
    </div>
  )
}

export default Banner