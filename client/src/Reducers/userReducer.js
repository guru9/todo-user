import { USER_LOADING, GET_USERS, EMPTY_USER, USER_NOT_FOUND } from '../Actions/userType';

const initialState = {
    users: [],
    user: null,
    loading: false,
    addUser: false
}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state, loading: true
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case EMPTY_USER:
            return {
                ...state, addUser: true, loading: false
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