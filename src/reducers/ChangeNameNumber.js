import {CHANGE_NAME,CHANGE_NUMBER} from '../actionTypes/ActionTypes'

const initialState = {
    name:'before',
    number:0
}

const changeNumberName = (state=initialState,action) => {
    switch (action.type) {
        case CHANGE_NUMBER:
            return Object.assign({},state,{number: state.number +1})
        case CHANGE_NAME:
            if(state.name==='before'){
                return Object.assign({},state,{name:'hello'})
            }
            if(state.name==='hello'){
                return Object.assign({},state,{name:'bye'})
            }
            else{
                return state
            }
    
        default:
            return state
    }
}

export default changeNumberName