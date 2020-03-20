import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import * as cartActions from './actions/cart'


class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { shops } = this.props.cart;
    return (
      <div className="App">
        <ul>
          {shops.map((s, index) => {
            return <li key={index}>{s.product}===>{s.quantity}===>{s.unitCost}</li>
          })}
        </ul>
        <hr />
        <button onClick={() => this.props.addCart()} > 增加商品</button>
        <button onClick={() => this.props.updateCart()} > 修改商品</button>
        <button onClick={() => this.props.deleteCart()} > 删除商品</button>
      </div>
    )
  }
}

function getState(state) {
  return {
    cart: state.cart
  }
}

function getDispatch(dispatch) {
  return {
    addCart: () => dispatch(cartActions.addCart("鱼香肉丝", 1, 20)),
    updateCart: () => dispatch(cartActions.updateCart("鱼香肉丝", 2, 50)),
    deleteCart: () => dispatch(cartActions.deleteFromCart("鱼香肉丝"))
  }
}

export default connect(getState, getDispatch)(App);
