import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div className='pt-10 md:px-20 px-4 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start gap-10'>
                {/* Logo and description */}
                <div className='w-full md:w-1/3'>
                    <img src={assets.nexa_logo} alt="NexA Logo" className='w-[135px] h-[45px]' />
                    <p className='text-gray-400 mt-4'>
                        NexA merges innovation with engineering to enhance both function and style.
                        From advanced elevators to refined interiors and specialized solutions, we
                        deliver excellence in every project.
                    </p>
                </div>

                {/* Navigation links */}
                <div className='w-full md:w-1/5'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <Link to={'/'}><span className='hover:text-white cursor-pointer'>Home</span></Link>
                        <Link to={'/about'} onClick={() => scrollTo(0, 0)}><span className='hover:text-white cursor-pointer'>About Us</span></Link>
                        <Link to={'/contact-us'} onClick={() => scrollTo(0, 0)}><span className='hover:text-white cursor-pointer'>Contact Us</span></Link>
                        <Link to={'/privacy'} onClick={() => scrollTo(0, 0)}><span className='hover:text-white cursor-pointer'>Privacy Policy</span></Link>
                    </ul>
                </div>

                {/* Product highlights */}
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Our Products</h3>
                    <ul className='text-gray-400 flex flex-col gap-2'>
                        <Link to={'/elevators'}><li className='hover:text-white cursor-pointer'>Elevators</li></Link>
                        <Link to={'/construction'}><li className='hover:text-white cursor-pointer'>Construction</li></Link>
                        <Link to={'/software'}><li className='hover:text-white cursor-pointer'>Software</li></Link>
                        <Link to={'/tourism'}><li className='hover:text-white cursor-pointer'>Tourism</li></Link>
                    </ul>
                </div>
            </div>

            {/* Bottom line */}
            <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
                Copyright 2025 © NexA. All Right Reserved.
            </div>
        </div>
    );
}

export default Footer;
