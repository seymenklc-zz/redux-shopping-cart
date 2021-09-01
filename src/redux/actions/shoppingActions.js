import * as actionTypes from '../constants';

export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: { item }
    };
};

export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: { id }
    };
};