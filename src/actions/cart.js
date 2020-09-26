import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART
} from '../constants';

export const addProductToCart = product => ({
    type: ADD_PRODUCT_TO_CART,
    payload: product
});

export const removeProductFromCart = product => ({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product
});

export default {};
