// store is a collection of all reducers.
// to combine all the reducers as one, we have to use the combineReducers method

import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from 'redux';
import itemsReducer from './items-reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ itemsReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
