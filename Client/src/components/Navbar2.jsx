import { MenuIcon, X } from 'lucide-react';
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
                        alt="Logo"
                        className="w-[135px] h-[45px] cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    />
                </Link>

                <ul className='hidden md:flex gap-7 text-white'>
                    {[
                        { to: "/", label: "Home" },
                        { to: "/about", label: "About" },
                        { to: "/elevators", label: "Services" },
                        { to: "/contact-us", label: "Contact Us" },
                    ].map((link, i) => (
                        <Link
                            key={i}
                            to={link.to}
                            className='relative cursor-pointer transition duration-300 hover:text-gray-300 group'
                        >
                            {link.label}
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </ul>


                <MenuIcon size={32} onClick={() => setShowMobileMenu(true)}
                    className='md:hidden w-12 cursor-pointer text-white' />
            </div>

            {/*---------------mobile menu --------------------*/}
            <div className={`fixed top-0 right-0 h-screen w-3/4 bg-white/30 backdrop-blur-lg shadow-lg transform ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
                <div className='flex justify-end p-6 cursor-pointer'>

                    <X size={32} onClick={() => setShowMobileMenu(false)}
                        className='w-12' />
                </div>
                <ul className='flex flex-col items-center gap-5 mt-5 px-5 text-lg font-medium text-b;ack'>
                    {[
                        { to: "/", label: "Home" },
                        { to: "/about", label: "About Us" },
                        { to: "/elevators", label: "Products" },
                        { to: "/contact-us", label: "Contact Us" },
                    ].map((link, i) => (
                        <Link
                            key={i}
                            to={link.to}
                            onClick={() => setShowMobileMenu(false)}
                            className="relative cursor-pointer transition duration-300 hover:text-gray-800 group"
                        >
                            {link.label}
                            <span className="absolute left-1/2 -bottom-1 translate-x-[-50%] w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default Navbar2;
