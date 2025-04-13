import { ArrowLeft, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { backendUrl } from '../App';
import { AppContext } from '../context/AppContext';

const Product = () => {
    const { productId } = useParams();
    const [productData, setProductData] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const { fetchElevatorList, ElevatorList } = useContext(AppContext);
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    const [searchParams] = useSearchParams();
    const page = searchParams.get("page") || 1;

    useEffect(() => {
        fetchElevatorList(); // Ensure list is fetched
        // Detect if the user is on mobile for the back button
        const checkMobileView = () => setIsMobile(window.innerWidth <= 768);
        checkMobileView();
        window.addEventListener('resize', checkMobileView);

        return () => {
            window.removeEventListener('resize', checkMobileView);
        };
    }, [fetchElevatorList]);

    useEffect(() => {
        if (ElevatorList.length > 0) {
            const product = ElevatorList.find(item => item._id === productId);
            if (product) {
                setProductData(product);
                // Only set the main image if not already manually set
                if (!mainImage) {
                    setMainImage(product.images?.[0] ? `${backendUrl}/images/${product.images[0]}` : '');
                }
            }
        }
    }, [productId, ElevatorList]);


    // Function to get thumbnails excluding the main image
    const getThumbnails = () => {
        return productData?.images?.filter(img => `${backendUrl}/images/${img}` !== mainImage) || [];
    };

    return productData ? (
        <div className='container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'>
            {/* Breadcrumb for desktop */}
            {!isMobile && (
                <div className="flex items-center text-lg mb-4">
                    <Link to={`/elevators?page=${page}`} className="text-blue-500 hover:text-blue-700">Elevators</Link>
                    <span className="mx-2"><ChevronRight /></span>
                    <span className="text-gray-600">{productData.title}</span>
                </div>
            )}

            {/* Mobile Back Arrow Icon */}
            {isMobile && (
                <div className="flex items-center mb-4">
                    <ArrowLeft
                        size={24}
                        className="cursor-pointer text-blue-500"
                        onClick={() => navigate(`/elevators?page=${page}`)}
                    />
                </div>
            )}

            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/* Product images */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    {/* Thumbnails */}
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-start sm:justify-normal h-auto sm:h-[600px] sm:w-[18.7%] w-full'>
                        {getThumbnails().map((item, index) => (
                            <img
                                key={index}
                                src={`${backendUrl}/images/${item}`}
                                onClick={() => setMainImage(`${backendUrl}/images/${item}`)}
                                className='w-[80px] sm:w-[100px] h-[100px] sm:h-[150px] object-cover sm:object-contain sm:mb-3 flex-shrink-0 cursor-pointer rounded-lg shadow-lg transition-transform duration-200 hover:scale-105'
                                alt={`Thumbnail ${index}`}
                            />
                        ))}
                    </div>
                    {/* Main image */}
                    <div className='w-full sm:w-[80%]'>
                        {mainImage && <img src={mainImage} className='w-full h-[600px] object-cover rounded-lg shadow-md' alt='Selected Elevator' />}
                    </div>
                </div>
                {/* Product Info */}
                <div className='flex-1'>
                    <h1 className='font-bold text-3xl text-gray-900 mt-2'>{productData.title}</h1>
                    <p className='mt-2 text-lg text-gray-700 leading-relaxed'>{productData.description}</p>

                    {/* Contact Details and Map Section */}
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 mt-6">
                        {/* Left Side - Contact Info */}
                        <div className="space-y-6 text-gray-800 w-full md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900">Our Office Location</h2>
                            <p className="text-gray-600 text-lg">
                                We welcome you to visit our office for any inquiries, consultations, or business discussions. Feel free to reach out using the contact details below.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-blue-600 w-7 h-7" />
                                    <div>
                                        <p className="text-lg font-semibold">Office Address</p>
                                        <p className="text-gray-600 text-sm">
                                            Merkeb Plaza, Olompia - Conveniently located in the heart of the city.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="text-blue-600 w-7 h-7" />
                                    <div>
                                        <p className="text-lg font-semibold">Contact Number</p>
                                        <p className="text-gray-600 text-sm">
                                            0216 331 11 80 - Available during business hours for any inquiries.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="text-blue-600 w-7 h-7" />
                                    <div>
                                        <p className="text-lg font-semibold">Email Address</p>
                                        <p className="text-gray-600 text-sm">
                                            info@NexaEngsolutions.com.et - We respond promptly to all inquiries.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Google Map */}
                        <div className="w-full md:w-1/2 h-[380px] rounded-xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.3400603197986!2d38.76682540993323!3d9.001552685988335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85bf78ae5f39%3A0x5876d9eab73e5228!2zTWVya2ViIFBsYXphIHwgT2xvbXBpYSB8IOGImOGIreGKqOGJpSDhjZXhiIvhi5sgfCDhiqbhiI7hiJ3hjZLhi6s!5e0!3m2!1sen!2set!4v1743275783641!5m2!1sen!2set"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    ) : <div className='text-center text-gray-500 py-20'>Loading product details...</div>;
};

export default Product;