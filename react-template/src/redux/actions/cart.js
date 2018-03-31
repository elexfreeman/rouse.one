
import {cartUpdate, cartGetAll, cartRemove} from '../../cart/Cart';

import {getCartRest} from '../../models/cart_model';

export const onAddCart = (item) => dispatch => {
    dispatch({
        type: 'ADD_CART',
        payload: item
    });
};


export const onGetCart = () => dispatch => {
    getCartRest().then((data) => {
        dispatch({ type: 'CART_GET', payload: data.products })
    });
};


export const onChangeCount = (item) => {
    console.log(item);
    cartUpdate(item);
    return {
        type: 'CART_CHANGE_COUNT'
        ,payload: cartGetAll()
    }
};

export const onDelete = (productId) => {
    cartRemove(productId);

    return {
        type: 'CART_DELETE'
        ,payload: cartGetAll()
    }
};

