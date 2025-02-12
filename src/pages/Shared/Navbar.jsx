// Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import logo from '../../assets/l&f-small.png';
import DarkModeContext from '../../context/DarkModeContext/DarkModeContext';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    const handleLogout = () => {
        signOutUser()
            .then(() => console.log('User logged out successfully'))
            .catch(error => console.error('Logout failed:', error));
    };

    return (
        <div className={`navbar w-full px-4 py-2 ${darkMode ? 'text-white' : ' text-white'}`}>
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
                <img src={logo} alt="Logo" className="h-12" />
                <div className="flex-1 text-center">
                    <a className={`text-6xl font-bold font-cursive ${darkMode ? 'text-white' :'text-black' } `}>Whereisit</a>
                </div>
                <div className="flex-none flex gap-4 items-center">
                    <button 
                        onClick={toggleDarkMode} 
                        className="btn btn-sm transition-all duration-300 ease-in-out transform hover:scale-110 bg-gray-700 text-white rounded-full px-4 py-2 shadow-lg"
                    >
                        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </button>
                    {user ? (
                        <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt={user?.displayName || 'User'} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#C57478] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/addItems'>ADD Lost & Found Items</Link></li>
                                    <li><Link to='/recoverItems'>Recovered Items</Link></li>
                                    <li><Link to='/myItems'>My Items</Link></li>
                                </ul>
                            </div>
                            <button onClick={handleLogout} className="btn bg-[#C57478] ml-4">Logout</button>
                        </>
                    ) : (
                        <div className="flex gap-4">
                            <Link className='text-white' to="/register"><u>Register</u></Link>
                            <Link to='/logIn'><button className="btn bg-[#C57478] ml-4">Sign In</button></Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
