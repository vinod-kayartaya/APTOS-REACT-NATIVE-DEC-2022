// This contains helper functions to create action objects
// which are going to be dispatched by events in components.
// These functions are also known as Action-Creators

import {
    ADD_ITEM,
    CANCEL_EDIT,
    DELETE_ITEM,
    EDIT_ITEM,
    LOAD_ITEMS,
    TOGGLE_ITEM_IN_CART,
    UPDATE_ITEM,
} from './action-types';

import axios from 'axios';

const baseUrl = 'http://localhost:3000/items/';

export const loadItems = async () => {
    const resp = await axios.get(baseUrl);
    return { type: LOAD_ITEMS, payload: resp.data };
};

export const deleteItem = async (id) => {
    await axios.delete(baseUrl + id);
    return { type: DELETE_ITEM, payload: id };
};

export const toggleItemInCart = async (item) => {
    item.inCart = !item.inCart;
    const res = await axios.put(baseUrl + item.id, item);
    return { type: TOGGLE_ITEM_IN_CART, payload: res.data };
};

export const addItem = async (item) => {
    const res = await axios.post(baseUrl, item);
    return { type: ADD_ITEM, payload: res.data };
};

export const editItem = (item) => {
    return { type: EDIT_ITEM, payload: item };
};

export const updateItem = async (item) => {
    const res = await axios.put(baseUrl + item.id, item);
    return { type: UPDATE_ITEM, payload: res.data };
};

export const cancelEdit = () => {
    return { type: CANCEL_EDIT };
};
