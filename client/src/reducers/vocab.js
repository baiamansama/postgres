import {VOCABLIST_SUCCESS, VOCABLIST_FAIL} from "../actions/types";

const initialState = {
    listOfVocab: null,
    loading: true
}

export default function(state = initialState, action){
    const { type, payload } = action
    switch (type){
        case VOCABLIST_SUCCESS:
            return {
                ...state,
                listOfVocab: payload,
                loading: false
            }
        case VOCABLIST_FAIL:
            return{
                ...state,
                loading: false
            }

        default:
            return state

    }
}