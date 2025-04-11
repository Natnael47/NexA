import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const services = [
    { name: "Construction", img: assets.constructionImg, link: "/construction" },
    { name: "Elevators", img: assets.elevatorImage, link: "/elevators" },
    { name: "Tunnels", img: assets.tunnelImage, link: "/tunnels" },
    { name: "HVAC", img: assets.hvacImage, link: "/hvac" },
    { name: "Software", img: assets.computerImage, link: "/software" },
    { name: "Tourism", img: assets.touristImage, link: "/tourism" },
];

const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.2, duration: 0.6 },
    }),
};

const All_Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="container mx-auto py-20 px-6 md:px-20 text-center"
            id="Services"
        >
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
                Our <span className="font-light underline underline-offset-4 decoration-1">Services</span>
            </h1>
            <p className="text-center text-gray-500 mb-10 max-w-80 mx-auto">
                Explore our diverse range of expertise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <Link to={service.link} onClick={() => scrollTo(0, 0)} key={index}>
                        <motion.div
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            variants={serviceVariants}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                        >
                            <img
                                src={service.img}
                                alt={service.name}
                                className="w-full h-64 object-cover transition duration-500 group-hover:blur-sm"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-white text-4xl font-bold bg-black/40 px-6 py-3 rounded-lg transition-all duration-300 group-hover:text-5xl group-hover:bg-black/65 group-hover:scale-105">
                                    {service.name}
                                </h2>
                            </div>
                        </motion.div>
                    </Link>

                ))}
            </div>
        </motion.div>
    );
};

export default All_Projects;
