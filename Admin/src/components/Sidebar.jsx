import { Building, House, SquarePlus, WashingMachine } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="min-h-screen bg-white border-r w-64 flex-shrink-0 overflow-hidden">
            <div className="text-gray-800 mt-5">
                <NavLink
                    className={({ isActive }) =>
                        `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer w-full ${isActive ? 'bg-blue-100 border-r-4 border-blue-800' : 'hover:bg-[#f4f4f4]'} transition-all duration-200`
                    }
                    to={'/'}
                >
                    <House size={28} />
                    <p className="hidden md:block whitespace-nowrap">Dashboard</p>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer w-full ${isActive ? 'bg-blue-100 border-r-4 border-blue-800' : 'hover:bg-[#f4f4f4]'} transition-all duration-200`
                    }
                    to={'/new-project'}
                >
                    <SquarePlus size={28} />
                    <p className="hidden md:block whitespace-nowrap">New Construction</p>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer w-full ${isActive ? 'bg-blue-100 border-r-4 border-blue-800' : 'hover:bg-[#f4f4f4]'} transition-all duration-200`
                    }
                    to={'/projects'}
                >
                    <Building size={28} />
                    <p className="hidden md:block whitespace-nowrap">My Projects</p>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer w-full ${isActive ? 'bg-blue-100 border-r-4 border-blue-800' : 'hover:bg-[#f4f4f4]'} transition-all duration-200`
                    }
                    to={'/new-elevators'}
                >
                    <SquarePlus size={28} />
                    <p className="hidden md:block whitespace-nowrap">New Elevators</p>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer w-full ${isActive ? 'bg-blue-100 border-r-4 border-blue-800' : 'hover:bg-[#f4f4f4]'} transition-all duration-200`
                    }
                    to={'/elevator-list'}
                >
                    <WashingMachine size={28} />
                    <p className="hidden md:block whitespace-nowrap">Elevators</p>
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
