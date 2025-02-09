import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { updateProfile } from "firebase/auth";
// import registerLottieData from '../../assets/lottie/register.json'

import SocialLogin from '../Shared/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import register from '../../assets/lottiefiles/Register.json'

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/'
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const PhotoURL = form.PhotoURL.value;

        console.log(email, password)

        // password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error('Password must be at least 6 characters, include one uppercase letter and one number.');
            return;
        }
        // pass error
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: PhotoURL
                })
                    .then(() => {
                        toast.success('Registration successful!');
                        console.log('updated Profile', user);
                        form.reset();
                        navigate(from);
                    })
                    .catch((error) => {
                        toast.error('Error updating profile: ' + error.message);
                        console.log(error.message);
                    });
            })
            .catch(error => {
                toast.error(error.message);
                console.log(error.message);
            });

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={register}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className=" ml-8 mt-2 text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='PhotoURL' placeholder="Upload Your Picture" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#C57478] text-white">Register</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;