import {CHECKOUT_PRICE} from '../actionTypes/ActionTypes'



const initialState = {
    price:'',
    clickedPrice:[]
}

const checkoutPrice = (state=initialState,action) => {
    switch (action.type) {
        case CHECKOUT_PRICE:
            return {
                ...state,
                clickedPrice:[...state.clickedPrice,action.price]
            }
        default:
            return state
    }
}

export default checkoutPrice