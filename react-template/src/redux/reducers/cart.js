let tmp = window.localStorage.getItem('cart');
if (tmp == null) {
  tmp = [];
} else {
  tmp = JSON.parse(tmp)
}

const initialState = [tmp];

export default function cart(state = initialState, action) {
    if (action.type === 'ADD_CART') {
        return [
            action.payload
        ];
    } else if (action.type === 'DELETE') {
        return state;
    }
    return state;
}
