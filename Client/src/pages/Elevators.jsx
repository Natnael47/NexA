import React from 'react';
import { projectsData } from '../assets/assets';
import ElevatorItems from '../context/ElevatorItems';

const Elevators = () => {
    return (
        <div className='container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-start'>Projects <span className='font-light underline underline-offset-4 decoration-1'>Completed</span></h1>
            <p className='text-start text-gray-500 mb-8 max-w-120 mx-auto'>Crafting Spaces, Building Legacies - Explore our Portfolio</p>

            <div className="grid gap-4 gap-y-6 md:grid-cols-3 grid-cols-2 lg:grid-cols-4">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
                    >
                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />

                        {/* Project Details */}
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">
                                {project.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-2">
                                <strong>Price:</strong> {project.price}
                            </p>
                            <p className="text-gray-600 text-sm mb-2">
                                <strong>Location:</strong> {project.location}
                            </p>
                            <p className="text-gray-600 text-sm mb-4">
                                {project.description}
                            </p>

                            {/* Learn More Button */}
                            <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* rendering products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    projectsData.map((project, index) => (
                        <ElevatorItems key={index} id={project._id} image={project.image} name={project.title} price={project.price} description={project.description} />
                    ))
                }
            </div>
        </div>
    )
}

export default Elevators