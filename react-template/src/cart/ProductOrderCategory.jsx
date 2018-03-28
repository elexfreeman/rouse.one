import React, {Component} from 'react';
import {connect} from 'react-redux';

import Summa from './Summa';
import CommitModal from './CommitModal';

import {cartAdd, cartGetAll} from './Cart';

class ProductOrderCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: '1',
      modalVisible: false
    };
    this.handlCountChange = this.handlCountChange.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  handlCountChange(event) {
    event.preventDefault();
    if (event.target.value <= 0) {
      this.setState({count: 1});
    } else {
      this.setState({count: event.target.value});
    }

  }

  addCart() {
    this.props.onAddCart({
      count: parseInt(this.state.count),
      productId: this.props.productId
    });

    this.setState({modalVisible: true});
    setTimeout(() => {
      this.setState({modalVisible: false});
    }, 800)
  }

  render() {
    return (<div>
      <CommitModal visible={this.state.modalVisible}/>
      <button onClick={this.addCart} className="btn btn-primary to_cart btn-lg">
        <i className="fa fa-cart-plus" aria-hidden="true"></i>&nbsp; В корзину
      </button>
    </div>)
  };

}

export default connect(state => ({cart: state.cart}), dispatch => ({
  onAddCart: (item) => {
    // Добаляем в корзину
    cartAdd(item);
    dispatch({type: 'ADD_CART', payload: cartGetAll()});
  }

}))(ProductOrderCategory);
