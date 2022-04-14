import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate()
    const navigateRegister = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target.email.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

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