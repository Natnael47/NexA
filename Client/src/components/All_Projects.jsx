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
                <motion.div
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    variants={serviceVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    className="cursor-pointer"
                    onClick={() => navigate("/construction")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.img
                        src={constructionImg}
                        alt="Construction"
                        className="w-full h-64 object-cover transition-transform rounded-lg duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0 * 0.2 }}
                        viewport={{ once: true }}
                    />
                    <h2 className="mt-2 text-xl font-semibold">Construction</h2>
                </motion.div>

                <motion.div
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    variants={serviceVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    className="cursor-pointer"
                    onClick={() => navigate("/elevators")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.img
                        src={elevatorImage}
                        alt="Elevators"
                        className="w-full h-64 object-cover transition-transform rounded-lg duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1 * 0.2 }}
                        viewport={{ once: true }}
                    />
                    <h2 className="mt-2 text-xl font-semibold">Elevators</h2>
                </motion.div>

                <motion.div
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    variants={serviceVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    className="cursor-pointer"
                    onClick={() => navigate("/tunnels")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.img
                        src={tunnelImage}
                        alt="Tunnels"
                        className="w-full h-64 object-cover transition-transform rounded-lg duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 2 * 0.2 }}
                        viewport={{ once: true }}
                    />
                    <h2 className="mt-2 text-xl font-semibold">Tunnels</h2>
                </motion.div>

                <motion.div
                    custom={3}
                    initial="hidden"
                    whileInView="visible"
                    variants={serviceVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    className="cursor-pointer"
                    onClick={() => navigate("/hvac")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.img
                        src={assets.hvacImage}
                        alt="HVAC"
                        className="w-full h-64 object-cover transition-transform rounded-lg duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 3 * 0.2 }}
                        viewport={{ once: true }}
                    />
                    <h2 className="mt-2 text-xl font-semibold">HVAC</h2>
                </motion.div>

                <motion.div
                    custom={4}
                    initial="hidden"
                    whileInView="visible"
                    variants={serviceVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    className="cursor-pointer"
                    onClick={() => navigate("/software")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.img
                        src={assets.computerImage}
                        alt="Software"
                        className="w-full h-64 object-cover transition-transform rounded-lg duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 4 * 0.2 }}
                        viewport={{ once: true }}
                    />
                    <h2 className="mt-2 text-xl font-semibold">Software</h2>
                </motion.div>

                <motion.div
                    custom={5}
                    initial="hidden"
                    whileInView="visible"
                    variants={serviceVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    className="cursor-pointer"
                    onClick={() => navigate("/tourism")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.img
                        src={assets.touristImage}
                        alt="Tourism"
                        className="w-full h-64 object-cover transition-transform rounded-lg duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 5 * 0.2 }}
                        viewport={{ once: true }}
                    />
                    <h2 className="mt-2 text-xl font-semibold">Tourism</h2>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default All_Projects;
