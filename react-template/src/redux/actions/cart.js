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
        dispatch({type: 'CART_GET', payload: data.products})
    });
};


export const onChangeCount = (args) => {
    /*обновляем localStorage*/
    cartUpdate({productId: args.productId, count: args.count});
    /*обновляем store*/
    return {
        type: 'CART_CHANGE_COUNT'
        /*переписываем store*/
        , payload: args.cart.map((item) => {
            /*если id овпадают то меняем кол-во*/
            /*это важно прии обновлении*/
            if (item.id === args.productId) {
                item.count = args.count
            }
            return item;
        })
    }
};

export const onDelete = (productId) => {
    cartRemove(productId);

    return {
        type: 'CART_DELETE'
        , payload: cartGetAll()
    }
};

