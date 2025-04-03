import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const { navigate } = useContext(AppContext);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMobileMenu]);

    return (
        <div className='top-0 left-0 w-full z-10 absolute bg-transparent'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
                {/* Logo */}
                <img
                    src={assets.logo}
                    alt="Logo"
                    className='w-[200px] h-[120px] max-w-[200px] max-h-[120px] object-contain cursor-pointer flex-shrink-0'
                    onClick={() => navigate('/')}
                />

                {/* Desktop Navigation */}
                <ul className='hidden md:flex gap-10 text-white font-semibold text-lg'>
                    <a href="#Header" className='hover:text-gray-300 transition'>Home</a>
                    <a href="#About" className='hover:text-gray-300 transition'>About</a>
                    <a href="#Services" className='hover:text-gray-300 transition'>Services</a>
                    <a href="#Contact" className='hover:text-gray-300 transition'>Contact</a>
                </ul>

                {/* Mobile Menu Icon */}
                <img
                    src={assets.menu_icon}
                    onClick={() => setShowMobileMenu(true)}
                    className='md:hidden w-8 cursor-pointer'
                    alt="Menu"
                />
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-screen w-3/4 bg-white/30 backdrop-blur-lg shadow-lg transform ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
                <div className='flex justify-end p-5'>
                    <img
                        src={assets.cross_icon}
                        onClick={() => setShowMobileMenu(false)}
                        className='w-6 cursor-pointer'
                        alt="Close"
                    />
                </div>
                <ul className='flex flex-col items-center gap-6 mt-8 text-xl font-medium'>
                    <a href="#Header" className='px-6 py-2 rounded-lg hover:bg-gray-200 w-full text-center' onClick={() => setShowMobileMenu(false)}>Home</a>
                    <a href="#About" className='px-6 py-2 rounded-lg hover:bg-gray-200 w-full text-center' onClick={() => setShowMobileMenu(false)}>About</a>
                    <a href="#Services" className='px-6 py-2 rounded-lg hover:bg-gray-200 w-full text-center' onClick={() => setShowMobileMenu(false)}>Services</a>
                    <a href="#Contact" className='px-6 py-2 rounded-lg hover:bg-gray-200 w-full text-center' onClick={() => setShowMobileMenu(false)}>Contact</a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;