import { ADD_CART, UPDATE_CART, DELETE_FROM_CART } from '../contants/cart'
export const addCart = function (product, quantity, unitCost) {
    return {
        type: ADD_CART,
        payload: { product, quantity, unitCost }
    }
}
export const updateCart = function (product, quantity, unitCost) {
    return {
        type: UPDATE_CART,
        payload: { product, quantity, unitCost }
    }
}
export const deleteFromCart = function (product) {
    return {
        type: DELETE_FROM_CART,
        payload: { product }
    }
}