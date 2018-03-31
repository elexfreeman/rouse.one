import React, {Component} from 'react';
import {connect} from 'react-redux';

import CartButtonModal from './CartButtonModal';
import {getCartRest} from '../models/cart_model';

// кнопка корзины в главном меню
class CartButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
            , modalVisible: ''
            , products: []
        }

        this.onCloseModal = this.onCloseModal.bind(this);
        this.onModalOpen = this.onModalOpen.bind(this);
    }

    // при изменнинии стейта в Redux выдает кол-во товаров в корзине
    cartCount() {
        let count = 0;
        if (this.props.cart.length > 0) {
            /* TODO узнат почему с 0 */
            this.props.cart[0].map(function (item) {
                count += parseInt(item.count);
            });
        }
        return count;
    }

    onCloseModal() {
        this.setState({modalVisible: ''})
    }

    onModalOpen() {
        if (this.props.cart.length > 0) {
            getCartRest().then((data) => {
                this.setState({
                    products: data.products
                    , modalVisible: 'active'
                })
            });
        } else {
            this.setState({modalVisible: 'active'});
        }
    }

    render() {
        return (<span>
        <CartButtonModal products={this.state.products} modalVisible={this.state.modalVisible}
                         onClose={this.onCloseModal}/>
      <button onClick={this.onModalOpen} className="btn-cart btn input-group-btn btn-lg badge"
              data-badge={this.cartCount()}>
        <i className="fa fa-shopping-cart" aria-hidden="true" />
      </button>

    </span>)
    }

}

export default connect(state => ({cart: state.cart}), dispatch => ({}))(CartButton);
