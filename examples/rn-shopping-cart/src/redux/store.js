import { legacy_createStore as createStore, combineReducers } from 'redux';

import cartReducer from './cart-reducer';

const rootReducer = combineReducers({
    cartState: cartReducer,
});

const store = createStore(rootReducer);
export default store;
