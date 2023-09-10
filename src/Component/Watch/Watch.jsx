import React from 'react';

const Watch = ({watch}) => {

    const {id,name,price} = watch;
    return (
        <div>
            <h3>Id: {id}</h3>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            
        </div>
    );
};

export default Watch;