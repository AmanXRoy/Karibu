import React from 'react'
import RangeSlider from '../components/base/RangeSlider';
import lotteryTicker from '../assets/images/lottery1.svg';

const LotteryDetails = () => {
    return (
        <>
            <div className="z-10 mt-0 w-full bg-zinc-800 max-md:pl-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col px-20">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex z-10 flex-col self-stretch my-auto text-6xl font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                            <div className="self-start ml-6 text-3xl font-semibold text-amber-500 max-md:ml-2.5">
                                Your Chance to Dream Big
                            </div>
                            <div className="self-start mt-2.5 leading-none max-md:max-w-full max-md:text-4xl">
                                "Grab Your Ticket to{" "}
                            </div>
                            <div className="mt-2.5 mr-8 ml-6 leading-none max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                                Life-<span className="text-amber-500">Changing Prizes </span>
                                !"{" "}
                            </div>
                            <div className="mt-6 ml-7 text-2xl max-md:max-w-full">
                                "What would you do with a $1,000,000 win?" or "Share your lucky
                                number below!" encourages comments and shares.."
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ebec184140c1c5c88bedbf4a1081413d65056f68833541013d5d7f2584e2911?placeholderIfAbsent=true&apiKey=576932fa6bc1490587612e3a2c48aefc"
                            alt="Lottery prize showcase"
                            className="object-contain mt-0 w-full aspect-[1.13] max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                </div>
                <div className='ticketContainer px-[100px] bg-[#F5E5C7]'>
                    <p className='text-[28px] text-[#4E4E4E] font-semibold mt-[80px]'>How Many Tickets Do You Want?</p>
                    <div className="lotteryDetailsWrapper flex items-center">
                        <div className="lotteryitemImage border-r-[1px] border-[#fff] border-solid">
                            <img src={lotteryTicker} alt="lottery" className='' />
                        </div>
                        <div className="lotteryQuantity p-10">
                            <RangeSlider />
                            <p className='text-[#28A745] text-[30px] text-center mt-[89px]'>Buy more tickets to increase your chances of winning</p>
                        </div>
                    </div>
                <div className="flex flex-wrap gap-5 justify-between mt-5 ml-7 max-w-full text-5xl font-semibold w-[1179px] max-md:text-4xl">
                    <div className="my-auto text-orange-500 max-md:text-4xl">
                        Price $ 5.00
                    </div>
                    <button className="tracking-tighter text-center text-white whitespace-nowrap bg-amber-500 rounded-[89px] max-md:px-5 max-md:text-4xl hover:bg-amber-600 transition-colors">
                        Buy
                    </button>
                </div>
                </div>
            </div>
        </>
    )
}

export default LotteryDetails