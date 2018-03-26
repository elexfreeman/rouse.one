const initialState = [null,1];

export default function cart(state = initialState, action) {
  if (action.type === 'ADD') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'DELETE') {
    return state;
  } else if (action.type === 'CHANGE_COUNT') {
    return [
    state,
      action.payload
    ];
  }
  return cart;
}
