import React from 'react';
import {render} from 'react-dom';
import MenuTop from './menu-top/MenuTop';
import MainPage from './main-page/MainPage';
import ProductPage from './products/ProductPage';

import './styles/main.scss';

render(<div>

  <MenuTop/>
  <ProductPage caption={'Бальзам для ног дезодорирущий 30мл'} availability={'На складе'}></ProductPage>
  <MainPage/>

</div>, document.getElementById('root'));
