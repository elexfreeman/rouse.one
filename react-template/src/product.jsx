import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import ProductControler from './controlers/ProductControler';

import ProductOrder from './cart/ProductOrder';
import CartButton from './cart/CartButton';
import ProductOrderCategory from './cart/ProductOrderCategory';

import store from './redux/store';

import './styles/main.scss';

// кнопка корзины
render(<Provider store={store}>
      <CartButton />
</Provider>, document.getElementById('cart_button'));

// добавление товара в корзину
let product_order = document.getElementById('product_order');
render(<Provider store={store}>
      <ProductOrder productId={product_order.getAttribute('product_id')} price={product_order.getAttribute('price')}/>
</Provider>, product_order);


// список продуктов
let products = document.getElementsByClassName('product_order_category');

Array.prototype.forEach.call(document.getElementsByClassName('product_order_category'), (el) => {
  render(<Provider store={store}>
    <ProductOrderCategory productId={el.getAttribute('product_id')}/>
  </Provider>, el)
});

// добавление товара в корзину
let product_img = document.getElementById('product_img');
render(
<div>
  <ProductControler />
</div>
  , product_img);
