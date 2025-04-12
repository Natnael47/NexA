import { ArrowLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Software = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
        checkMobileView();
        window.addEventListener('resize', checkMobileView);
        return () => window.removeEventListener('resize', checkMobileView);
    }, []);

    return (
        <div className="container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Software">
            {/* Breadcrumb Section */}
            <div className="relative w-full mb-4">
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                    {!isMobile ? (
                        <div className="flex items-center text-lg">
                            <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
                            <span className="mx-2"><ChevronRight /></span>
                            <span className="text-gray-600">Software</span>
                        </div>
                    ) : (
                        <ArrowLeft
                            size={24}
                            className="cursor-pointer text-blue-500"
                            onClick={() => navigate(-1)}
                        />
                    )}
                </div>

                {/* Title */}
                <h1 className="w-full text-2xl sm:text-4xl font-bold text-center whitespace-nowrap overflow-hidden text-ellipsis px-4">
                    Our <span className="font-light underline underline-offset-4 decoration-1">Software</span> Products
                </h1>
            </div>

            {/* Main Message */}
            <div className="flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">There are no local products yet.</h2>
                <p className="text-gray-600">
                    But don't worry! You can explore more on our{" "}
                    <a
                        href="https://yourwebsite.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        official website
                    </a>.
                </p>
                <p className="mt-4 text-gray-700 max-w-lg">
                    NexA is a company specializing in high-quality software and elevator solutions,
                    ensuring safety, efficiency, and modern design.
                    Our team is dedicated to innovation and customer satisfaction.
                    Stay tuned — new products will be available soon!
                </p>
            </div>
        </div>
    );
};

export default Software;
