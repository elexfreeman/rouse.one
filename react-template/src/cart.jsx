import React from 'react';
import {render} from 'react-dom';
// redux
import {Provider} from 'react-redux';

import {BrowserRouter} from 'react-router-dom';

import store from './redux/store';


import './styles/main.scss';

import CartApp from './CartComponent/CartApp';
import CartButton from "./cart/CartButton";
import {onGetCart} from './redux/actions/cart';




// Корзина
/*загружаем ее*/
store.dispatch(onGetCart());


let cart_container = document.getElementById('cart_container');
console.log(cart_container);
render(
    <Provider store={store}>
    <BrowserRouter>
        <CartApp/>
    </BrowserRouter>
    </Provider>
, cart_container);


// кнопка корзины
render(<Provider store={store}>
    <CartButton/>
</Provider>, document.getElementById('cart_button'));
