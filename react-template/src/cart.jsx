import React from 'react';
import {render} from 'react-dom';
// redux
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './redux/store';


// const history = syncHistoryWithStore(createBrowserHistory(), store);
const history = createHistory();
import CartApp from './CartComponent/CartApp';


import './styles/main.scss';
import CartButton from "./cart/CartButton";
import {onGetCart} from './redux/actions/cart';
let cart_container =  document.getElementById('cart_container');

// Корзина
/*загружаем ее*/
store.dispatch(onGetCart());

render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <div>
            <CartApp />
        </div>
    </ConnectedRouter>
</Provider>, cart_container);



// кнопка корзины
render(<Provider store={store}>
    <CartButton />
</Provider>, document.getElementById('cart_button'));
