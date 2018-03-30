import React from 'react';
import {render} from 'react-dom';
// redux
import {Provider} from 'react-redux';
import store from './redux/store';


import CartComponent from './cart/CartComponent';

import './styles/main.scss';
import CartButton from "./cart/CartButton";

let cart_container =  document.getElementById('cart_container');

// Корзина
render(<Provider store={store}>
  <CartComponent />
</Provider>, cart_container);



// кнопка корзины
render(<Provider store={store}>
    <CartButton />
</Provider>, document.getElementById('cart_button'));
