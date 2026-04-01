import React from 'react';

const TransformWorkflow = () => {
    return (
        <div className='w-full py-20  bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-center flex flex-col items-center justify-center space-y-3'>
            <h1 className='text-2xl lg:text-3xl font-extrabold'>Ready to Transform Your Workflow?</h1>
            <p className='text-white/90 text-[13px]'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            <div className='flex gap-2 mt-5'>
                <button className='btn bg-white p-3 rounded-full'><p className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent text-[14px] font-semibold'>Explore Products</p></button>
                <button className='btn border border-white bg-transparent text-white rounded-full p-3 text[12px] font-semibold'>View Pricing</button>
            </div>
            <p className='text-white/90 text-[13px]'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default TransformWorkflow;