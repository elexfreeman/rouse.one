import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCartRest} from '../models/cart_model';

import './cart.scss';
// кнопка корзины в главном меню
class CartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      hasError: false
    }
  }

  componentDidMount() {
    if (this.props.cart.length > 0) {
      getCartRest().then((data) => {
        this.setState({products: data.products, modalVisible: 'active'})
      });
    } else {
      this.setState({modalVisible: 'active'});
    }
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({hasError: true});
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
     // You can render any custom fallback UI
     return <h1>Something went wrong.</h1>;
   }
    return (<div className={'cart-component'}>
      <h1>Cart</h1>
    </div>)
  }

}

export default connect(state => ({cart: state.cart}), dispatch => ({}))(CartComponent);
