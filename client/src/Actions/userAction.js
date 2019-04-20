import { GET_USERS, USER_NOT_FOUND, USER_LOADING } from './userType';
import axios from 'axios';

//get all users
export const getAllUsers = () => (dispatch) => {
    dispatch(setUserLoading());

    axios.get('/users')
        .then(res =>
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
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

