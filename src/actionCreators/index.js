import * as types from '../actionTypes/ActionTypes'


export function changeWord(name) {
    return {
        type: types.CHANGE_NAME,
        name
    }
}

export function changeNumber(number){
    return {
        type: types.CHANGE_NUMBER,
        number
    }
}

export function getProduct(title){
    return {
        type: types.RECIEVE_PRODUCT,
        title
    }
}

export function addToCart(title){
    return {
        type: types.CHECKOUT_TITLE,
        title
    }
}

export function checkoutPrice(price){
    return {
        type: types.CHECKOUT_PRICE,
        price
    }
}



export function toggleCheckout(){
    return{
        type: types.TOGGLE_CHECKOUT,
    }
}


