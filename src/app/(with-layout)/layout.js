import Navber from '@/components/Navber';
import React from 'react';

const WithLayout = ({ children }) => {
    return (
        <div>
           <Navber />
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default WithLayout;