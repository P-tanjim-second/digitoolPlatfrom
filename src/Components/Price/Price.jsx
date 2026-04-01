import React from 'react';

const Price = () => {
    return (
        <div className=' w-11/12 mx-auto py-28 text-center flex flex-col justify-center items-center space-y-7'>
            <div className='text-center iconShow relative'>
                <h1 className='text-[#101727] text-3xl lg:text-4xl xl:text-5xl font-bold lg:leading-18 xl:leading-20'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382] mx-auto'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-5  text-left'>
                <div className="card w-96 bg-base-100 shadow-sm  scale-[0.9] lg:scale-100 cartRevelScroll" style={{ animationRange: `entry 10% cover 30%`}}>
                    <div className="card-body flex flex-col justify-between">
                        {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
                        <div className='space-y-4'>
                            <div className="flex flex-col justify-between gap-1.5">
                                <h2 className="text-3xl font-bold">Starter</h2>
                                <p className='text-[#627382]'>Perfect for getting started</p>
                            </div>
                            <span className="text-xl"><span className='text-3xl font-semibold'>$0</span><span className='text-base text-[#627382]'>/Month</span></span>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>High-resolution image generation</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Customizable style templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Batch processing capabilities</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>AI-driven image enhancements</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <button className={`btn btn-block bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full`}>Get Started Free</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-sm  scale-[0.9] lg:scale-100 cartRevelScroll" style={{ animationRange: `entry 10% cover 30%`}}>
                    <div className="card-body text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-2xl">
                        <span className="bg-[#fef3c6] text-[#bb4d00] w-fit rounded-full px-2.5 font-medium absolute -top-2.5 left-[38%]">Most Popular</span>
                        <div className="flex flex-col justify-between gap-1.5">
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p>Best for professionals</p>
                        </div>
                        <span className="text-xl"><span className='text-3xl font-semibold'>$29</span><span className='text-base]'>/Month</span></span>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>High-resolution image generation</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Batch processing capabilities</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>AI-driven image enhancements</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advance analytics</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className={`btn btn-block border-none shadow-none rounded-full relative bg-white`}><span className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent'>Start Pro Trial</span></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-sm scale-[0.9] lg:scale-100 cartRevelScroll" style={{ animationRange: `entry 10% cover 30%`}}>
                    <div className="card-body">
                        {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
                        <div className="flex flex-col justify-between gap-1.5">
                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p className='text-[#627382]'>For teams and business</p>
                        </div>
                        <span className="text-xl"><span className='text-3xl font-semibold'>$99</span><span className='text-base text-[#627382]'>/Month</span></span>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Batch processing capabilities</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>AI-driven image enhancements</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className={`btn btn-block bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full`}>Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Price;