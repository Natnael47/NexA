import { motion } from "framer-motion";
import React from "react";
import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }} // Starts animating when 30% of the section is in view
            className="container mx-auto py-10 px-6 lg:px-32 w-full"
            id="Testimonials"
        >
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
                Meet Our <span className="font-light underline underline-offset-4 decoration-1">Team</span>
            </h1>
            <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
                The visionaries behind our success, shaping the future of construction with expertise and innovation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="shadow-lg border rounded-lg p-6 text-center bg-white"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.img
                            className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                            src={testimonial.image}
                            alt={testimonial.alt}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        />
                        <h2 className="text-xl text-gray-700 font-semibold">{testimonial.name}</h2>
                        <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
                        <p className="text-gray-600">{testimonial.text}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Testimonials;