import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import Navbar from "./Navbar";

const backgroundImages = [
    assets.background_image_1,
    assets.background_image_2,
    assets.elevatorImage,
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
        <div className="relative min-h-screen w-full overflow-hidden">
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

            {/* Centered Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4"
            >
                <motion.h2
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-4xl sm:text-6xl md:text-[82px] max-w-4xl font-bold drop-shadow-[2px_2px_5px_rgba(0,0,0,0.8)]"
                >
                    Innovating Real Estate, Elevators, and Software Solutions
                </motion.h2>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-10 flex flex-wrap gap-6 justify-center"
                >
                    <Link
                        to="/elevators"
                        className="px-8 py-3 text-lg font-semibold text-black bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:from-black hover:to-gray-800"
                    >
                        Products
                    </Link>

                    <a
                        href="#Contact"
                        className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-500"
                    >
                        Contact Us
                    </a>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Header;
