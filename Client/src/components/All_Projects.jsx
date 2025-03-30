import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// Manually import images
import { assets } from '../assets/assets';
import constructionImg from '../assets/construction.jpg';
import elevatorImage from "../assets/elevtor.png";
import tunnelImage from '../assets/tunnel.png';

const All_Projects = () => {
    const { navigate } = useContext(AppContext);

    return (
        <div className="container mx-auto py-20 px-6 md:px-20 text-center" id='Services'>

            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Our <span className='font-light underline underline-offset-4 decoration-1'>Services</span></h1>
            <p className='text-center text-gray-500 mb-10 max-w-80 mx-auto'>Explore our diverse range of expertise.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Service Items */}
                {[
                    { name: "Construction", img: constructionImg, link: "/construction" },
                    { name: "Elevators", img: elevatorImage, link: "/elevators" },
                    { name: "Tunnels", img: tunnelImage, link: "/tunnels" },
                    { name: "HVAC", img: assets.hvacImage, link: "/hvac" },
                    { name: "Software", img: assets.computerImage, link: "/software" },
                    { name: "Tourism", img: assets.touristImage, link: "/tourism" },
                ].map((service, index) => (
                    <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => navigate(service.link)}
                    >
                        <img
                            src={service.img}
                            alt={service.name}
                            className="w-full h-64 object-cover transition-transform rounded-lg duration-300 hover:scale-105"
                        />
                        <h2 className="mt-2 text-xl font-semibold">{service.name}</h2>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default All_Projects;
