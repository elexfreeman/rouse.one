import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCartRest} from '../models/cart_model';


import ScrollToTopOnMount from "../base/ScrollToTop";
import CartSumma from "./CartSumma";



// кнопка корзины в главном меню
class DeliveryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
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

    getProductsFromProps() {
        if (this.props.cart.length > 0) {
            getCartRest().then((data) => {
                this.setState({
                    products: data.products
                })
            });
        }
    }


    render() {

        return (<div className='cart-component'>
            <ScrollToTopOnMount />
          <h1>Доставка</h1>

        </div>)
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, dispatch => ({}))(DeliveryComponent);
