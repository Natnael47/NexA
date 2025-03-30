import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import ElevatorItems from '../context/ElevatorItems';

const Elevators = () => {
    const { fetchElevatorList, ElevatorList } = useContext(AppContext);

    useEffect(() => {
        fetchElevatorList();
    }, []);

    return (
        <div className='container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-start'>Projects <span className='font-light underline underline-offset-4 decoration-1'>Completed</span></h1>
            <p className='text-start text-gray-500 mb-8 max-w-120 mx-auto'>Crafting Spaces, Building Legacies - Explore our Portfolio</p>

            {/* rendering products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    ElevatorList.map((project, index) => (
                        <ElevatorItems key={index}
                            id={project._id}
                            image={project.images[0]}
                            name={project.title}
                            category={project.category}
                            description={project.description} />
                    ))
                }
            </div>
        </div>
    )
}

export default Elevators