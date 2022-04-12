import React from 'react';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            {/* <p>Copy right  © {new Date().getFullYear()} </p> */}
            <p className='text-center mt-5'>Copy right © {year}</p>

        </div>
    );
};

export default Footer;