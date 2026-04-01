import React from 'react';

const Footer = () => {
    return (
        <footer id='FAQ' className="footer sm:footer-horizontal py-20 text-white p-10 bg-[#101727]">
            <aside>
                <h3 className='text-4xl font-bold'>DigiTools</h3>
                <p>
                    ACME Industries Ltd.
                    <br />
                    Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <div className=''>
                <h3 className='footer-title'>Social Links</h3>
                <div className='text-black flex gap-2'>
                    <div className='p-4 bg-white w-10 h-10 rounded-full flex items-center justify-center text-[20px]'>
                        <i className="fa-brands fa-square-facebook"></i>
                    </div>
                    <div className='p-4 bg-white w-10 h-10 rounded-full flex items-center justify-center text-[20px]'>
                        <i className="fa-brands fa-square-instagram"></i>
                    </div>
                    <div className='p-4 bg-white w-10 h-10 rounded-full flex items-center justify-center text-[20px]'>
                        <i className="fa-brands fa-x-twitter"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;