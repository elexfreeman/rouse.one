import React, {Component} from 'react';
import {connect} from 'react-redux';

import CartButtonModal from './CartButtonModal';

// кнопка корзины в главном меню
class CartButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
      ,modalVisible: ''
    }
    
    this.cartCount = this.cartCount.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
  }

  // при изменнинии стейта в Redux выдает кол-во товаров в корзине
  cartCount() {
    let count = 0;
    if (this.props.cart.length > 0) {
      /* TODO узнат почему с 0 */
      this.props.cart[0].map(function(item) {
        count += item.count;
      });
    }
    return count;
  }

  onCloseModal(){
    this.setState({modalVisible: ''})
  }

  onModalOpen(){
        this.setState({modalVisible: 'active'})
  }

  render() {
    return (<span>
      <button onClick={this.onModalOpen} className="btn-cart btn input-group-btn btn-lg badge" data-badge={this.cartCount()}>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </button>
      <CartButtonModal modalVisible={this.state.modalVisible} onClose={this.onCloseModal} />
    </span>)
  }

}

export default connect(state => ({cart: state.cart}), dispatch => ({}))(CartButton);
