import axios from 'axios'
import { setAlert } from './alert'
import { Redirect } from 'react-router-dom'
import { REGISTER_FAIL, DELETE_FAIL, DELETE_SUCCESS, REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR, RESET_SUCCESS, RESET_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, RECOVER_SUCCESS, RECOVER_FAIL, VOCABLIST_SUCCESS, VOCABLIST_FAIL } from './types'
import setAuthToken from '../utils/setAuthToken'
//LOAD USER

export const loadUser = () => async dispatch =>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get('/api/auth')
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type:AUTH_ERROR
        })
    }
}
export const vocablist = () => async dispatch =>{
    try {
        const res = await axios.get('/api/dashboard/vocablist')
        dispatch({
            type:VOCABLIST_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        console.error(err.message)
        }
        dispatch({
            type: VOCABLIST_FAIL
        })
    }


//Register user

export const register = ({ name, email, password }) => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password })

    try {
        const res = await axios.post('/api/users', body, config)

        dispatch({
            type:REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser())
        dispatch(vocablist())
    } catch (err) {
        const errors = err.response.data.errors

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

export const login = (email, password) => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password })
    try {
        const res = await axios.post('/api/auth', body, config)
        
        dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
        })
        
        dispatch(loadUser())
        dispatch(vocablist())
    } catch (err) {
        const errors = err.response.data.errors

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const recover = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email })
    try {
        const res = await axios.post('/api/auth/recover', body, config)
        dispatch({
            type:RECOVER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: RECOVER_FAIL
        })
    }
}
export const password_reset = (token, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ password })
    try {
        const res = await axios.post(`/api/auth/password-reset?token=${token}`, body, config)
        dispatch({
            type:RESET_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.errors

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: RESET_FAIL
        })
    }
}
export const deleteUser = (delText) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ delText })
    console.log(body)
    try {
        const res = await axios.delete('/api/auth', body, config)
        dispatch({
            type:DELETE_SUCCESS,
            payload:res.data
        })
    } catch (err) { 
        dispatch({
            type: DELETE_FAIL
        })
    }
}

export const logout = () => ({ type: LOGOUT });