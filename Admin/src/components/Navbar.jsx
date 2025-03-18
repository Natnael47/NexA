import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Navbar = () => {

    const { token, setToken, navigate } = useContext(AppContext);

    const logout = async () => {
        navigate('/');
        setToken('');
        localStorage.removeItem('token');
        localStorage.removeItem('currentView');
        toast.success('Logout successful');
    };

    return (
        <div className='flex items-center py-2  px-[4%] justify-between bg-white border-b-2'>
            <img src={assets.nexa_logo} alt="" className='w-[max(8%,50px)]' />
            <button onClick={logout} className='bg-[#FFD128] text-gray-800 px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer'>Logout</button>
        </div>
    )
}

export default Navbar