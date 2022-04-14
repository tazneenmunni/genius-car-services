import React from 'react';
import sleeping from '../../../Images/sleepy.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img className='img-fluid' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;