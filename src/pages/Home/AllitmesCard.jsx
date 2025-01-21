import React from 'react';
import { Link } from 'react-router-dom';

const AllitmesCard = ({ allitem }) => {
    const { _id, postType, thumbnail, title, description, category, location, date,
        name, email } = allitem;
    

    return (
        <div className="card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <figure className="rounded-xl overflow-hidden">
                <img
                    src={thumbnail}
                    className="h-[166px] w-full object-cover"
                    alt="Thumbnail"
                />
            </figure>
            <div className="card-body mt-4">
                <h2 className="card-title text-xl font-semibold text-gray-800 mb-2">
                    {title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">Posted By: <span className="font-medium">{name}</span></p>
                <div className="text-xs flex items-center text-gray-500 mb-4">
                    <p>Email: <span className="font-medium">{email}</span></p>
                    <div className="border-l border-gray-300 mx-2 h-4"></div>
                    <p>Location: <span className="font-medium">{location}</span></p>
                </div>
                <div className="border-t-2 border-dashed mb-4"></div>
                <div className="card-actions flex items-center justify-between">
                    <div className="badge badge-outline px-3 py-1 text-sm font-medium capitalize">
                        {postType}
                    </div>
                    <div className="text-sm text-gray-700">
                        Category: <span className="font-medium">{category}</span>
                    </div>
                    <div className="text-sm text-gray-700 font-bold">
                        Date: {date}
                    </div>
                    <div className="flex justify-end">
                        <Link to={`/non-recovered/${_id}`}><button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                            Details
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllitmesCard;