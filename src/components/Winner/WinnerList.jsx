import React from 'react'
import WinnerCard from '../base/WinnerCard'

const WinnerList = () => {
    return (
        <div className='my-[100px] mx-[177px]'>
            <div className="winnerListWrapper flex gap-[44px] flex-wrap">
                <WinnerCard />
                <WinnerCard />
                <WinnerCard />
                <WinnerCard />
                <WinnerCard />
                <WinnerCard />
            </div>
        </div>
    )
}

export default WinnerList