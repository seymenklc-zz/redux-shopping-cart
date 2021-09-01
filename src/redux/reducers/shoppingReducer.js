import * as actionTypes from '../constants';

const initialState = {
    cart: [],
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: {
            const { item } = action.payload;
            return {
                ...state,
                cart: [...state.cart, item]
            };
        }
        case actionTypes.REMOVE_FROM_CART:
            const { id } = action.payload;
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== id)
            };
        default:
            return state;
    }
};

export default shopReducer;