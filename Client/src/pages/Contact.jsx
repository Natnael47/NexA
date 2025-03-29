import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const Contact = () => {
    return (
        <div className="w-full mx-auto mt-28">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 mt-10 text-center">
                Contact <span className="font-light underline underline-offset-4 decoration-1">With Us</span>
            </h1>

            <div className="max-w-6xl mx-auto bg-white rounded-2xl p-10 flex flex-col gap-10">
                {/* Contact Details and Map Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-6 text-gray-800 w-full md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                        <p className="text-gray-600 text-lg">
                            Have questions or need assistance? Feel free to contact us using the details below.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-blue-600 w-7 h-7" />
                                <div>
                                    <p className="text-lg font-semibold">Our Location</p>
                                    <p className="text-gray-600 text-sm">
                                        Merkeb Plaza, Olompia - Easily accessible in the heart of the city.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="text-blue-600 w-7 h-7" />
                                <div>
                                    <p className="text-lg font-semibold">Call Us</p>
                                    <p className="text-gray-600 text-sm">
                                        0216 331 11 80 - Available during business hours for any inquiries.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="text-blue-600 w-7 h-7" />
                                <div>
                                    <p className="text-lg font-semibold">Email Us</p>
                                    <p className="text-gray-600 text-sm">
                                        info@NexaEngsolutions.com.et - We respond promptly to all inquiries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Google Map */}
                    <div className="w-full md:w-1/2 h-[380px] rounded-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.3400603197986!2d38.76682540993323!3d9.001552685988335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85bf78ae5f39%3A0x5876d9eab73e5228!2zTWVya2ViIFBsYXphIHwgT2xvbXBpYSB8IOGImOGIreGKqOGJpSDhjZXhiIvhi5sgfCDhiqbhiI7hiJ3hjZLhi6s!5e0!3m2!1sen!2set!4v1743275783641!5m2!1sen!2set"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border-t border-blue-300 p-6 mt-10">
                <form className="text-gray-600">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4">
                            <label className="block text-left mb-2 text-sm font-medium">Your Name</label>
                            <input
                                className="w-full border border-gray-300 rounded py-3 px-4"
                                name="Name"
                                type="text"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <label className="block text-left mb-2 text-sm font-medium">Your Email</label>
                            <input
                                className="w-full border border-gray-300 rounded py-3 px-4"
                                name="Email"
                                type="email"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                    </div>

                    <div className="my-6">
                        <label className="block text-left mb-2 text-sm font-medium">Your Message</label>
                        <textarea
                            className="w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none"
                            name="Message"
                            placeholder="Your Message"
                            required
                        />
                    </div>

                    <button className="bg-blue-600 text-white py-3 px-12 rounded hover:bg-blue-800 transition-all w-full md:w-auto">
                        Send Message
                    </button>
                </form>
            </div>

            {/* Spacer between button and footer */}
            <div className="h-20"></div>
        </div>
    );
};

export default Contact;
