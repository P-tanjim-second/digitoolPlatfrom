import React from 'react';

const State = () => {
    return (
        <div className='mt-20 h-[25vh] md:h-[30vh] bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex justify-center items-center'>
            <div className='flex gap-5   md:gap-20 justify-between items-center'>
                <div className='space-y-3'>
                    <h1 className='text-3xl md:text-5xl text-white font-bold'>50K+</h1>
                    <p className='text-md md:text-xl font-semibold text-white/80'>Active users</p>
                </div>
                <div className='h-15 bg-white/50 w-[1.7px] rounded-lg'></div>
                <div className='space-y-3'>
                    <h1 className='text-3xl md:text-5xl text-white font-bold'>200+</h1>
                    <p className='text-md md:text-xl font-semibold text-white/80'>Premium Tools</p>
                </div>
                <div className='h-15 bg-white/50 w-[1.7px] rounded-lg'></div>
                <div className='space-y-3'>
                    <h1 className='text-3xl md:text-5xl text-white font-bold'>4.9</h1>
                    <p className='text-md md:text-xl font-semibold text-white/80'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default State;