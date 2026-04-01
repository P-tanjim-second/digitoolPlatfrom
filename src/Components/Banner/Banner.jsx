import React from 'react';
import bannerImg from '../../../public/assets/banner.png'
import { Play } from 'lucide-react';

const Banner = () => {
    return (
        <div className='max-w-11/12 mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-10 mt-10 lg:mt-20'>
            <div className='space-y-8 flex flex-col justify-between items-center lg:items-baseline cartRevel'>
                <div className='space-y-4 flex flex-col items-center lg:items-baseline text-center lg:text-left'>
                    <div className='bg-[#e1e7ff] w-fit rounded-full text-[#4f39f6] py-1 px-4 flex gap-3 justify-center items-center font-semibold'>
                        <div className='w-2 h-2 bg-[#9514fa] rounded-full shadow-[0px_0px_5px_5px_#cf91ff]'></div>
                        <p>New: AI-Powered Tools Available</p>
                    </div>

                    <h1 className='text-[#101727] text-4xl lg:text-6xl xl:text-7xl font-bold lg:leading-18 xl:leading-20'>Supercharge Your <br /> Digital Workflow</h1>
                    <p className='text-[#627382] lg:w-[60%]'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>
                </div>
                <div className="buttons flex gap-5">
                    <a type='button' href='#Products' className='bg-linear-to-r hover:scale-[1.02] transition-transform relative cursor-pointer from-[#4f39f6] to-[#9514fa] text-white rounded-full border-none px-3 py-3.25 text-[14px] font-semibold before:absolute before:inset-0 before:bg-linear-to-r before:from-[#9514fa] before:to-[#4f39f6] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:rounded-full'><span className='relative z-10'>Explore Products</span></a>
                    <button className=' border-none px-3 hover:scale-[1.02] transition-transform cursor-pointer py-3.25 text-[14px] font-semibold rounded-full relative bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>
                        <span className='absolute inset-0.5 rounded-full bg-white z-0 '></span>
                        <span className='flex justify-center items-center gap-2 relative z-10'>
                            <Play color="#7a26fb" size={20} />
                            <span className='bg-linear-to-r from-[#2a10ee] to-[#9005fb] bg-clip-text text-transparent font-bold text-[15px] leading-none'>
                                Watch Demo
                            </span>
                        </span>
                    </button>
                </div>
            </div>
            <div className='imgRevel'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;