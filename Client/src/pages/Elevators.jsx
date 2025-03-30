import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ElevatorItems from '../context/ElevatorItems';

const Elevators = () => {
    const { fetchElevatorList, ElevatorList } = useContext(AppContext);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetchElevatorList();
    }, []);

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
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 mt-2 text-center">
                Our Elevator <span className="font-light underline underline-offset-4 decoration-1">Products</span>
            </h1>
            <p className='text-center text-gray-500 mb-10 max-w-2xl mx-auto'>Explore our range of premium elevators designed for safety, efficiency, and elegance.</p>

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
                <div className='w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
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