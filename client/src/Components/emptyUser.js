import React from 'react';

const EmptyUser = () => {
    return (
        <div className="container">
            <div className="card empty-card">
                <img src="https://img.icons8.com/nolan/64/000000/add-to-favorites.png" alt="add-user" />
            </div>
            <h6>YOU have no user.</h6>
            <h6>Please click on + to add more.</h6>
        </div>
    )
}

export default EmptyUser;