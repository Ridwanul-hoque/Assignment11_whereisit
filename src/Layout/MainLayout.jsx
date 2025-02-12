import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import DarkModeContext from '../context/DarkModeContext/DarkModeContext';


const MainLayout = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-[#E5E7EB] text-black min-h-screen'}>
            <div className={darkMode ? "bg-[#C57478] text-white" : "bg-[#cea8aa] text-black"}>
                <div className='max-w-7xl mx-auto'>
                    <Navbar />
                </div>
            </div>
            <div className='max-w-7xl mx-auto'>
                <Outlet />
            </div>
            <div className='max-w-7xl mx-auto'>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
