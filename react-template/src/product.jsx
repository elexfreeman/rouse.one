import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import ProductControler from './controlers/ProductControler';

import ProductOrder from './products/ProductOrder';

import store from './redux/store';

import './styles/main.scss';

render(
  <div>
    <ProductControler />
</div>, document.getElementById('root'));

render(
  <Provider store={store}>
    <div className='product-page'>
      <div className='product-info container'>
        <ProductOrder productId={1}  price={200} />
      </div>
    </div>
</Provider>, document.getElementById('cart'));
