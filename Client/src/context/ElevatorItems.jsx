import React from 'react';
import { Link } from 'react-router-dom';
import { backendUrl } from '../App';

const ElevatorItems = ({ id, image, name, category, description }) => {
    return (
        <div className='relative w-full overflow-visible pb-10'>
            <Link to={`/product/${id}`} className='block group'>
                <div className='w-full h-[400px] overflow-hidden rounded-sm shadow-md transition-transform duration-300 ease-in-out group-hover:scale-102'>
                    <img
                        src={`${backendUrl || ""}/images/${image || "default.jpg"}`}
                        alt={name}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='absolute left-0 right-0 bottom-[-5px] flex justify-center'>
                    <div className='inline-block bg-white w-3/4 px-4 py-3 shadow-lg rounded-md text-center transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:translate-y-1'>
                        <h2 className='text-xl font-semibold text-gray-800'>{name}</h2>
                        <p>{category} <span className='px-1'>|</span> {name}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ElevatorItems;