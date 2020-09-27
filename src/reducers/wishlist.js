import {
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST
} from '../constants';

const initialState = {
    wishlistProducts: [],
    totalOfProducts: 0
};

const addProduct = (currentState, product) => {
    const newState = { ...currentState };
    if (!newState.wishlistProducts.some(prd => prd.id === product.id)) {
        newState.wishlistProducts.push(product);
    }
    newState.totalOfProducts = newState.wishlistProducts.length;
    return newState;
};

const removeProduct = (currentState, product) => {
    const newState = { ...currentState };
    newState.wishlistProducts = newState.wishlistProducts.filter(prd => prd.id !== product.id);
    newState.totalOfProducts = newState.wishlistProducts.length;
    return newState;
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_TO_WISHLIST: {
            return addProduct(state, payload);
        }
        case REMOVE_PRODUCT_FROM_WISHLIST: {
            return removeProduct(state, payload);
        }
        default: {
            return state;
        }
    }
};
