import React from 'react';
import heartGIF from '../../assets/images/heart.gif';
import helloRobot from '../../assets/images/helloRobot.gif';

function NewsLetter() {
    return (
        <div className="bg-black p-32 flex relative bg-[url('../../assets/images/helloRobot.gif')]">
            <div className='w-1/2 flex flex-col justify-between'>
                <div>
                    <p className="text-success font-bold">Call to Action</p>
                    <h2 className="text-5xl leading-snug font-bold">
                        Grab Your Chance to <br />
                        Win a <span className="underline text-success">Car Now!</span>
                    </h2>
                </div>
                <div>
                    <button className="button button-primary rounded-full font-bold text-lg p-3">Need any help</button>
                </div>
            </div>
            <div className='w-1/2'>
                <div className="newsLetterForm bg-primary rounded-ss-[15%] rounded-se-none rounded-es-none rounded-ee-[15%] p-8 py-16 w-[60%] mx-auto ">
                    <h2 className="text-5xl font-bold mb-6">News Letter</h2>
                    <form className='grid gap-10'>
                        <div className="form_group">
                            <input type="text" placeholder="Name" className="border border-white placeholder:text-white bg-transparent rounded-full p-3 w-full" />
                        </div>
                        <div className="form_group">
                            <input type="email" placeholder="Email" className="border border-white placeholder:text-white bg-transparent rounded-full p-3 w-full" />
                        </div>
                        <div className="action">
                            <button className="button rounded-full px-6 py-2 bg-black text-white font-semibold">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <img src={heartGIF} className='absolute top-0 right-0 z-0'/>
        </div>
    )
}

export default NewsLetter