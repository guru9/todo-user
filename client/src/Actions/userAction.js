import { GET_USERS, USER_LOADING, EMPTY_USER, GET_SINGLE_USER, DELETE_USER } from './userType';
import axios from 'axios';

//get all users
export const getAllUsers = (history) => (dispatch) => {
    dispatch(setUserLoading());
    axios.get('/users')
        .then(res =>
            dispatch(totalUsers(res.data, history))
        )
        .catch(err =>
            dispatch({
                type: GET_USERS,
                payload: null
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
export const totalUsers = (users, history) => {
    if (users.length === 0) {
        history.push('emptyuser')
    }
    return {
        type: GET_USERS,
        payload: users
    }
}

//add new user
export const addNewUser = (userData, history) => dispatch => {
    axios.post('/users', userData)
        .then(res =>
            history.push('/')
        )
        .catch(err => {
            throw (err)
        })
}

//get single user
export const getSingleUser = (userId) => dispatch => {
    dispatch(setUserLoading());

    axios.get('/users/' + userId)
        .then(res =>
            dispatch({
                type: GET_SINGLE_USER,
                payload: res.data
            })
        )
        .catch(err => {
            throw (err)
        })
}


//delete user
export const deleteUser = (userId, history) => dispatch => {

    axios.delete('/users/' + userId)
        .then(res =>
            dispatch(getAllUsers(history))
        )
        .catch(err => {
            throw (err)
        })
}