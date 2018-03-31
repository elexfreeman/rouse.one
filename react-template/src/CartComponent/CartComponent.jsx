import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom'
import CartComponentTable from "./CartComponentTable";
import CartSumma from "./CartSumma";


// кнопка корзины в главном меню
const CartComponent = ({cart}) => {

    return (<div className='cart-component'>
        <div className='container'>
            <Link to="/delivery">delivery</Link>
            <CartComponentTable products={cart}/>
            <CartSumma products={cart}/>
        </div>
    </div>)

};

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}



export default connect(mapStateToProps)(CartComponent);
