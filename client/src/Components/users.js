import React from 'react';

const Users = (props) => {
    const { users } = props
    return (
        <div className="container">
            {users && users.map(user => {

                const userImg = user.gender === 'male' ? <img src="https://img.icons8.com/doodle/48/000000/user-male.png" alt="male-user"/>
                    : <img src="https://img.icons8.com/doodle/48/000000/user-female.png" alt="female-user"/>

                return (
                    <div className="card" key={user._id}>
                        <section>
                            {userImg}
                            <h3 className="user-name">{user.name}</h3>
                            <div className="user-role">{user.email}</div>
                        </section>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Users;