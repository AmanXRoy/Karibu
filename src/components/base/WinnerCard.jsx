import React from 'react';
import card1 from '../../assets/images/card1.png';
import time from '../../assets/images/time.svg';
import trophy from '../../assets/images/trophy.svg';
import ticket from '../../assets/images/ticket.svg';

const WinnerCard = (winningImage,title, winnningDate, winnerName, winningNumber) => {
    return (
        <div className='winnerCard text-black'>
            <div className="winnerItemImage">
                <img src={card1} />
            </div>
            <div className="winnerItemDetails">
                <p className='text-xl font-semibold mb-3'>Toyota Double Cabin</p>
                <ul>
                    <li className='flex mb-3 items-center'> <img src={time} className='me-4' /> Drawn: Sun 01 Dec 2025</li>
                    <li className='flex mb-3 items-center'><img src={trophy}  className='me-4' /> Winner: Steve k. from Italy</li>
                    <li className='flex mb-3 items-center'> <img src={ticket}  className='me-4' />Winning number: 7869</li>
                </ul>
                <button className='text-[#FF5F00]'>Watch Draw</button>
            </div>
        </div>
    )
}

export default WinnerCard