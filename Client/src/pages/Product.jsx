import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { backendUrl } from '../App';
import { AppContext } from '../context/AppContext';

const Product = () => {
    const { productId } = useParams();
    const [productData, setProductData] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const { fetchElevatorList, ElevatorList } = useContext(AppContext);

    useEffect(() => {
        fetchElevatorList(); // Ensure list is fetched
    }, []);

    useEffect(() => {
        if (ElevatorList.length > 0) {
            const product = ElevatorList.find(item => item._id === productId);
            if (product) {
                setProductData(product);
                setMainImage(product.images?.[0] ? `${backendUrl}/images/${product.images[0]}` : '');
            }
        }
    }, [productId, ElevatorList]);

    // Function to get thumbnails excluding the main image
    const getThumbnails = () => {
        return productData?.images?.filter(img => `${backendUrl}/images/${img}` !== mainImage) || [];
    };

    return productData ? (
        <div className='container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'>
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
                    <h1 className='font-medium text-2xl mt-2'>{productData.title}</h1>
                    <p className='mt-2 text-gray-600'>{productData.description}</p>
                </div>
            </div>
        </div>
    ) : <div className='text-center text-gray-500 py-20'>Loading product details...</div>;
};

export default Product;