import React from 'react';

const User = ({user}) => {
    return(
        <div>
            <h2>
            {user.name}
            {user.username}
            {user.address.street}
            {user.phone}
            {user.website}
            </h2>
            <span>
                {user.email}
            </span>

            
        </div>
    )
}