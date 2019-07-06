import { combineReducers } from 'redux'
import changeNumberName from './ChangeNameNumber'
import Product from './Product'



const rootReducer = combineReducers({
    changeNumberName,
    Product
  })

export default rootReducer

