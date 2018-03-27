/*

export const onAddCart = (item) => dispatch => {
    dispatch({
        type: 'ADD_CART',
        payload: item
    });
};
*/


export function onAddCart(item, dispatch) {
    dispatch({type: 'ADD_CART', payload: item});
}