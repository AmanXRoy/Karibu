import React from 'react';
import PurchaseTicketCard from './purchaseTicketCard/purchaseTicketCard';
import Paginator from '../base/Paginator';

const PurchaseTicket = () => {
  return (
    <>
    <div className="purchaseTicketWrapper text-center">
        <div className="purchaseTicketHeader w-fit mx-auto mt-[53px] flex">
            <p className='text-[44px] font-bold text-[#4E4E4E] py-[9px] px-[19px] rounded-l-[20px]  border-[1px] border-solid border-[#FFA500]'>Purchased Tickets</p>
            <span className='text-[44px] text-[#fff] bg-[#FFA500] rounded-e-[20px] py-[9px] px-[19px]'>52</span>
        </div>
        <div className="ticketWrapper grid justify-between lg:grid-cols-2 gap-[50px] mt-[42px]">
        <PurchaseTicketCard/>
        <PurchaseTicketCard/>
        <PurchaseTicketCard/>
        <PurchaseTicketCard/>
        <PurchaseTicketCard/>
        <PurchaseTicketCard/>
        </div>
        <div className='my-4'>

        <Paginator totalPages={3} active={2}/>
        </div>
    </div>
    </>
  )
}

export default PurchaseTicket