import { ADD_CART, UPDATE_CART, DELETE_FROM_CART } from '../contants/cart'
const initialState = {
  shops: [
    {
      product: '面包',
      quantity: 2,
      unitCost: 90
    },
    {
      product: '牛奶',
      quantity: 1,
      unitCost: 47
    }
  ]
}
const cartReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_CART: {
      return {
        ...state,
        shops: [...state.shops, action.payload]
      }
    }

    case UPDATE_CART: {
      return {
        ...state,
        shops: state.shops.map(item => {
          item = item.product === action.payload.product ? action.payload : item
          return item
        })
      }
    }

    case DELETE_FROM_CART: {
      return {
        ...state,
        shops: state.shops.filter(item => item.product !== action.payload.product)
      }
    }

    default:
      return state
  }
}

export default cartReducer