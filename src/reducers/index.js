import { combineReducers } from 'redux'
import cartReducer from './cart'
import productsReducer from './productsReducer'

const allReducers = {
    cart: cartReducer,
    products: productsReducer
}

const rootReducer = combineReducers(allReducers)//合并reducer
export default rootReducer