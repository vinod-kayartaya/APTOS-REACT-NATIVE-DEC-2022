import {
    ADD_TO_CART,
    DECR_QTY_IN_CART,
    EMPTY_CART,
    REMOVE_FROM_CART,
} from './action-types';

const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    console.log('cartReducer called with action', action);

    switch (action.type) {
        case ADD_TO_CART: {
            const { cart } = state;
            const item = cart.find((li) => li.item.id === action.payload.id);
            if (item) {
                item.quantity++;
            } else {
                cart.push({ item: action.payload, quantity: 1 });
            }
            return { ...state, cart };
        }
        case EMPTY_CART: {
            return { ...state, cart: [] };
        }
        case DECR_QTY_IN_CART: {
            const { cart } = state;
            const index = cart.findIndex(
                (li) => li.item.id == action.payload.id
            );
            const item = cart[index];
            if (item.quantity == 1) {
                // remove the item itself from the cart
                cart.splice(index, 1);
            } else {
                item.quantity--;
            }

            return { ...state, cart };
        }
        case REMOVE_FROM_CART: {
            const { cart } = state;
            const index = cart.findIndex(
                (li) => li.item.id == action.payload.id
            );
            cart.splice(index, 1);

            return { ...state, cart };
        }
        default:
            return { ...state };
    }
};

export default cartReducer;
