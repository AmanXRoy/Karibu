import React from 'react'
import WinnerCard from '../base/WinnerCard'

const WinnerList = () => {
    return (
        <div className='my-[100px] mx-[100px]'>
            <div className="winnerListWrapper grid justify-between lg:grid-cols-3 sm:grid-cols-2 gap-24">
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