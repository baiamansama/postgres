import axios from 'axios'
import {VOCAB_FAIL, VOCAB_SUCCESS, VOCABLIST_SUCCESS, VOCABLIST_FAIL} from './types'
import { setAlert } from './alert'
import { loadUser } from './auth'

export const vocab = (isKnown, vocab_id) => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ isKnown, vocab_id })
    try {
        const res = await axios.post('/api/dashboard/vocab', body, config)
        dispatch({
            type:VOCAB_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser())
    } catch (err) {
        const errors = err.response.data.errors
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: VOCAB_FAIL
        })
    }
}
