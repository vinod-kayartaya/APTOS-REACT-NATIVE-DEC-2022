import { LOGIN, LOGOUT, REGISTER } from './action-types';

const initialState = {
    user: {},
    isLoggedIn: false,
};
export default (state = initialState, action) => {
    console.log('userReducer called with action', action);
    if (action.type === LOGIN || action.type === REGISTER) {
        // action.payload contains user information
        return { ...state, isLoggedIn: true, user: action.payload };
    }

    if (action.type === LOGOUT) {
        return { ...state, isLoggedIn: false, user: {} };
    }

    return { ...state };
};
