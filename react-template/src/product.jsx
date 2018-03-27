import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import ProductControler from './controlers/ProductControler';

import ProductOrder from './cart/ProductOrder';
import CartButton from './cart/CartButton';

import store from './redux/store';

import './styles/main.scss';



render(
  <Provider store={store}>
    <div className='product-page'>
      <div className='product-info container'>
        <CartButton productId={5}  price={200} />
      </div>
    </div>
  </Provider>, document.getElementById('cart_button'));


render(
  <Provider store={store}>
    <div className='product-page'>
      <div className='product-info container'>
        <ProductOrder productId={5}  price={200} />
        <ProductOrder productId={1}  price={200} />
        <ProductOrder productId={2}  price={200} />
      </div>
    </div>
  </Provider>, document.getElementById('cart'));
