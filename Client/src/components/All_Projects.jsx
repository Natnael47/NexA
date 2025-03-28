import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// Manually import images
import { assets } from '../assets/assets';
import constructionImg from '../assets/construction.jpg';
import projectImg1 from '../assets/project_img_1.jpg';
import projectImg2 from '../assets/project_img_2.jpg';
import projectImg3 from '../assets/project_img_3.jpg';
import projectImg4 from '../assets/project_img_4.jpg';

const All_Projects = () => {
    const { navigate } = useContext(AppContext);

    return (
        <div className="container mx-auto py-20 px-6 md:px-20 text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-gray-600 mb-10">Explore our diverse range of expertise.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Construction Card */}
                <div
                    className="relative h-64 rounded-lg cursor-pointer overflow-hidden group"
                    onClick={() => navigate("/construction")}
                >
                    <img
                        src={constructionImg}
                        alt="Construction"
                        className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-300"
                        style={{ objectFit: "cover", display: "block" }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-2xl font-semibold">Construction</h2>
                    </div>
                </div>

                {/* Elevators Card */}
                <div
                    className="relative h-64 rounded-lg cursor-pointer overflow-hidden group"
                    onClick={() => navigate("/elevators")}
                >
                    <img
                        src={projectImg1}
                        alt="Elevators"
                        className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-300"
                        style={{ objectFit: "cover", display: "block" }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-2xl font-semibold">Elevators</h2>
                    </div>
                </div>

                {/* Tunnels Card */}
                <div
                    className="relative h-64 rounded-lg cursor-pointer overflow-hidden group"
                    onClick={() => navigate("/tunnels")}
                >
                    <img
                        src={projectImg2}
                        alt="Tunnels"
                        className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-300"
                        style={{ objectFit: "cover", display: "block" }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-2xl font-semibold">Tunnels</h2>
                    </div>
                </div>

                {/* HVAC Card */}
                <div
                    className="relative h-64 rounded-lg cursor-pointer overflow-hidden group"
                    onClick={() => navigate("/hvac")}
                >
                    <img
                        src={projectImg3}
                        alt="HVAC"
                        className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-300"
                        style={{ objectFit: "cover", display: "block" }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-2xl font-semibold">HVAC</h2>
                    </div>
                </div>

                {/* Software Card */}
                <div
                    className="relative h-64 rounded-lg cursor-pointer overflow-hidden group"
                    onClick={() => navigate("/software")}
                >
                    <img
                        src={projectImg4}
                        alt="Software"
                        className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-300"
                        style={{ objectFit: "cover", display: "block" }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-2xl font-semibold">Software</h2>
                    </div>
                </div>

                {/* Tourism Card */}
                <div
                    className="relative h-64 rounded-lg cursor-pointer overflow-hidden group"
                    onClick={() => navigate("/tourism")}
                >
                    <img
                        src={assets.constructionImg}
                        alt="Tourism"
                        className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-300"
                        style={{ objectFit: "cover", display: "block" }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-2xl font-semibold">Tourism</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default All_Projects;
