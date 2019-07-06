import {RECIEVE_PRODUCT} from '../actionTypes/ActionTypes'


const initialState = {
    title:'',
    clickedTitle:[]
}

const product = (state=initialState,action) => {
    switch (action.type) {
        case RECIEVE_PRODUCT:
            return {
                ...state,
                clickedTitle:[...state.clickedTitle,action.title]
            }
        default:
            return state
    }
}

export default product