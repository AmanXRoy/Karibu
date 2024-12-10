import React from 'react'
import toyota_jeep from "../../assets/images/toyota_jeep_bg.png"
import one from "../../assets/images/1.png"
import two from "../../assets/images/2.png"
import three from "../../assets/images/3.png"

const stepsData = [
    {
        step: 'STEP_01',
        heading: 'Choose Prize',
        description: 'Our exclusive Raffle limits the number of entries, enhancing your chances of winning.',
        url: one,
        alt: '1.png',
    },
    {
        step: 'STEP_02',
        heading: 'Live Draw',
        description: 'Our exclusive Raffle limits the number of entries, enhancing your chances of winning.',
        url: two,
        alt: '2.png',
    },
    {
        step: 'STEP_03',
        heading: 'Win Prize',
        description: 'Our exclusive Raffle limits the number of entries, enhancing your chances of winning.',
        url: three,
        alt: '3.png',
    },
]

function Guide() {
  return (
    <div className='bg-black px-16 pb-8'>
        <div className="flex justify-between items-center">
            <p className="font-bold text-5xl">
                The Complete Guide
                <br />
                to <span className='text-success underline'>Success!</span>
            </p>
            <img src={toyota_jeep} alt="Toyota Jeep" className="w-1/3" />
        </div>
        <div className="steps flex justify-between">
            {
                stepsData.map((step, index) => {
                    return <>
                        <div key={step.step} className="w-1/5">
                            <div className='flex justify-between'>
                                <div className="flex flex-col justify-start gap-20">
                                    <p className="text-success">{step.step}</p>
                                    <p className="font-bold text-2xl">{step.heading}</p>
                                </div>
                                <img src={step.url} alt={step.alt} />
                            </div>
                            <div>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    </>
                })
            }
        </div>
    </div>
  )
}

export default Guide