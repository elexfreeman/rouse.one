import React from 'react';
import CartItem from "./CartItem";
import {getCartRest} from "../models/cart_model";

/*this.props.visible = 'active'*/
const CartComponentTable = ({products}) => {

    // let pp = [];
    //
    // function getProductsFromProps() {
    //     return new Promise(function (resolve, reject) {
    //         if (products.length > 0) {
    //             getCartRest().then((data) => {
    //                 resolve(data.products)
    //                 console.log(pp);
    //             });
    //         }
    //     });
    //
    // }
    // getProductsFromProps();

    return (
        <table className="products table table-striped table-hover">
            <thead>
            <tr>
                <th>Наименование</th>
                <th></th>
                <th>Цена</th>
                <th>Кол-во</th>
                <th>Сумма</th>
            </tr>
            </thead>
            <tbody>
            {products.map((item, key)=>  <CartItem item={item}  key={key}/>)}
            </tbody>
        </table>
   )

};


export default CartComponentTable;
