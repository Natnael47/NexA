import { ArrowLeft, ChevronRight } from 'lucide-react'; // Import the back arrow icon
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import the useNavigate hook for navigation
import { AppContext } from '../context/AppContext';
import ElevatorItems from '../context/ElevatorItems';

const Elevators = () => {
    const { fetchElevatorList, ElevatorList } = useContext(AppContext);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const navigate = useNavigate(); // Hook to navigate back
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        fetchElevatorList();
        // Detect if the user is on mobile for the back button
        const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
        checkMobileView();
        window.addEventListener('resize', checkMobileView);

        return () => {
            window.removeEventListener('resize', checkMobileView);
        };
    }, [fetchElevatorList]);

    // Extract unique categories from the ElevatorList
    const categories = ["All", ...new Set(ElevatorList.map(item => item.category))];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === selectedCategory ? "All" : category);
    };

    const filteredElevators = selectedCategory === "All"
        ? ElevatorList
        : ElevatorList.filter(item => item.category === selectedCategory);

    return (
        <div className='container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
            <div className="relative w-full mb-2">
                {/* Breadcrumb or Back Icon - Left Aligned */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                    {!isMobile ? (
                        <div className="flex items-center text-lg">
                            <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
                            <span className="mx-2"><ChevronRight /></span>
                            <span className="text-gray-600">Elevators</span>
                        </div>
                    ) : (
                        <ArrowLeft
                            size={24}
                            className="cursor-pointer text-blue-500"
                            onClick={() => navigate(-1)}
                        />
                    )}
                </div>

                {/* Title - full width, single line, centered visually */}
                <h1 className="w-full text-2xl sm:text-4xl font-bold text-center whitespace-nowrap overflow-hidden text-ellipsis px-4">
                    Our Elevator <span className="font-light underline underline-offset-4 decoration-1">Products</span>
                </h1>
            </div>

            {/* Description - full width, single line, touching both edges */}
            <p className="text-center mb-2">
                Explore our range of premium elevators designed for safety, efficiency, and elegance.
            </p>

            <div className='flex gap-6'>
                {/* Categories Sidebar */}
                <div className='hidden md:block w-1/5 p-4 bg-gray-100 rounded-lg shadow-md'>
                    <h2 className='text-lg font-semibold mb-4'>Categories</h2>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index} className='mb-2'>
                                <button
                                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Elevator Grid */}
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>
                    {filteredElevators.map((project, index) => (
                        <ElevatorItems
                            key={index}
                            id={project._id}
                            image={project.images[0]}
                            name={project.title}
                            category={project.category}
                            description={project.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Elevators;
