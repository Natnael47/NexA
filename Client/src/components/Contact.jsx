import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='font-light underline underline-offset-4 decoration-1'>With Us </span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to make a move? Let's Build your Future Together</p>

            <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>Your Name
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' name='Name' type="text" placeholder='Your Name' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' name='Email' type="email" placeholder='Your Email' required />
                    </div>
                </div>

                <div className='my-6 text-left'>
                    Your Message
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name='Message' rows='4' placeholder='Your Message' required />
                </div>
                <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-blue-800 cursor-pointer'>Send Message</button>
            </form>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto mt-8 bg-white shadow-2xl rounded-2xl p-8">
                {/* Left Side - Contact Details with Descriptions */}
                <div className="space-y-6 text-gray-800">
                    <div>
                        <p className="flex items-center gap-3 text-lg font-semibold">
                            <MapPin className="text-blue-600 w-6 h-6" /> Merkeb Plaza, Olompia
                        </p>
                        <p className="text-gray-600 text-sm">Our office is located in the heart of Olompia for easy accessibility.</p>
                    </div>

                    <div>
                        <p className="flex items-center gap-3 text-lg font-semibold">
                            <Phone className="text-blue-600 w-6 h-6" /> 0216 331 11 80
                        </p>
                        <p className="text-gray-600 text-sm">Feel free to call us during business hours for any inquiries.</p>
                    </div>

                    <div>
                        <p className="flex items-center gap-3 text-lg font-semibold">
                            <Mail className="text-blue-600 w-6 h-6" /> info@NexaEngsolutions.com.et
                        </p>
                        <p className="text-gray-600 text-sm">Send us an email, and our team will get back to you promptly.</p>
                    </div>
                </div>

                {/* Right Side - Google Map Image with Description */}
                <div className="cursor-pointer text-center">
                    <a href="https://maps.app.goo.gl/T4SnJS8caZfFTQfB8" target="_blank" rel="noopener noreferrer">
                        <img
                            src={assets.googleMap}
                            alt="Google Map"
                            className="w-96 h-64 object-cover rounded-xl shadow-lg hover:opacity-90 transition-opacity border-2 border-black duration-300"
                        />
                    </a>
                    <p className="text-gray-600 text-sm mt-2">Click the map to get directions to our office.</p>
                </div>
            </div>

        </div>
    )
}

export default Contact