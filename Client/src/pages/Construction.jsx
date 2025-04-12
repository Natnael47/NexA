import { ArrowLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets, projectsData } from '../assets/assets';

const Construction = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
    const sliderRef = useRef(null);
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(3);
            } else {
                setCardsToShow(1);
            }
        };
        const checkMobileView = () => setIsMobile(window.innerWidth <= 768);

        updateCardsToShow();
        checkMobileView();

        window.addEventListener('resize', updateCardsToShow);
        window.addEventListener('resize', checkMobileView);
        return () => {
            window.removeEventListener('resize', updateCardsToShow);
            window.removeEventListener('resize', checkMobileView);
        };
    }, []);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
            sliderRef.current.style.transform = `translateX(-${currentIndex * (100 / cardsToShow)}%)`;
        }
    }, [currentIndex, cardsToShow]);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
    };

    return (
        <div className='container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>

            {/* Breadcrumb */}
            <div className="relative w-full mb-6">
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                    {!isMobile ? (
                        <div className="flex items-center text-lg">
                            <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
                            <span className="mx-2"><ChevronRight /></span>
                            <span className="text-gray-600">Construction</span>
                        </div>
                    ) : (
                        <ArrowLeft
                            size={24}
                            className="cursor-pointer text-blue-500"
                            onClick={() => navigate(-1)}
                        />
                    )}
                </div>

                {/* Title Centered */}
                <h1 className='w-full text-2xl sm:text-4xl font-bold text-center whitespace-nowrap overflow-hidden text-ellipsis px-4'>
                    Projects <span className='font-light underline underline-offset-4 decoration-1'>Completed</span>
                </h1>
                <p className='text-center text-gray-500 mt-2 max-w-80 mx-auto'>
                    Crafting Spaces, Building Legacies - Explore our Portfolio
                </p>
            </div>

            {/* Project Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
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
                            <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slider */}
            <div className='mt-5'>
                <div className='flex items-center justify-end mb-8'>
                    <button className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Previous Project' onClick={prevProject}>
                        <img src={assets.left_arrow} alt='Previous' />
                    </button>
                    <button className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Next Project' onClick={nextProject}>
                        <img src={assets.right_arrow} alt='Next' />
                    </button>
                </div>

                <div className='overflow-hidden'>
                    <div ref={sliderRef} className='flex gap-8 transition-transform duration-500 ease-in-out'>
                        {[...projectsData, ...projectsData].map((project, index) => (
                            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                                <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                    <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                        <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                        <p>{project.price} <span className='px-1'>|</span> {project.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Construction;
