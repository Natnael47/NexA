import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "502f6be7-fd08-43db-b36e-c374f5726fa6");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'
        >
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='font-light underline underline-offset-4 decoration-1'>With Us</span></h1>
            <p className='text-center text-gray-500 mb-4 max-w-80 mx-auto'>Ready to make a move? Let's Build your Future Together</p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-6xl mx-auto bg-white rounded-2xl p-6"
            >
                <form className="text-gray-600" onSubmit={onSubmit}>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                            <label className="block text-left mb-2 text-sm font-medium">Your Name</label>
                            <input className="w-full border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" name="name" type="text" placeholder="Your Name" required />
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <label className="block text-left mb-2 text-sm font-medium">Your Email</label>
                            <input className="w-full border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" name="email" type="email" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="my-6">
                        <label className="block text-left mb-2 text-sm font-medium">Your Message</label>
                        <textarea className="w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" name="message" placeholder="Your Message" required />
                    </div>
                    <button className="bg-blue-600 text-white py-3 px-12 cursor-pointer rounded hover:bg-blue-800 transition-all shadow-lg w-full md:w-auto" type="submit">
                        Send Message
                    </button>
                    <p className="mt-4 text-sm text-center">{result}</p>
                </form>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-6xl mx-auto bg-white rounded-2xl p-10 flex flex-col gap-10 mt-5 shadow-2xl"
            >
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-6 text-gray-800 w-full md:w-1/2 text-start"
                    >
                        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                        <p className="text-gray-600 text-lg">Have questions or need assistance? Feel free to contact us using the details below.</p>

                        <div className="space-y-6">
                            {[{
                                Icon: MapPin,
                                title: "Our Location",
                                description: "Merkeb Plaza, Olompia - Easily accessible in the heart of the city."
                            }, {
                                Icon: Phone,
                                title: "Call Us",
                                description: "0216 331 11 80 - Available during business hours for any inquiries."
                            }, {
                                Icon: Mail,
                                title: "Email Us",
                                description: "info@NexaEngsolutions.com.et - We respond promptly to all inquiries."
                            }].map(({ Icon, title, description }, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="flex items-center gap-4"
                                >
                                    <Icon className="text-blue-600 w-8 h-8 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg font-semibold">{title}</p>
                                        <p className="text-gray-600 text-sm">{description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full md:w-1/2 h-[380px] rounded-xl overflow-hidden shadow-md"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.3400603197986!2d38.76682540993323!3d9.001552685988335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85bf78ae5f39%3A0x5876d9eab73e5228!2zTWVya2ViIFBsYXphIHwgT2xvbXBpYSB8IOGImOGIreGKqOGJpSDhjZXhiIvhi5sgfCDhiqbhiI7hiJ3hjZLhi6s!5e0!3m2!1sen!2set!4v1743275783641!5m2!1sen!2set"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
