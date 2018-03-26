import React from 'react';
import {connect} from 'react-redux';

import Summa from './Summa';

const ProductOrder = ({cartStore, price, productId, onAddCart, onCountChange}) => {

let countInput = '';
console.log(cartStore.cart);
let count = cartStore.cart[1];

  const addCart = () => {
    onAddCart({count: parseInt(countInput.value), productId: productId});
  }

  const changeCount = (e) => {
    onCountChange(parseInt(countInput.value));
  }

  return (<div className="product-order">
    <Summa price={price} count={cartStore.cart[1]}/>
    <div className="divider">{count}</div>

    <div className="columns">

      <div className="form-horizontal column col-xs-6 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-6">

        <div className="form-group">
          <div className="col-4 col-xs-6 col-md-6 col-lg-6 col-sm-12">
            <label className="form-label">Кол-во:</label>
          </div>
          <div className="col-4 col-xs-6 col-md-4 col-lg-6 col-sm-12">
            <input onChange={changeCount} type='number' className="form-input" ref={(input) => {
                countInput = input
              }}/>
          </div>
        </div>
      </div>
      <div className="to_cart column col-xs-12 col-sm-12 col-lg-6 col-xl-6 col-6">
        <button className="btn btn-primary  btn-lg" onClick={() => {
            addCart()
          }}>
          <i className="fa fa-cart-plus" aria-hidden="true"></i>&nbsp; В корзину</button>
      </div>

    </div>

    <div className="divider"></div>
  </div>)

}
export default connect(state => ({cartStore: state}), dispatch => ({
  onAddCart: (cartItem) => {
    dispatch({type: 'ADD', payload: cartItem});
  },
  onCountChange: (count) => {
    dispatch({type: 'CHANGE_COUNT', payload: count});
  }
}))(ProductOrder);
