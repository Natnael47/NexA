import React from 'react';
import { Link } from 'react-router-dom';
import { backendUrl } from '../App';


const ElevatorItems = ({ id, image, name, price, description }) => {
    return (
        <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
            <div>
                <img
                    className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
                    src={`${backendUrl || ""}/images/${image || ""}`}
                    alt={name}
                />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{price}</p>
            <p className='text-sm font-medium'>{description}</p>
        </Link>
    )
}

export default ElevatorItems