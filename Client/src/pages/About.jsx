import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Users } from 'lucide-react';
import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
    return (
        <div className="w-11/12 md:w-4/5 mx-auto mt-28">
            {/* Title */}
            <div className="text-center">
                <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                    About <span className="font-light underline underline-offset-4 decoration-1">NexA</span>
                </h1>
            </div>

            {/* Main Content Section */}
            <div className="my-12 flex flex-col md:flex-row gap-8 md:gap-14 items-center max-w-7xl mx-auto">
                {/* Image Section with cool effect */}
                <motion.div
                    className="relative w-full md:w-1/2 lg:w-5/12 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Glowing Border Animation */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500 opacity-70 blur-md animate-spin-slow group-hover:opacity-100 group-hover:blur-lg z-0"></div>

                    {/* Overlay to contain glow only around border */}
                    <div className="relative z-10 p-[3px] rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-500 group-hover:shadow-[0_0_30px_8px_rgba(59,130,246,0.6)] transition-all duration-500">
                        <img
                            src={assets.about_img}
                            alt="Brand"
                            className="w-full object-cover rounded-2xl block"
                        />
                    </div>
                </motion.div>

                {/* Text Section */}
                <div className="flex flex-col justify-center gap-6 text-gray-800 md:w-1/2 text-lg leading-relaxed">
                    <p>
                        At <strong>NexA</strong>, we take pride in combining cutting-edge technology with creative engineering to enhance both functionality and aesthetics. Our commitment to precision, efficiency, and compliance with international standards makes us a trusted partner.
                    </p>
                    <p>
                        Whether it’s installing state-of-the-art elevators, refining interior spaces, or providing specialized engineering solutions, we are dedicated to excellence in every project.
                    </p>
                    <b className="text-gray-900 text-xl">Our Expertise</b>
                    <p>
                        <span className="font-semibold">Elevators & Vertical Transportation Systems:</span> We provide advanced elevator solutions, from design and installation to modernization, ensuring safety, efficiency, and seamless vertical mobility.
                    </p>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-12">
                <h1 className="text-2xl sm:text-4xl font-bold mb-6">Why <span className="font-light underline underline-offset-4 decoration-1">Choose Us</span></h1>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Card Template */}
                    {[
                        {
                            icon: <Lightbulb className="w-6 h-6 transition-all group-hover:text-white" />,
                            title: "Innovation & Technology",
                            desc: "We stay ahead of industry trends, using the latest technologies to provide efficient and cutting-edge solutions that drive progress.",
                        },
                        {
                            icon: <Users className="w-6 h-6 transition-all group-hover:text-white" />,
                            title: "Skilled Professionals",
                            desc: "Our team of engineers, designers, and consultants ensures precision and superior execution in every project.",
                        },
                        {
                            icon: <ShieldCheck className="w-6 h-6 transition-all group-hover:text-white" />,
                            title: "Quality & Compliance",
                            desc: "We adhere to international standards and best practices, ensuring safety, durability, and high performance.",
                        },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="group border rounded-xl px-10 py-12 flex flex-col gap-5 bg-gray-100 shadow-md hover:bg-gradient-to-r hover:from-[#101828] hover:to-blue-900 hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                {card.icon}
                                <b className="text-lg">{card.title}</b>
                            </div>
                            <p className="text-sm sm:text-base">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
