import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../assets/assets';

const Product = () => {
    const { productId } = useParams();
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');

    const fetchProductData = async () => {
        projectsData.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.image[0]);
                console.log(item);
                return null;
            }
        })
    }

    useEffect(() => {
        fetchProductData();
    }, [productId])
    return productData ? (
        <div className='container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'>
            {/* product data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/* product images */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full' >
                        {
                            productData.image.map((item, index) => (
                                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img src={image} className='w-full h-auto' alt="" />
                    </div>
                </div>
                {/* ----- product info */}
                <div className='flex-1 '>
                    <h1 className='font-medium text-2xl mt-2'>{productData.title}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    ) : <div className='opacity-0'></div>
}

export default Product