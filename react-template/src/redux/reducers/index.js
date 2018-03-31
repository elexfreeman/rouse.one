import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import cart from './cart';


export default combineReducers({
    routing: routerReducer,
    cart
});
