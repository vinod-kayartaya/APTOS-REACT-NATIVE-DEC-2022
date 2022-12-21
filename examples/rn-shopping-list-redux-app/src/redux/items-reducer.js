import {
    ADD_ITEM,
    CANCEL_EDIT,
    DELETE_ITEM,
    EDIT_ITEM,
    LOAD_ITEMS,
    TOGGLE_ITEM_IN_CART,
    UPDATE_ITEM,
} from './action-types';

const initialState = {
    items: [],
    itemForEdit: {},
};

// this method is automatically called by redux on receiving an action via dispatch.
// this method should return a new state which replaces the old state in the store.
function itemsReducer(state = initialState, action) {
    console.log(action);

    if (action.type === LOAD_ITEMS) {
        return { ...state, items: action.payload };
    }

    if (action.type === DELETE_ITEM) {
        let { items } = { ...state };
        let modifiedItems = items.filter((i) => i.id !== action.payload);
        return { ...state, items: modifiedItems }; // modified state with 1 less item
    }

    if (action.type === TOGGLE_ITEM_IN_CART) {
        let { items } = { ...state };
        let index = items.findIndex((i) => i.id === action.payload.id);
        items[index] = action.payload;
        return { ...state, items };
    }

    if (action.type === EDIT_ITEM) {
        return { ...state, itemForEdit: action.payload };
    }

    if (action.type === CANCEL_EDIT) {
        return { ...state, itemForEdit: {} };
    }

    if (action.type === ADD_ITEM) {
        let { items } = { ...state };
        items.push(action.payload);
        return { ...state, items };
    }

    if (action.type === UPDATE_ITEM) {
        let { items } = { ...state };
        let index = items.findIndex((i) => i.id === action.payload.id);
        items[index] = action.payload;
        return { ...state, items };
    }

    return { ...state }; // do not return the same state, but a copy of the state
}

export default itemsReducer;
