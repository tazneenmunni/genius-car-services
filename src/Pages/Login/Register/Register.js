import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const navigateRegister = () => {
        navigate('/login');
    }
    if (user) {
        navigate("/home");
    }
    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target.email.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='register-form'>
            <h2 className='text-center text-primary'>Please Register</h2>
            <form onSubmit={handleRegister} action="">
                <input type="text" name="name" id='' placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <br />
                <input type="password" name="password" id="" required />
                <input type="submit" value="Register" />
                <p>Already have an acount? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Login</Link></p>
            </form>
        </div>
    );
};

export default Register;