import React, { useState, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AuthContext from '../context/AuthContext/AuthContext';

const ItemsDetail = () => {
    const items = useLoaderData();
    const { user } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [recoveredDate, setRecoveredDate] = useState(new Date());
    const [recoveredLocation, setRecoveredLocation] = useState('');

    const { _id, postType, thumbnail, title, description, category, location, date, name, email } = items;

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const data = {
            postId: _id,
            postType,
            recoveredDate: recoveredDate.toISOString(),
            recoveredLocation,
            recoveredBy: {
                name: user?.displayName || 'Anonymous',
                email: user?.email || 'N/A',
            },
        };

        try {
            const response = await fetch('http://localhost:5000/recovered', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Recovery data submitted successfully!');
                setIsModalOpen(false);
            } else {
                alert('Failed to submit recovery data.');
            }
        } catch (error) {
            console.error('Error submitting recovery data:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Details */}
            <figure className="rounded-xl overflow-hidden">
                <img
                    src={thumbnail}
                    className="h-[250px] w-full object-cover rounded-md"
                    alt="Thumbnail"
                />
            </figure>
            <div className="card-body mt-6">
                <h2 className="card-title text-2xl font-semibold text-gray-800 mb-4">
                    {title}
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                    Posted By: <span className="font-medium text-gray-700">{name}</span>
                </p>
                <div className="text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-500 mb-6 gap-4">
                    <p>Email: <span className="font-medium text-gray-700">{email}</span></p>
                    <p>Location: <span className="font-medium text-gray-700">{location}</span></p>
                </div>
                <div className="border-t-2 border-dashed mb-6"></div>
                <div className="card-actions flex flex-wrap items-center justify-between">
                    <div className="badge badge-outline px-4 py-1 text-sm font-medium capitalize bg-gray-100 text-gray-700">
                        {postType}
                    </div>
                    <div className="text-sm text-gray-700">Category: <span className="font-medium">{category}</span></div>
                    <div className="text-sm text-gray-700 font-bold">Date: {date}</div>
                    {postType === 'Lost' && (
                        <button
                            onClick={handleOpenModal}
                            className="px-6 py-2 mt-4 sm:mt-0 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                        >
                            Found This!
                        </button>
                    )}
                    {postType === 'Found' && (
                        <button
                            onClick={handleOpenModal}
                            className="px-6 py-2 mt-4 sm:mt-0 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                        >
                            This is Mine!
                        </button>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            {postType === 'Lost' ? 'Found This!' : 'This is Mine!'}
                        </h3>
                        <form onSubmit={handleFormSubmit}>
                            {/* Recovered Location */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Recovered Location
                                </label>
                                <input
                                    type="text"
                                    value={recoveredLocation}
                                    onChange={(e) => setRecoveredLocation(e.target.value)}
                                    placeholder="Enter location"
                                    className="w-full p-3 border rounded-lg"
                                    required
                                />
                            </div>

                            {/* Date */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Date of Recovery
                                </label>
                                <DatePicker
                                    selected={recoveredDate}
                                    onChange={(date) => setRecoveredDate(date)}
                                    className="w-full p-3 border rounded-lg"
                                    required
                                />
                            </div>

                            {/* Recovered Person Info */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Recovered Person Info
                                </label>
                                <div className="p-3 border rounded-lg bg-gray-100">
                                    <p>
                                        <strong>Name:</strong> {user?.displayName || 'Anonymous'}
                                    </p>
                                    <p>
                                        <strong>Email:</strong> {user?.email || 'N/A'}
                                    </p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemsDetail;
