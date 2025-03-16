import { motion } from "framer-motion";
import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div
            className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
            style={{ backgroundImage: "url('/header_img.png')" }}
            id="Header"
        >
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
            >
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20"
                >
                    Explore homes that fit your dreams
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="space-x-6 mt-16"
                >
                    <a href="#Projects" className="border border-white py-3 rounded px-8 transition hover:bg-white hover:text-black">
                        Projects
                    </a>
                    <a href="#Contact" className="bg-blue-500 py-3 rounded px-8 transition hover:bg-blue-600 scale-105">
                        Contact us
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Header;
