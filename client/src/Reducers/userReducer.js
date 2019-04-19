import { GET_USERS, USER_LOADING, USER_NOT_FOUND } from '../Actions/userType';

const initialState = {
    users: null,
    user: null,
    loading: false
}

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state, loading: action.payload
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
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