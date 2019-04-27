import { USER_LOADING, GET_USERS, EMPTY_USER, GET_SINGLE_USER, USER_NOT_FOUND, DELETE_USER } from '../Actions/userType';

const initialState = {
    users: [],
    user: {},
    loading: false
}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state, loading: true
            }
        case GET_USERS:
            return {
                ...state, users: action.payload, loading: false,
            }
        case GET_SINGLE_USER:
            return {
                ...state, user: action.payload, loading: false
            }
        case USER_NOT_FOUND:
            return {
                ...state, user: action.payload, loading: false
            }
        default:
            return state;
    }
}

export default userReduser;