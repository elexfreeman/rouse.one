import React from 'react';
import { Route } from 'react-router-dom'

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