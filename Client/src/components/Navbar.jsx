import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [setShowMobileMenu])

    return (
        <div className='top-0 left-0 w-full z-10 absolute'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img src={assets.logo} alt="" />
                <ul className='hidden md:flex gap-7 text-white '>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Project</a>
                    <a href="#Contact" className='cursor-pointer hover:text-gray-400'>Contact us</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
                <img src={assets.menu_icon} onClick={() => setShowMobileMenu(true)} className='md:hidden w-7 cursor-pointer' alt="" />
            </div>
            {/*---------------mobile menu --------------------*/}
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img src={assets.cross_icon} onClick={() => setShowMobileMenu(false)} className='w-6' alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a href="#Header" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobileMenu(false)}>Home</a>
                    <a href="#About" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobileMenu(false)}>About Us</a>
                    <a href="#Projects" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobileMenu(false)}>Project</a>
                    <a href="#Contact" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobileMenu(false)}>Contact Us</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar