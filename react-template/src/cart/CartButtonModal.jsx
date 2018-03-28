// модальное окно при нажатии на кнопку корзине в top-Menu

import React, {Component} from 'react';
import {connect} from 'react-redux';

import CartModalItem from './CartModalItem'
import {cartRemove, cartGetAll} from './Cart';
// кнопка корзины в главном меню
class CartButtonModal extends Component {
  constructor(props) {
    super(props);
      this.onDelete = this.onDelete.bind(this);
  }

  // список товаров в корзине
  //TODO приделат подгрузку инфы с сервера по productId
  cartList() {
    if (this.props.cart.length > 0) {
      return (this.props.cart[0].map((item, key) => <CartModalItem onDelete={this.onDelete} key={key} item={item}/>))
    } else {
      return (<div></div>);
    }
  }

  onDelete(productId){
    this.props.onDeletedCartItem(productId);
  }


  render() {
    return (<div>
      <div className={"modal " + this.props.modalVisible}>
        <a onClick={this.props.onClose} className="modal-overlay" aria-label="Close"></a>
        <div className="modal-container">
          <div className="modal-header">
            <a onClick={this.props.onClose} className="btn btn-clear float-right" aria-label="Close"></a>
            <div className="modal-title h5">Ваша корзина</div>
          </div>
          <div className="modal-body">
            <div className="content">
              
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>If</th>
                    <th>ID</th>
                    <th>ID</th>
                  </tr>
                </thead>
                <tbody>
                  {this.cartList()}
                </tbody>
              </table>

            </div>
          </div>
          <div className="modal-footer">
            <button className="btn">Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>)
  }

}

export default connect(state => ({cart: state.cart}), dispatch => ({
  onDeletedCartItem: (productId) => {
    // Добаляем в корзину
    cartRemove(productId);
    dispatch({type: 'DELETE_CART', payload: cartGetAll()});
  }
}))(CartButtonModal);
