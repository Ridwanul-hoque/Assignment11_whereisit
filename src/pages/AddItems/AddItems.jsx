import React, { useState } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

const AddItems = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleAddItems = e => {

        e.preventDefault();
        const formData = new FormData(e.target);

        const newItem = {
            postType: formData.get('postType'),
            thumbnail: formData.get('thumbnail'),
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            location: formData.get('location'),
            date: selectedDate ? selectedDate.toISOString().split('T')[0] : '',
            name: formData.get('name'),
            email: formData.get('email'),
        };



        fetch('http://localhost:5000/non-recovered/full', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Item added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }
            })


    }
    return (
        <div className='bg-[#C57478] p-4 rounded-lg mb-6'>
            <Zoom>
                <h2 className='text-2xl font-extrabold flex justify-center'>Add Items</h2>
            </Zoom>

            <form onSubmit={handleAddItems} className="card-body">

                {/* form first row */}
                <Fade cascade>
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Item Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="Item type eg.documents, device" className="input input-bordered" required />
                        </div>
                    </div>
                </Fade>
                {/* form second row */}
                <Fade cascade>
                    <div className='flex flex-col lg:flex-row gap-5'>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name='category' placeholder="Address" className="input input-bordered" required />
                        </div>


                    </div>
                </Fade>
                {/* form third row */}
                <Fade cascade>

                    <div className="form-control flex-1">
                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div>
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    dateFormat="yyyy-MM-dd"
                                    placeholderText="Select a date"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Post Type</span>
                                </label>
                                <select
                                    name="postType"
                                    className="select select-bordered"
                                    defaultValue="Lost"
                                    required
                                >
                                    <option value="Lost">Lost</option>
                                    <option value="Found">Found</option>
                                </select>
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="email" value={user?.email} name="email" className="input input-bordered" readOnly required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" value={user?.displayName} name="name" className="input input-bordered" readOnly required />
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-col lg:flex-row gap-5'>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='Description' placeholder="Description of the Item" className="input input-bordered" required />
                        </div>

                    </div>
                </Fade>


                <Fade cascade>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Thumbnail</span>
                        </label>
                        <input type="text" name='thumbnail' placeholder="Photo url" className="input input-bordered" required />

                    </div>

                    <div className="form-control mt-6">
                        <button type='submit' className=" bg-black text-white p-4 rounded-lg">Add Items</button>
                    </div>
                </Fade>
            </form>
        </div>
    );
};

export default AddItems;