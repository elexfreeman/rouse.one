import React from 'react';
import {render} from 'react-dom';
import MenuTop from './menu-top/MenuTop';
import MainPage from './main-page/MainPage';
import ProductPage from './products/ProductPage';
import CategoryPage from './category-page/CategoryPage';

import './styles/main.scss';

render(<div>

  <MenuTop/>
  <CategoryPage/>
  <ProductPage caption={'Бальзам для ног дезодорирущий 30мл'} availability={'На складе'}></ProductPage>
  <MainPage/>
  <MainPage/>

</div>, document.getElementById('root'));
