import React, {Component} from 'react';
import {connect} from 'react-redux';

// кнопка корзины в главном меню
const CartButton = ({cart}) => {

  let count = 0;

  if(cart.length >0) {
    /*TODO узнат почему с 0*/
    cart[0].map(function(item) {
      count += item.count;
    });
  }

  return (<button className="btn-cart btn input-group-btn btn-lg badge" data-badge={count}>
    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
  </button>)

}

export default connect(state => ({cart: state.cart}), dispatch => ({}))(CartButton);
