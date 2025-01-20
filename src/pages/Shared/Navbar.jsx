import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                console.log('User logged out successfully');
            })
            .catch((error) => {
                console.error('Logout failed:', error);
            });
    };

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Whereisit</a>
            </div>
            <div className="flex-none">
                {user ? (
                    <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName || 'User'} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <a>ADD Lost & Found Items</a>
                                </li>
                                <li>
                                    <a>Recovered Items</a>
                                </li>
                                <li>
                                    <a>My Items</a>
                                </li>
                            </ul>
                        </div>
                        <button onClick={handleLogout} className="btn btn-error ml-4">
                            Logout
                        </button>
                    </>
                ) : (
                    <div className="flex gap-4">
                        <><Link className='text-[#C57478]' to="/register"><u>Register</u></Link>
                        <Link to='/logIn'>
                            <button className="btn bg-[#C57478] ml-4">Sign In</button></Link></>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
