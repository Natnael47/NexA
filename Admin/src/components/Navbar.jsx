import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const { token, setToken, navigate } = useContext(AppContext);
    const [profile, setProfile] = useState(null);

    const logout = async () => {
        navigate('/');
        setToken('');
        localStorage.removeItem('token');
        localStorage.removeItem('currentView');
        toast.success('Logout successful');
    };

    useEffect(() => {
        if (token) {
            getData();
        }
    }, [token]);

    const getData = async () => {
        try {
            const { data } = await axios.get(
                `${backendUrl}/api/admin/data`,
                { headers: { token } }
            );
            if (data.success) {
                setProfile(data.data); // Assuming the admin data is in data.data
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className='flex items-center py-2 px-[4%] justify-between bg-black border-b-2'>
            {/* Logo */}
            <img src={assets.nexa_logo} alt="Nexa Logo" className='w-[135px] h-[45px] hover:scale-1.5 cursor-pointer m-2' />

            {/* Greeting and Logout Button */}
            <div className='flex items-center space-x-4 mr-5'>
                {profile && (
                    <span className='text-lg font-medium'>
                        Hello, {profile.name || 'Admin'}
                    </span>
                )}
                <button
                    onClick={logout}
                    className='bg-[#FFD128] text-gray-800 px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer'>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;
