import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import Navbar from "./Navbar";

const backgroundImages = [
    assets.background_image_1,
    assets.background_image_2,
    assets.background_image_3,
    assets.background_image_4,
    assets.background_image_5,
    assets.background_image_6,
    assets.background_image_7,
];

const Header = () => {
    const [index, setIndex] = useState(0);
    const { navigate } = useContext(AppContext);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen mb-4 w-full overflow-hidden">
            <Navbar />
            {/* Background Image Slider */}
            <div className="absolute inset-0 w-full h-full">
                <AnimatePresence>
                    <motion.div
                        key={index}
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${backgroundImages[index]})` }}
                    />
                </AnimatePresence>
            </div>

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
            >
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 text-white drop-shadow-[2px_2px_5px_rgba(0,0,0,0.8)]"
                >
                    Explore homes that fit your dreams
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="space-x-6 mt-16"
                >
                    <a
                        href=""
                        className="bg-white text-black font-medium py-3 rounded px-8 transition hover:bg-gray-200 shadow-lg"
                        onClick={() => navigate('/elevators')}
                    >
                        Products
                    </a>
                    <a
                        href="#Contact"
                        className="bg-blue-500 text-white font-medium py-3 rounded px-8 transition hover:bg-blue-600 shadow-lg"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Header;
