import { motion } from "framer-motion";
import React, { useContext } from "react";
import { assets } from "../assets/assets";
import constructionImg from "../assets/construction.jpg";
import elevatorImage from "../assets/elevtor.png";
import tunnelImage from "../assets/tunnel.png";
import { AppContext } from "../context/AppContext";

const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.2, duration: 0.6 },
    }),
};

const All_Projects = () => {
    const { navigate } = useContext(AppContext);

    const services = [
        { name: "Construction", img: constructionImg, link: "/construction" },
        { name: "Elevators", img: elevatorImage, link: "/elevators" },
        { name: "Tunnels", img: tunnelImage, link: "/tunnels" },
        { name: "HVAC", img: assets.hvacImage, link: "/hvac" },
        { name: "Software", img: assets.computerImage, link: "/software" },
        { name: "Tourism", img: assets.touristImage, link: "/tourism" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }} // Starts animating when 20% of the section is in view
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
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        variants={serviceVariants}
                        viewport={{ once: true, amount: 0.2 }}
                        className="cursor-pointer"
                        onClick={() => navigate(service.link)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.img
                            src={service.img}
                            alt={service.name}
                            className="w-full h-64 object-cover transition-transform rounded-lg duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        />
                        <h2 className="mt-2 text-xl font-semibold">{service.name}</h2>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default All_Projects;