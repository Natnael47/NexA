import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {

    return (
        <div className='pt-10 md:px-20 px-4 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.nexa_logo} alt="" className='w-[135px] h-[45px]' />
                    <p className='text-gray-400 mt-4'>NexA merges innovation with engineering to enhance both function and style. From advanced elevators to refined interiors and specialized solutions, we deliver excellence in every project.</p>
                </div>

                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <Link to={'/'}> <a href="" className='hover:text-white'>Home</a></Link>
                        <Link to={'/about'}><a href="" className='hover:text-white'>About Us</a></Link>
                        <Link to={'/contact-us'}><a href="" className='hover:text-white'>Contact Us</a></Link>
                        <Link to={'/privacy'}><a href="" className='hover:text-white'>Privacy Policy</a></Link>
                    </ul>
                </div>

                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                    <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles and resources sent to your inbox weekly.</p>
                    <div className='flex gap-2'>
                        <input type="email" placeholder='Enter your Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                        <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
                Copyright 2025 © NexA. All Right Reserved.
            </div>
        </div>
    )
}

export default Footer