import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const MyItems = () => {
    const { user } = useAuth();
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [editingItem, setEditingItem] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());

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
                                <button
                                    className="bg-blue-500 text-white p-1 rounded"
                                    onClick={() => handleEdit(item)}
                                >
                                    Update
                                </button>
                                <button
                                    className="bg-red-500 text-white p-1 rounded ml-2"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editingItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Edit Item</h2>
                        <form onSubmit={handleUpdate}>
                            <div className="mb-4">
                                <label className="block mb-1">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={editingItem.title}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    defaultValue={editingItem.category}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    defaultValue={editingItem.location}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <div className='flex gap-12'>
                                    <div>
                                        <label className="block mb-1">Date</label>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                            dateFormat="yyyy-MM-dd"
                                            className="input input-bordered w-full"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-1">User Email</label>
                                        <input
                                            type="email"
                                            value={user?.email} // User's email
                                            name="email"
                                            className="input input-bordered w-full"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-1">User Name</label>
                                        <input
                                            type="text"
                                            value={user?.displayName} // User's display name
                                            name="name"
                                            className="input input-bordered w-full"
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Post Type</label>
                                <select
                                    name="postType"
                                    defaultValue={editingItem.postType}
                                    className="select select-bordered w-full"
                                    required
                                >
                                    <option value="Lost">Lost</option>
                                    <option value="Found">Found</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    defaultValue={editingItem.description}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Thumbnail</label>
                                <input
                                    type="text"
                                    name="thumbnail"
                                    defaultValue={editingItem.thumbnail}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                    onClick={() => setEditingItem(null)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div >
            )}

        </div >
    );
};

export default MyItems;
