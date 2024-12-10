import React from 'react'
import toyotaSuv from "../../assets/images/toyota_suv.png"

function UpperBanner() {
  return (
    <div className="bg-secondary-light flex items-center justify-between px-16 py-8">
        <div>
            <p className="font-semibold text-primary">Big Wins, Big Dreams</p>
            <h1 className="text-6xl font-bold mb-3">
                "Will You Be Our Next
                <br />
                Raffle <span className='text-primary'>Champion?"</span>
            </h1>
            <p className="mb-5">
                “Buying a Raffle ticket is a moment of hope; winning is a twist of
                <br />
                fate, but what you do with that chance defines your fortune.”
            </p>
            <div className="actions flex gap-5">
                <button className="button button-primary px-4 w-44 py-2 rounded-full font-semibold">Play Now</button>
                <button className="button px-4 w-44 py-2 flex items-center gap-3 font-semibold">
                    <i className="play_button"></i> Watch Video
                </button>
            </div>
        </div>
        <div className="car w-[45%]">
            <img src={toyotaSuv} alt="Toyota SUV" />
        </div>
    </div>
  )
}

export default UpperBanner