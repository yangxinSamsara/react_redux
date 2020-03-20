import { createStore } from 'redux'
import rootReducers from '../reducers'

import { composeWithDevTools } from 'redux-devtools-extension';
// composeWithDevTools 在控制台可以查看数据
let store = createStore(rootReducers, composeWithDevTools())

console.log("initial state: ", store.getState());

export default store;