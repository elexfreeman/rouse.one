import React from 'react';
import {render} from 'react-dom';

// redux

import MenuTop from './menu-top/MenuTop';
import MainPage from './main-page/MainPage';
import ProductPage from './products/ProductPage';
import CategoryPage from './category-page/CategoryPage';

import './styles/main.scss';

render(<div>

  <MenuTop/>
  <MainPage/>
  <CategoryPage/>

</div>, document.getElementById('root'));
