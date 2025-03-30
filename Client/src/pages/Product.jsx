import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { backendUrl } from '../App';
import { AppContext } from '../context/AppContext';

const Product = () => {
    const { productId } = useParams();
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const { fetchElevatorList, ElevatorList } = useContext(AppContext);

    useEffect(() => {
        fetchElevatorList(); // Ensure list is fetched
    }, []);

    useEffect(() => {
        if (ElevatorList.length > 0) {
            const product = ElevatorList.find(item => item._id === productId);
            if (product) {
                setProductData(product);
                setImage(product.images?.[0] ? `${backendUrl}/images/${product.images[0]}` : '');
            }
        }
    }, [productId, ElevatorList]);

    return productData ? (
        <div className='container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'>
            {/* Product data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/* Product images */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.images?.map((item, index) => (
                                <img
                                    key={index}
                                    src={`${backendUrl}/images/${item}`}
                                    onClick={() => setImage(`${backendUrl}/images/${item}`)}
                                    className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                                    alt={`Elevator ${index}`}
                                />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        {image && <img src={image} className='w-full h-auto' alt='Selected Elevator' />}
                    </div>
                </div>
                {/* Product Info */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.title}</h1>
                    <p className='mt-2 text-gray-600'>{productData.description}</p>
                    <p className='mt-2 text-lg font-bold text-green-700'>${productData.price}</p>
                </div>
            </div>
        </div>
    ) : <div className='text-center text-gray-500 py-20'>Loading product details...</div>;
};

export default Product;
