import React from 'react';
import AllCompetitionBannerBalloonRight from "../../assets/images/banner-balloon-right.png";
import AllCompetitionBannerBalloonLeft from "../../assets/images/banner-balloon-left.png";
import StaveBackground from "../../assets/images/SteveBackgroound.svg";
import Stave from "../../assets/images/Steve.svg";

const WinnerBanner = () => {
    return (
        <div className='bg-[#333333] p-14 relative flex items-center h-[480px]'>
            <img src={AllCompetitionBannerBalloonLeft} alt="banner" className='absolute top-0 left-0' />
            <img src={AllCompetitionBannerBalloonRight} alt="banner" className='absolute top-0 right-0 z-0' />
            <div className="textContainer px-[180px]">
                <h1 className='text-5xl font-semibold mb-4'>Winner</h1>
                <p className='text-3xl'>A <span className='text-[#FFA500]'>Big Congratulations</span> to Our Raffle</p>
                <p className='text-3xl'>Champion—Your Luck Just Paid Off!</p>
            </div>
                <img src={StaveBackground} alt="steve"  className='absolute right-[15%] h-[480px]'/>
                <img src={Stave} alt="steve"  className='absolute right-[18%] h-[480px]' />
        </div>
    )
}

export default WinnerBanner