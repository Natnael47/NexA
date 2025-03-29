import { Lightbulb, ShieldCheck, Users } from 'lucide-react'
import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='w-4/5 mx-auto mt-28'>
            <div className='text-center text-2xl pt-2 text-black'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>About <span className='font-light underline underline-offset-4 decoration-1'>NexA</span></h1>
            </div>
            <div className='my-10 flex  flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[360px]' src={assets.brand_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-lg text-gray-800'>
                    <p>At NexA, we take pride in combining cutting-edge technology with creative engineering to enhance both functionality and aesthetics. Our commitment to precision, efficiency, and compliance with international standards makes us a trusted partner for businesses and individuals seeking reliable, high-quality engineering solutions.</p>
                    <p>At Nexa, we believe in combining cutting-edge technology with creative engineering to enhance functionality and aesthetics. Whether it’s installing state-of-the-art elevators, refining interior spaces, or providing specialized engineering solutions, we are dedicated to excellence in every project.</p>
                    <b className='text-gray-900'>Our Expertise</b>
                    <p>Elevators & Vertical Transportation Systems
                        We provide advanced elevator solutions, from design and installation to maintenance and modernization, ensuring safety, efficiency, and seamless vertical mobility.</p>
                </div>
            </div>

            <div>
                <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-start'>Why <span className='font-light underline underline-offset-4 decoration-1'>Choose Us</span></h1>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-20">
                {/* Innovation & Technology */}
                <div className="group border rounded-lg px-10 md:px-16 py-10 sm:py-16 flex flex-col gap-5 text-gray-700 bg-gray-100 shadow-md hover:bg-gradient-to-r hover:from-[#101828] hover:to-blue-900 hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <Lightbulb className="w-6 h-6 text-black transition-all group-hover:text-white" />
                        <b className="text-lg">Innovation & Technology</b>
                    </div>
                    <p className="text-[15px] leading-relaxed">
                        We stay ahead of industry trends, using the latest technologies to provide
                        efficient and cutting-edge solutions that drive progress.
                    </p>
                </div>

                {/* Skilled Professionals */}
                <div className="group border rounded-lg px-10 md:px-16 py-10 sm:py-16 flex flex-col gap-5 text-gray-700 bg-gray-100 shadow-md hover:bg-gradient-to-r hover:from-[#101828] hover:to-blue-900 hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-black transition-all group-hover:text-white" />
                        <b className="text-lg">Skilled Professionals</b>
                    </div>
                    <p className="text-[15px] leading-relaxed">
                        Our team of engineers, designers, and consultants ensures precision, compliance,
                        and superior execution in every project, delivering excellence at every stage.
                    </p>
                </div>

                {/* Quality & Compliance */}
                <div className="group border rounded-lg px-10 md:px-16 py-10 sm:py-16 flex flex-col gap-5 text-gray-700 bg-gray-100 shadow-md hover:bg-gradient-to-r hover:from-[#101828] hover:to-blue-900 hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="w-6 h-6 text-black transition-all group-hover:text-white" />
                        <b className="text-lg">Quality & Compliance</b>
                    </div>
                    <p className="text-[15px] leading-relaxed">
                        We adhere to international standards and best practices, ensuring safety, durability,
                        and high performance in all our construction and engineering services.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About