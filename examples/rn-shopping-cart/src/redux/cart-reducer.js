import {
    ADD_TO_CART,
    DECR_QTY_IN_CART,
    EMPTY_CART,
    REMOVE_FROM_CART,
} from './action-types';

const initialState = {
    cart: [
        {
            item: {
                id: 4,
                name: 'Tender Coconut',
                description: 'Fresho Tender Coconut, 1 pc',
                unitPrice: 34,
                quantityPerUnit: '1 pc',
                category: 'vegetable',
                image: 'https://www.bigbasket.com/media/uploads/p/l/40057966_3-fresho-tender-coconut-medium.jpg',
            },
            quantity: 2,
        },
        {
            item: {
                id: 8,
                name: 'Ginger',
                description: 'Fresho Ginger - Organically Grown (Loose)',
                unitPrice: 25.69,
                quantityPerUnit: '250 g',
                category: 'vegetable',
                image: 'https://www.bigbasket.com/media/uploads/p/l/40023480_4-fresho-ginger-organically-grown.jpg',
            },
            quantity: 4,
        },
        {
            item: {
                id: 7,
                name: 'Pear - Green',
                description: 'Fresho Pear - Green, Imported',
                unitPrice: 108,
                quantityPerUnit: '4 pcs',
                category: 'vegetable',
                image: 'https://www.bigbasket.com/media/uploads/p/l/40048445_2-fresho-pear-green-imported.jpg',
            },
            quantity: 1,
        },
    ],
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
