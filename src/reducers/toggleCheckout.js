import {TOGGLE_CHECKOUT} from '../actionTypes/ActionTypes'



const initialState = {
    left:0+'vh'
}

const product = (state=initialState,action) => {
    switch (action.type) {
        case TOGGLE_CHECKOUT:
            console.log('helllllllllllo'+document.getElementById('checkout-container').style);
            document.getElementById('checkout-container').style.left = state.left
            return state.left
        default:
            return state
    }
}

export default product