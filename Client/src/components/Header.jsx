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

const imageTexts = [
    "Innovating Modern Real Estate",
    "Engineering the Future of Buildings",
    "Elevating Lifestyles with Elevators",
    "Building Infrastructure That Lasts",
    "Crafting Architectural Excellence",
    "Powering HVAC & Smart Systems",
    "Your Vision, Our Expertise",
];

const Header = () => {
    const [index, setIndex] = useState(0);
    const [initialLoad, setInitialLoad] = useState(true);
    const { navigate } = useContext(AppContext);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % backgroundImages.length);
            setInitialLoad(false);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    const direction = index % 2 === 0 ? 1 : -1; // alternate left/right

    const bgVariants = {
        enter: (dir) => ({ opacity: 0, x: dir * 100 }),
        center: { opacity: 1, x: 0 },
        exit: (dir) => ({ opacity: 0, x: dir * -100 }),
    };

    const textDirections = [
        { x: -100 }, // left
        { x: 100 },  // right
        { y: -100 }, // top
        { y: 100 },  // bottom
    ];
    const textVariant = textDirections[index % textDirections.length];

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black">
            <Navbar />

            {/* Background Slideshow */}
            <div className="absolute inset-0 w-full h-full">
                <AnimatePresence custom={direction}>
                    <motion.div
                        key={`bg-${index}`}
                        variants={bgVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        custom={direction}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${backgroundImages[index]})`,
                            zIndex: 0,
                        }}
                    />
                </AnimatePresence>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none" />

            {/* Foreground Text Content */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
                <AnimatePresence mode="wait">
                    <motion.h2
                        key={`heading-${index}`}
                        initial={{ opacity: 0, ...textVariant }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl sm:text-6xl md:text-[82px] max-w-5xl font-bold drop-shadow-[2px_2px_5px_rgba(0,0,0,0.8)]"
                    >
                        {imageTexts[index]}
                    </motion.h2>
                </AnimatePresence>

                {/* Buttons */}
                <motion.div
                    key={`buttons-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-10 flex flex-wrap gap-6 justify-center"
                >
                    <Link
                        to="/elevators"
                        className="px-8 py-3 text-lg font-semibold text-black bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105"
                    >
                        Products
                    </Link>

                    <a
                        href="#Contact"
                        className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Header;
