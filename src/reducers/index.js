import { combineReducers } from 'redux'
import changeNumberName from './ChangeNameNumber'
import Product from './Product'
import toggleCheckout from './toggleCheckout'
import checkoutPrice from './checkoutPrice'



const rootReducer = combineReducers({
    changeNumberName,
    Product,
    toggleCheckout,
    checkoutPrice
  })

export default rootReducer

