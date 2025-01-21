import React, { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';

const Items = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // State for the search term

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
            {/* Search bar */}
            <div className="mb-5">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
