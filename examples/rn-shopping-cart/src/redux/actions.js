import {
    ADD_TO_CART,
    DECR_QTY_IN_CART,
    EMPTY_CART,
    INCR_QTY_IN_CART,
    REMOVE_FROM_CART,
} from './action-types';

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});
export const removeFromCart = (item) => ({
    type: REMOVE_FROM_CART,
    payload: item,
});
export const increaseQuantityInCart = (item) => ({
    type: INCR_QTY_IN_CART,
    payload: item,
});
export const decreaseQuantityInCart = (item) => ({
    type: DECR_QTY_IN_CART,
    payload: item,
});
export const emptyCart = () => ({
    type: EMPTY_CART,
});
