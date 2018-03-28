import React from 'react';
import {connect} from 'react-redux';

const CartModalItem = ({item, onDelete}) => {

  return (<tr>
    <td>ProductId: {item.productId}</td>
    <td>Count:{item.count}</td>
    <td><button onClick={onDelete(item.productId)} className="btn"><i className="icon icon-delete"></i></button></td>
  </tr>)

}
export default CartModalItem;
