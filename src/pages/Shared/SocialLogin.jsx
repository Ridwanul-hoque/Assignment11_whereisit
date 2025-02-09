import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/'
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from)

            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className='m-4'>
            <div className="divider">OR</div>
            <div className="form-control mt-6">
                <button onClick={handleGoogleSignIn} className="btn bg-[#C57478] text-white"><FaGoogle></FaGoogle>Sign In With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;