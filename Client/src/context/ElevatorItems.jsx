import React from 'react';
import { Link } from 'react-router-dom';
import { backendUrl } from '../App';

const ElevatorItems = ({ id, image, name, category, description }) => {
    return (
        <Link to={`/product/${id}`} className='block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'>
            <div className='w-full h-[250px] overflow-hidden flex justify-center items-center bg-gray-100'>
                <img
                    className='w-full h-full object-cover object-center'
                    src={`${backendUrl || ""}/images/${image || "default.jpg"}`}
                    alt={name}
                />
            </div>
            <div className='p-4'>
                <p className='text-xl font-bold text-gray-800 truncate'>{name}</p>
                <p className='text-sm font-medium text-blue-600 mb-1'>{category}</p>
                <p className='text-sm text-gray-600 line-clamp-2'>{description}</p>
            </div>
        </Link>
    );
};

export default ElevatorItems;