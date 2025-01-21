import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const RecoveredItems = () => {
    const { user } = useAuth();
    const [recoveredItems, setRecoveredItems] = useState([]);
    const [loading, setLoading] = useState(true);

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
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Recovered Items</h1>
            {recoveredItems.length === 0 ? (
                <p>No recovered items found for your account.</p>
            ) : (
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Recovered Location</th>
                            
                            <th className="border border-gray-300 px-4 py-2">Recovered Date</th>
                            <th className="border border-gray-300 px-4 py-2">Recovered By</th>
                            <th className="border border-gray-300 px-4 py-2">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recoveredItems.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{item.recoveredLocation}</td>
                                
                                <td className="border border-gray-300 px-4 py-2">
                                    {new Date(item.recoveredDate).toLocaleString()}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {item.recoveredBy?.name || 'N/A'}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
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
