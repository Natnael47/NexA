import { MenuIcon, X } from 'lucide-react';
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
        <div className='absolute top-0 left-0 w-full z-50'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>

                {/* Logo */}
                <div
                    className="rounded-xl p-2 cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <img
                        src={assets.C_logo}
                        alt="Logo"
                        className='w-[110px] h-[110px] object-contain'
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center">
                    <ul className='flex gap-8 px-12 py-3 bg-white/80 backdrop-blur-md border border-white/40 rounded-full shadow-lg hover:bg-white text-black font-medium text-base'>
                        {["Home", "About", "Services", "Contact"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item}`}
                                    className='px-5 py-2 rounded-full transition-all duration-300 hover:bg-blue-800/80 hover:text-white hover:shadow-md'
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Icon */}
                <MenuIcon
                    size={32}
                    onClick={() => setShowMobileMenu(true)}
                    className='md:hidden w-10 text-white cursor-pointer'
                />
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-screen w-3/4 bg-white/30 backdrop-blur-lg shadow-lg transform ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50`}>
                <div className='flex justify-end p-5'>
                    <X
                        size={32}
                        onClick={() => setShowMobileMenu(false)}
                        className='w-10 text-black cursor-pointer'
                    />
                </div>
                <ul className='flex flex-col items-center gap-6 mt-8 text-xl font-medium text-black'>
                    {["Home", "About", "Services", "Contact"].map((item) => (
                        <li key={item} className='w-full text-center'>
                            <a
                                href={`#${item}`}
                                className='px-6 py-3 w-full block hover:bg-blue-100 transition-all duration-300 rounded-lg'
                                onClick={() => setShowMobileMenu(false)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
