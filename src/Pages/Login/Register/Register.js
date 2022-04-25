import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate()
    const navigateRegister = () => {
        navigate('/login');
    }
    if (loading || updating) {
        return <Loading />
    }
    if (user) {
        // navigate("/home");
        console.log(user);
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name, });
        console.log('Updated profile');
        navigate("/home");




    }
    return (
        <div className='register-form'>
            <h2 className='text-center text-primary'>Please Register</h2>
            <form onSubmit={handleRegister} action="">
                <input type="text" name="name" id='' placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : ''}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='btn btn-primary d-block w-50 mx-auto mb-2 mt-2' type="submit"
                    value="Register" />

            </form>
            <p>Already have an acount? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Login</Link></p>
            <SocialLogin />

        </div>
    );
};

export default Register;