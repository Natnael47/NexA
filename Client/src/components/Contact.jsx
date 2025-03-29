import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='font-light underline underline-offset-4 decoration-1'>With Us </span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to make a move? Let's Build your Future Together</p>

            <form className='max-w-2xl mx-auto text-gray-600 pt-5'>
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

                {/* Right Side - Embedded Google Map */}
                <div className="w-full md:w-[400px] h-[300px] rounded-xl overflow-hidden shadow-lg border-2 border-gray-300">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.3400603197986!2d38.76682540993323!3d9.001552685988335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85bf78ae5f39%3A0x5876d9eab73e5228!2zTWVya2ViIFBsYXphIHwgT2xvbXBpYSB8IOGImOGIreGKqOGJpSDhjZXhiIvhi5sgfCDhiqbhiI7hiJ3hjZLhi6s!5e0!3m2!1sen!2set!4v1743275783641!5m2!1sen!2set"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <p className="text-gray-600 text-sm mt-2 text-center">
                        Use the interactive map to find our office location.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Contact