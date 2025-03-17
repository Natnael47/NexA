import React from 'react'
import { assets } from '../assets/assets'

const Add_Project = () => {
    return (
        <form className="flex flex-col w-full items-start m-5">
            <div>
                <p className='mb-2 font-semibold'>Upload Image</p>
                <div className='flex gap-2'>
                    <label htmlFor="image1">
                        <img className='w-40' src={assets.upload_area} alt="" />
                        <input type="file" id='image1' hidden />
                    </label>
                    <label htmlFor="image2">
                        <img className='w-40' src={assets.upload_area} alt="" />
                        <input type="file" id='image2' hidden />
                    </label>
                    <label htmlFor="image3">
                        <img className='w-40' src={assets.upload_area} alt="" />
                        <input type="file" id='image3' hidden />
                    </label>
                    <label htmlFor="image4">
                        <img className='w-40' src={assets.upload_area} alt="" />
                        <input type="file" id='image4' hidden />
                    </label>
                </div>
            </div>

            <div className="flex flex-wrap justify-between w-full gap-6 mb-6">

                <p className="mb-1 font-semibold text-gray-700">Project Name</p>
                <input type="text" placeholder='Type here' required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:border-0 focus:ring-yellow-300" />

                <p className="mb-2 font-semibold text-gray-700">Description</p>
                <textarea
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    name="description"
                    rows="3"
                    placeholder="Write Description Here"
                    required
                />

                <p className="mb-1 font-semibold text-gray-700">Address</p>
                <input type="text" placeholder='Type here' required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:border-0 focus:ring-yellow-300" />

                <p className="mb-1 font-semibold text-gray-700">location on map</p>
                <input type="text" placeholder='Type here' required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:border-0 focus:ring-yellow-300" />
            </div>
        </form>
    )
}

export default Add_Project