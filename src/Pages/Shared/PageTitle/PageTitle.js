import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
    return (
        <div>
            <Helmet> {title} - Genius Car Service</Helmet>
        </div>
    );
};

export default PageTitle;