import React, { useContext, useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import DarkModeContext from '../../context/DarkModeContext/DarkModeContext';

const RecoveredItems = () => {
    const { user } = useAuth();
    const [recoveredItems, setRecoveredItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/recovered?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setRecoveredItems(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching recovered items:', error);
                    setLoading(false);
                });
        }
    }, [user?.email]);

    if (loading) {
        return <p className="text-xl text-center mt-8 text-gray-700 dark:text-gray-300">Loading...</p>;
    }

    return (
        <div className="container mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Helmet>
                <title>Whereisit || Recovered Items</title>
            </Helmet>
            <h1 className="text-4xl font-bold text-center text-gradient bg-clip-text  bg-gradient-to-r text-[#C57478] mb-10">
                Recovered Items
            </h1>
            {recoveredItems.length === 0 ? (
                <p className="text-center text-xl text-gray-600 dark:text-gray-300">No recovered items found for your account.</p>
            ) : (
                <table className="table-auto w-full border-separate border-spacing-3 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                    <thead>
                        <tr className="text-lg font-semibold text-black bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg">
                            <th className={`px-8 py-4 text-left ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>Recovered Location</th>
                            <th className={`px-8 py-4 text-left ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>Recovered Date</th>
                            <th className={`px-8 py-4 text-left ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>Recovered By</th>
                            <th className={`px-8 py-4 text-left ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recoveredItems.map((item) => (
                            <tr
                                key={item._id}
                                className="hover:bg-gradient-to-r from-gray-100 to-gray-200 dark:hover:bg-gradient-to-r dark:from-gray-700 dark:to-gray-800 transition-all duration-300"
                            >
                                <td className={`border border-gray-300 px-8 py-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                                    {item.recoveredLocation}
                                </td>
                                <td className={`border border-gray-300 px-8 py-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                                    {new Date(item.recoveredDate).toLocaleString()}
                                </td>
                                <td className={`border border-gray-300 px-8 py-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                                    {item.recoveredBy?.name || 'N/A'}
                                </td>
                                <td className={`border border-gray-300 px-8 py-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                                    {new Date(item.createdAt).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default RecoveredItems;
