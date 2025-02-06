import React from 'react';
import card2 from '../../../assets/images/card2.png';
import cardBackground from '../../../assets/images/purchaseTicketbg.svg'

function PurchaseTicketCard() {
  return (
    <div className='purchaseCard flex items-center gap-[25px] py-[16px] px-[20px]'>
        <div className="ticketImage">
            <div className="imageBackground w-[250px] h-[250px] bg-[linear-gradient(#FFA500,#FFA500)] rounded-full border-[2px] border-solid border-[#FFFFFF] relative flex justify-center items-center">
                <div className="image w-[200px]">
                    <img src={card2} alt="card1" />
                </div>
            </div>
        </div>
        <div className="ticketDetails text-left">
            <p className='text-[24px] text-[#000000] font-bold mb-2'>Toyota Double Cabin</p>
            <p className='text-[30px] text-[#FFA500] font-normal mb-3'>#73221112912</p>
            <p className='text-[24px] text-[#000000] font-normal mb-2'>Ticket Price</p>
            <p className='text-[30px] text-[#FF650E] font-bold mb-3'>$ 16.00</p>
            <p className='text-[#BFBFBF] font-medium text-[25px]'>16 January 2025  <span className='text-[#fff] bg-[linear-gradient(#FF650E,#FF650E)] p-[8px] text-[25px] rounded-[11px]'>06</span></p>
           
        </div>
    </div>
  )
}

export default PurchaseTicketCard