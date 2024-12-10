import React from 'react'
import timer_car_1 from "../../assets/images/timer_car_1.png"
import timer_car_2 from "../../assets/images/timer_car_2.png"
import play_button_white from "../../assets/images/play_button_white.png"

function NextDraw() {
  return (
    <div className="bg-primary flex items-center justify-between max-h-[394px] overflow-hidden">
        <div className="car w-1/3">
            <img className="-mt-24 h-[380px]" src={timer_car_1} alt="" />
        </div>
        <div className="timer flex flex-col h-full gap-10 justify-evenly w-1/3">
            <h3 className="text-black text-5xl font-bold">Next Draw</h3>
            <div className="timer flex gap-4">
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-semibold">179</span>
                    <span className="text-black">Days</span>
                </div>
                <div className="text-5xl">:</div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-semibold">06</span>
                    <span className="text-black">Hours</span>
                </div>
                <div className="text-5xl">:</div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-semibold">46</span>
                    <span className="text-black">Minutes</span>
                </div>
                <div className="text-5xl">:</div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-semibold">10</span>
                    <span className="text-black">Seconds</span>
                </div>
            </div>
        </div>
        <div className="car2 flex w-[25%] w-1/3">
            <img src={timer_car_2} className="h-24" alt="" />
            <div className="bg-[#FF650E] rounded-full h-24 w-24 -ml-4 grid place-items-center">
                <img src={play_button_white} alt="" className='h-7' />
            </div>
        </div>
    </div>
  )
}

export default NextDraw