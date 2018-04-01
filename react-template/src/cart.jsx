import React from 'react';
import {render} from 'react-dom';
// redux
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import store from './redux/store';


 // const history = syncHistoryWithStore(createBrowserHistory(), store);
//const history = createHistory();
//const history = syncHistoryWithStore(browserHistory, store);
const history = syncHistoryWithStore(createHistory(), store);
import CartApp from './CartComponent/CartApp';


import './styles/main.scss';
import CartButton from "./cart/CartButton";
import {onGetCart} from './redux/actions/cart';
import DeliveryComponent from "./CartComponent/DeliveryComponent";
import CartComponent from "./CartComponent/CartComponent";

let cart_container = document.getElementById('cart_container');

// Корзина
/*загружаем ее*/
store.dispatch(onGetCart());



render(<Provider store={store}>
    <div>
        <Router history={history}>
            <div>
                <Route path="/" component={CartComponent} />
                <Route path="/delivery" component={DeliveryComponent}/>
            </div>


        </Router>
    </div>
</Provider>, cart_container);


// кнопка корзины
render(<Provider store={store}>
    <CartButton/>
</Provider>, document.getElementById('cart_button'));
