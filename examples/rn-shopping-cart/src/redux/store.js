import { legacy_createStore as createStore, combineReducers } from 'redux';

import cartReducer from './cart-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
    cartState: cartReducer,
    userState: userReducer,
});

const store = createStore(rootReducer);
export default store;
