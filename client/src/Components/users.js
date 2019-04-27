import React from 'react';
import { Link } from 'react-router-dom';

const Users = (props) => {
    const { users } = props
    return (
        <div className="card-container">
        
            {
                users && users.length > 0 ?
                    <Link to="/addUser" className="card add-card">
                        <img src="https://img.icons8.com/nolan/64/000000/add-to-favorites.png" alt="add-user" />
                    </Link> : ''
            }

            {
                users && users.map(user => {
                    const userImg = user.gender === 'male' ? <img src="https://img.icons8.com/nolan/64/000000/businessman.png" alt="male-user" />
                        : <img src="https://img.icons8.com/nolan/64/000000/user-female.png" alt="female-user" />

                    return (
                        <div className="card" key={user._id}>
                            <section>
                                {userImg}
                                <Link to={'/edituser/' + user._id}>
                                    <img src="https://img.icons8.com/nolan/64/000000/edit.png" alt="edit-user" className="edit-user" />
                                </Link>
                                <img src="https://img.icons8.com/nolan/64/000000/delete.png" alt="delete-user" className="delete-user" onClick={props.onDelete} value={user._id} />
                                <h3 className="user-name">{user.name}</h3>
                                <div className="user-role">{user.email}</div>
                                <div className="user-balance">{'\u20B9'}{user.balance}</div>
                            </section>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;