import { ArrowLeft, ChevronRight } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import ElevatorItems from '../context/ElevatorItems';

const ITEMS_PER_PAGE = 6;

const Elevators = () => {
    const { fetchElevatorList, ElevatorList } = useContext(AppContext);
    const [selectedCategory, setSelectedCategory] = useState("All");
    //const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page")) || 1;
    const [currentPage, setCurrentPage] = useState(page);

    useEffect(() => {
        fetchElevatorList();
        const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
        checkMobileView();
        window.addEventListener('resize', checkMobileView);
        return () => window.removeEventListener('resize', checkMobileView);
    }, [fetchElevatorList]);

    const categories = ["All", ...new Set(ElevatorList.map(item => item.category))];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === selectedCategory ? "All" : category);
        setCurrentPage(1); // reset to page 1 when changing category
    };

    const filteredElevators = selectedCategory === "All"
        ? ElevatorList
        : ElevatorList.filter(item => item.category === selectedCategory);

    const totalPages = Math.ceil(filteredElevators.length / ITEMS_PER_PAGE);
    const paginatedElevators = filteredElevators.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            setSearchParams({ page: page.toString() }); // <-- this updates the URL!
        }
    };

    useEffect(() => {
        setCurrentPage(page);
    }, [page]);


    return (
        <div className='container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
            <div className="relative w-full mb-2">
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                    {!isMobile ? (
                        <div className="flex items-center text-lg">
                            <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
                            <span className="mx-2"><ChevronRight /></span>
                            <span className="text-gray-600">Elevators</span>
                        </div>
                    ) : (
                        <ArrowLeft size={24} className="cursor-pointer text-blue-500" onClick={() => navigate(-1)} />
                    )}
                </div>

                <h1 className="w-full text-2xl sm:text-4xl font-bold text-center whitespace-nowrap overflow-hidden text-ellipsis px-4">
                    Our Elevator <span className="font-light underline underline-offset-4 decoration-1">Products</span>
                </h1>
            </div>

            <p className="text-center mb-2">
                Explore our range of premium elevators designed for safety, efficiency, and elegance.
            </p>

            <div className='flex gap-6'>
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

                <div className='w-full'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                        {paginatedElevators.map((project, index) => (
                            <ElevatorItems
                                key={index}
                                id={project._id}
                                image={project.images[0]}
                                name={project.title}
                                category={project.category}
                                description={project.description}
                                currentPage={currentPage}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-10 space-x-2 text-gray-800 font-medium">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-3 py-1 hover:underline disabled:opacity-40"
                            >
                                &lt; Previous
                            </button>

                            {[...Array(totalPages)].map((_, idx) => {
                                const page = idx + 1;
                                const isActive = currentPage === page;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`px-3 py-1 rounded ${isActive ? 'border border-gray-300' : 'hover:underline'}`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1 hover:underline disabled:opacity-40"
                            >
                                Next &gt;
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Elevators;
