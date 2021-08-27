import {  combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import vocab from './vocab'

export default combineReducers({
    alert,
    auth,
    vocab,
})