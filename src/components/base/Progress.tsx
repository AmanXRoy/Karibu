import React from 'react';
import ticket from "../../assets/images/ticket.png"


const Progress = ({progress}) => {
    return (
        <div className="progress_bar relative flex max-w-[80%] mb-3 h-[50px]">
            <div
                className="progress_completed bg-primary grid place-items-center rounded-lg border-l border-t border-b border-primary h-full"
                style={{ width: `${progress}%` }}
            >
                <p className='text-[16px] text-[#fff]'>{progress}%</p>
            </div>
            <div className="progress_remaining rounded border-r border-t border-b border-[#75777A] h-full w-full"
                style={{ width: `${100 - progress}%` }}>
            </div>
            <img src={ticket} alt="ticket" className="h-16 w-[70px] -mt-6 -ml-8 absolute" style={{ left: `${progress}%` }} />
        </div>
    )
}

export default Progress