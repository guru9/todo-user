import { GET_USERS, USER_NOT_FOUND, USER_LOADING, EMPTY_USER } from './userType';
import axios from 'axios';

//get all users
export const getAllUsers = () => (dispatch) => {
    dispatch(setUserLoading());

    axios.get('/users')
        .then(res =>
            dispatch(totalUsers(res.data))
        )
        .catch(err =>
            dispatch({
                type: USER_NOT_FOUND,
                payload: err
            })
        )
}


//user loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    }
}

//check totalUser
export const totalUsers = (users) => {
    if (users.length === 0) {
        return {
            type: EMPTY_USER
        }
    }
    return {
        type: GET_USERS,
        payload: users
    }
}
