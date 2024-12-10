import React from 'react'
import AllCompetitionBannerBalloonRight from "../../assets/images/banner-balloon-right.png"
import AllCompetitionBannerBalloonLeft from "../../assets/images/banner-balloon-left.png"

function DetailsBanner() {
  return (
    <div className='bg-[#333333] relative h-[400px]'>
        <img src={AllCompetitionBannerBalloonLeft} alt="right balloon" className="absolute top-0 left-0" />
        <h1 className="text-7xl font-semibold h-full flex items-center justify-center">Raffle Detail Page</h1>
        <img src={AllCompetitionBannerBalloonRight} alt="left balloon" className="absolute top-0 right-0 z-0" />
    </div>
  )
}

export default DetailsBanner