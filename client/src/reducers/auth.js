import { REGISTER_FAIL,VOCABLIST_SUCCESS, VOCABLIST_FAIL ,REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, RECOVER_FAIL, RECOVER_SUCCESS, RESET_FAIL, RESET_SUCCESS, DELETE_SUCCESS, DELETE_FAIL } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    vocabulary: null
}

export default function(state = initialState, action){
    const { type, payload } = action
    
    switch (type){
        case VOCABLIST_SUCCESS:
            return {
                ...state, vocablist: payload
            }
        case USER_LOADED:
            return  {
                ...state, isAuthenticated: true, loading: false, user: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        case RECOVER_SUCCESS:
        case RECOVER_FAIL:
        case RESET_FAIL:
        case DELETE_FAIL:
        case RESET_SUCCESS:
            localStorage.getItem('token', payload.token)
            return {
                ...state, ...payload, isAuthenticated: true, loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case DELETE_SUCCESS:
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state, token:null, isAuthenticated: false, loading: false
            }
        default:
            return state
    }
}