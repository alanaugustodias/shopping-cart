import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART
} from '../constants';

const initialState = {
    cartProducts: {},
    totalOfProducts: 0
};

const addProduct = (state, product) => ({
    ...state,
    cartProducts: {
        ...state.cartProducts,
        [product]: state.cartProducts[product] ? state.cartProducts[product] + 1 : 1
    },
    totalOfProducts: state.totalOfProducts + 1
});

const removeProduct = (state, product) => ({
    ...state,
    cartProducts: {
        ...state.cartProducts,
        [product]: state.cartProducts[product] ? state.cartProducts[product] - 1 : 0
    },
    totalOfProducts: state.totalOfProducts ? state.totalOfProducts - 1 : 0
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_TO_CART: {
            return addProduct(state, payload);
        }
        case REMOVE_PRODUCT_FROM_CART: {
            return removeProduct(state, payload);
        }
        default: {
            return state;
        }
    }
};
