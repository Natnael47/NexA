import { motion } from "framer-motion";
import React from "react";
import { assets } from "../assets/assets";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }} // Starts animating when 30% of the section is in view
            className="flex flex-col items-center justify-between container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
            id="About"
        >
            <h1 className="text-2xl sm:text-4xl font-black mb-2">
                About{" "}
                <span className="underline underline-offset-4 decoration-1 under font-light">
                    Our Brand
                </span>
            </h1>
            <p className="text-gray-500 max-w-80 text-center mb-8">
                Passionate About Properties, Dedicated to Your Vision
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
                <motion.img
                    src={assets.brand_img}
                    alt=""
                    className="w-full sm:w-1/2 max-w-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                />

                <motion.div
                    className="flex flex-col items-center md:items-start mt-10 text-gray-600"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                        {[
                            { value: "10+", text: "Years of Excellence" },
                            { value: "12+", text: "Projects Completed" },
                            { value: "20+", text: "Mn. Sq. Ft. Delivered" },
                            { value: "25+", text: "Ongoing Projects" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 * index }}
                                viewport={{ once: true }}
                            >
                                <p className="text-4xl font-medium text-gray-800">
                                    {item.value}
                                </p>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        className="my-10 max-w-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab
                        laudantium natus, voluptates eum doloremque expedita praesentium
                        delectus temporibus hic cupiditate commodi molestiae modi inventore
                        dignissimos fuga quae at sed?
                    </motion.p>

                    <motion.button
                        className="bg-blue-600 text-white px-8 py-2 rounded"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn More
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
