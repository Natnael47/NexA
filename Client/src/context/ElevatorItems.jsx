import React from 'react';
import { Link } from 'react-router-dom';
import { backendUrl } from '../App';

const ElevatorItems = ({ id, image, name, category, description, currentPage }) => {
    return (
        <div className='relative w-full overflow-visible pb-10'>
            <Link to={`/product/${id}?page=${currentPage}`} className='block group'>
                <div className='w-full h-[400px] overflow-hidden rounded-sm shadow-md transition-transform duration-300 ease-in-out group-hover:scale-102'>
                    <img
                        src={`${backendUrl || ""}/images/${image || "default.jpg"}`}
                        alt={name}
                        className='w-full h-full object-cover'
                    />
                </div>

                {/* Bottom Info Box with Glow on Hover */}
                <div className='absolute left-0 right-0 bottom-[-5px] flex justify-center'>

                    <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md transition-all duration-300 ease-in-out
                        group-hover:shadow-[0_0_15px_rgba(0,0,0,0.7)]
                        border-2 border-gray-300 group-hover:border-gray-500'>
                        <h2 className='text-xl font-semibold text-gray-800'>{name}</h2>
                        <p>{category} <span className='px-1'>|</span> {name}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ElevatorItems;
