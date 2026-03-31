import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const links = ["Products", "Features", "Pricing", "Testimonials", "FAQ"]

const Navbar = () => {
    const [cartNum, setCartNum] = useState(0)
    const NavLinks = ({ link }) => {
        return <li><a className='hover:text-black/50 transition-colors cursor-pointer'>{link}</a></li>
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className='navbar max-w-11/12 mx-auto flex p-0'>
                <div className="navbar-start h-full">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links.map((link, i) => <NavLinks key={i} link={link}></NavLinks>)}
                        </ul>
                    </div>
                    <h1 className="text-5xl font-extrabold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent pb-2">DigiTools</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex menu-horizontal px-1 capitalize gap-10 font-semibold text-[16px]">
                        {links.map((link, i) => <NavLinks key={i} link={link}></NavLinks>)}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div className='indicator'>
                        <span className={`indicator-item bg-secondary w-5 h-5 rounded-full text-white flex items-center justify-center text-[12px] ${cartNum == 0? "hidden":""}`}>{cartNum}</span>
                        <ShoppingCart />
                    </div>
                    <a href="" className='font-semibold hover:text-black/50 transition-colors'>Login</a>
                    <a className="btn rounded-full relative bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white before:absolute before:inset-0 before:bg-linear-to-r before:from-[#9514fa] before:to-[#4f39f6] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:rounded-full"><span className='relative z-10'>Get Started</span></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;