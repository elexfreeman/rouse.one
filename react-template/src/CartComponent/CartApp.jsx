import React from 'react';
import { Route, IndexRoute } from 'react-router'

import CartComponent from "./CartComponent";
import DeliveryComponent from "./DeliveryComponent";

const CartApp = () => (
    <div>
        <main>
            <Route path="/" component={CartComponent}/>
            <Route path="/delivery" component={DeliveryComponent}/>
        </main>
    </div>
);

export default  CartApp;