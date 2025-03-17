import { BriefcaseBusiness, House, SquarePlus } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='min-h-screen bg-white border-r'>
            <div className='text-gray-800 mt-5'>
                <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-62 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-blue-600' : ''}`} to={'/'}>
                    <House size={28} />
                    <p className='hidden md:block'>Dashboard</p>
                </NavLink>
                <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-62 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-blue-600' : ''}`} to={'/new-project'}>
                    <SquarePlus size={28} />
                    <p className='hidden md:block'>New Project</p>
                </NavLink>
                <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-62 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-blue-600' : ''}`} to={'/projects'}>
                    <BriefcaseBusiness size={28} />
                    <p className='hidden md:block'>My Projects</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar