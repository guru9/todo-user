import React from 'react';
import { Link } from 'react-router-dom';

const EmptyUser = () => {
    return (
        <div className="container">

            <Link to="/adduser" className="card empty-card">
                <img src="https://img.icons8.com/nolan/64/000000/add-to-favorites.png" alt="add-user" />
            </Link>
            <h6>YOU have no user.</h6>
            <h6>Please click on + to add more.</h6>
        </div>
    )
}

export default EmptyUser;