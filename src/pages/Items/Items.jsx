import React, { useContext, useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';
import DarkModeContext from '../../context/DarkModeContext/DarkModeContext';

const Items = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // State for the search term
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        fetch('http://localhost:5000/non-recovered/allItems')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            });
    }, []);

    // Filter items based on the search term
    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>


            <div className="flex justify-center items-center my-8">
                <h1 className="text-4xl font-bold text-[#C57478] text-center uppercase tracking-wide fade-in">
                    Lost And Found Items
                </h1>
            </div>
            {/* Search bar */}
            <div className="mb-5">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
                />
            </div>


            {/* Items grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    filteredItems.length > 0 ? (
                        filteredItems.map(item => (
                            <ItemsCard key={item._id} item={item} />
                        ))
                    ) : (
                        <p className="text-gray-500 text-center col-span-full">
                            No items found.
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default Items;
