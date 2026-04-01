import React from 'react';

const Steps = () => {
    return (
        <div className=' mx-auto mt-28 py-28 text-center flex flex-col justify-center items-center space-y-5 bg-[#f9fafc]'>
            <div className='text-center'>
                <h1 className='text-[#101727] text-3xl lg:text-4xl xl:text-5xl font-bold lg:leading-18 xl:leading-20'>Get Started in 3 Steps</h1>
                <p className='text-[#627382] mx-auto'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='flex flex-wrap gap-5 justify-center relative'>
                <div className='rounded-lg scale-[0.9] lg:scale-100 shadow-sm flex flex-col items-center justify-center gap-2 bg-white relative w-95 h-95'>
                    <div className='absolute top-5 right-5 text-white rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] px-2 py-1.5 text-[12px] font-semibold'><p>01</p></div>
                    <div className='bg-[#f1e9fe] rounded-full p-3'>
                        <img className='w-full' src="/assets/user.png"/>
                    </div>
                    <h4 className='text-2xl font-semibold'>Create Account</h4>
                    <p className='w-[90%] text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='rounded-lg scale-[0.9] lg:scale-100  bg-white shadow-sm flex flex-col items-center justify-center gap-2  w-95 h-95 relative'>
                    <div className='absolute top-5 right-5 text-white rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] px-2 py-1.5 text-[12px] font-semibold'><p>02</p></div>
                    <div className='bg-[#f1e9fe] rounded-full p-3'>
                        <img className='w-full' src="/assets/package.png"/>
                    </div>
                    <h4 className='text-2xl font-semibold'>Choose Products</h4>
                    <p className='w-[90%] text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='rounded-lg scale-[0.9] lg:scale-100  bg-white shadow-sm flex flex-col items-center justify-center gap-2  w-95 h-95 relative'>
                    <div className='absolute top-5 right-5 text-white rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] px-2 py-1.5 text-[12px] font-semibold'><p>03</p></div>
                    <div className='bg-[#f1e9fe] rounded-full p-3'>
                        <img className='w-full' src="/assets/rocket.png"/>
                    </div>
                    <h4 className='text-2xl font-semibold'>Start Creating</h4>
                    <p className='w-[90%] text-[#627382]'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;