import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar2 = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMobileMenu]);

    return (
        <div className='top-0 left-0 w-full z-10 absolute mb-5'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-black'>
                <Link to="/">
                    <img
                        src={assets.nexa_logo}
                        alt=""
                        className='w-[135px] h-[45px] hover:scale-1.5 cursor-pointer'
                    />
                </Link>
                <ul className='hidden md:flex gap-7 text-white'>
                    <Link to="/" className='cursor-pointer hover:text-gray-400'>Home</Link>
                    <Link to="/about" className='cursor-pointer hover:text-gray-400'>About</Link>
                    <Link to="/elevators" className='cursor-pointer hover:text-gray-400'>Services</Link>
                    <Link to="/contact-us" className='cursor-pointer hover:text-gray-400'>Contact Us</Link>
                </ul>

                <img
                    src={assets.menu_icon}
                    onClick={() => setShowMobileMenu(true)}
                    className='md:hidden w-7 cursor-pointer'
                    alt=""
                />
            </div>

            {/*---------------mobile menu --------------------*/}
            <div className={`fixed top-0 right-0 h-screen w-3/4 bg-white/30 backdrop-blur-lg shadow-lg transform ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img
                        src={assets.cross_icon}
                        onClick={() => setShowMobileMenu(false)}
                        className='w-6'
                        alt=""
                    />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <Link to="/" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobileMenu(false)}>Home</Link>
                    <Link to="/about" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobileMenu(false)}>About Us</Link>
                    <Link to="/elevators" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobileMenu(false)}>Products</Link>
                    <Link to="/contact-us" className='px-4 py-2 rounded-full inline-block' onClick={() => setShowMobileMenu(false)}>Contact Us</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar2;
