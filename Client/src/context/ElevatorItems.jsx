import React from 'react'
import { Link } from 'react-router-dom'


const ElevatorItems = ({ id, image, name, price, description }) => {
    return (
        <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
            <div>
                <img src={image} className='ease-in-out hover:scale-110 transition' alt="" />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{price}</p>
            <p className='text-sm font-medium'>{description}</p>
        </Link>
    )
}

export default ElevatorItems