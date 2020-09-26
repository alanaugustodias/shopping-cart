import {
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST
} from '../constants';

const initialState = {
    wishlistProducts: [],
    totalOfProducts: 0
};

const addProduct = (state, product) => {
    if (!state.wishlistProducts.includes(product)) {
        state.wishlistProducts.push(product);
    }

    return {
        ...state,
        totalOfProducts: state.wishlistProducts.length
    };
};

const removeProduct = (state, product) => {
    state.wishlistProducts.remove(product);
    return {
        ...state,
        totalOfProducts: state.wishlistProducts.length
    };
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
