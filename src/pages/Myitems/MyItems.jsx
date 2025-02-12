import React, { useContext, useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Helmet } from 'react-helmet-async';
import DarkModeContext from '../../context/DarkModeContext/DarkModeContext';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';  // Added icons for actions

const MyItems = () => {
    const { user } = useAuth();
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [editingItem, setEditingItem] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            return;
        }

        console.log('Fetching items for:', user.email);

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
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/non-recovered/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error('Failed to delete item');
                        }
                        setItems(items.filter(item => item._id !== id));
                        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
                    })
                    .catch((err) => {
                        console.error(err);
                        Swal.fire('Error!', 'Failed to delete the item.', 'error');
                    });
            }
        });
    };

    const handleEdit = (item) => {
        setEditingItem(item);
        setSelectedDate(new Date(item.date));
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const updatedItem = {
            postType: formData.get('postType'),
            thumbnail: formData.get('thumbnail'),
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            location: formData.get('location'),
            date: selectedDate.toISOString().split('T')[0],
            name: user.displayName,
            email: user.email,
        };

        fetch(`http://localhost:5000/non-recovered/${editingItem._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to update item');
                }
                return res.json();
            })
            .then(() => {
                setItems(items.map(item => item._id === editingItem._id ? { ...item, ...updatedItem } : item));
                setEditingItem(null);
                Swal.fire('Updated!', 'Your item has been updated.', 'success');
            })
            .catch((err) => {
                console.error(err);
                Swal.fire('Error!', 'Failed to update the item.', 'error');
            });
    };

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-all`}>
            <Helmet>
                <title>Whereisit || My Items</title>
            </Helmet>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">My Items</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                    <table className="table-auto w-full">
                        <thead className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
                            <tr>
                                <th className="border-b px-4 py-2 text-left">Thumbnail</th>
                                <th className="border-b px-4 py-2 text-left">Title</th>
                                <th className="border-b px-4 py-2 text-left">Category</th>
                                <th className="border-b px-4 py-2 text-left">Location</th>
                                <th className="border-b px-4 py-2 text-left">Date</th>
                                <th className="border-b px-4 py-2 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item._id} className="hover:bg-gray-50">
                                    <td className={`border-b px-4 py-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
                                        <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                                    </td>
                                    <td className={`border-b px-4 py-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>{item.title}</td>
                                    <td className={`border-b px-4 py-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>{item.category}</td>
                                    <td className={`border-b px-4 py-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>{item.location}</td>
                                    <td className={`border-b px-4 py-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>{item.date}</td>
                                    <td className={`border-b px-4 py-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
                                        <button
                                            className="bg-blue-600 text-white px-3 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            onClick={() => handleEdit(item)}
                                        >
                                            <FaEdit className="inline mr-1" /> Update
                                        </button>
                                        <button
                                            className="bg-red-600 text-white px-3 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 ml-4"
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            <FaTrashAlt className="inline mr-1" /> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {editingItem && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className={`p-6 rounded-lg w-11/12 md:w-1/2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                            <h2 className="text-2xl font-bold mb-4">Edit Item</h2>
                            <form onSubmit={handleUpdate}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        defaultValue={editingItem.title}
                                        className={`input input-bordered w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-2 rounded-md`}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        defaultValue={editingItem.category}
                                        className={`input input-bordered w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-2 rounded-md`}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        defaultValue={editingItem.location}
                                        className={`input input-bordered w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-2 rounded-md`}
                                        required
                                    />
                                </div>
                                <div className="mb-4 flex gap-4">
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium">Date</label>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                            dateFormat="yyyy-MM-dd"
                                            className={`input input-bordered w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-2 rounded-md`}
                                            required
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium">User Email</label>
                                        <input
                                            type="email"
                                            value={user?.email} // User's email
                                            name="email"
                                            className={`input input-bordered w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-2 rounded-md`}
                                            readOnly
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium">User Name</label>
                                        <input
                                            type="text"
                                            value={user?.displayName} // User's display name
                                            name="name"
                                            className={`input input-bordered w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-2 rounded-md`}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Post Type</label>
                                    <select
                                        name="postType"
                                        defaultValue={editingItem.postType}
                                        className={`select select-bordered ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-2 rounded-md`}
                                        required
                                    >
                                        <option value="Lost">Lost</option>
                                        <option value="Found">Found</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        defaultValue={editingItem.description}
                                        className={`input input-bordered w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-2 rounded-md`}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Thumbnail</label>
                                    <input
                                        type="text"
                                        name="thumbnail"
                                        defaultValue={editingItem.thumbnail}
                                        className={`input input-bordered w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-2 rounded-md`}
                                        required
                                    />
                                </div>
                                <div className="flex justify-end gap-4">
                                    <button
                                        type="button"
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                        onClick={() => setEditingItem(null)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyItems;
