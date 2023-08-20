import React from 'react';

const SingleBlos = ({params}) => {
   const [year,id] = params.segments || [];
    return (
        <div>
            Single Bols
            {year || new Date().getFullYear()} for {id}
        </div>
    );
};

export default SingleBlos;