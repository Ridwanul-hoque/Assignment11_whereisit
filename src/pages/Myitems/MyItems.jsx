import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const MyItems = () => {
    const { user } = useAuth();
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            // navigate('/login');
            return;
        }

        console.log('Fetching items for:', user.email);

        // fetch(`http://localhost:5000/non-recovered/full?email=${user.email}`)
        //     .then((res) => {
        //         if (!res.ok) {
        //             throw new Error('Failed to fetch items');
        //         }
        //         return res.json();
        //     })
        //     .then((data) => setItems(data))
        //     .catch((err) => {
        //         console.error(err);
        //         setError('Failed to load items. Please try again later.');
        //     });
        fetch(`http://localhost:5000/non-recovered?email=${user.email}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch items');
                }
                return res.json();
            })
            .then((data) => setItems(data))
            .catch((err) => {
                console.error(err);
                setError('Failed to load items. Please try again later.');
            });
    }, [user, navigate]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>My Items</h1>
            {error && <p className="text-red-500">{error}</p>}
            <table className="table-auto border-collapse w-full">
                <thead>
                    <tr>
                        <th className="border p-2">Thumbnail</th>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Category</th>
                        <th className="border p-2">Location</th>
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item._id}>
                            <td className="border p-2">
                                <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover" />
                            </td>
                            <td className="border p-2">{item.title}</td>
                            <td className="border p-2">{item.category}</td>
                            <td className="border p-2">{item.location}</td>
                            <td className="border p-2">{item.date}</td>
                            <td className="border p-2">
                                <button className="bg-blue-500 text-white p-1 rounded">Update</button>
                                <button className="bg-red-500 text-white p-1 rounded ml-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyItems;
