import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    CLEAR_CART,
    SHOW_CART_MODAL,
    HIDE_CART_MODAL
} from '../constants';

export const addProductToCart = product => ({
    type: ADD_PRODUCT_TO_CART,
    payload: product
});

export const removeProductFromCart = product => ({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: product
});

export const clearCart = () => ({
    type: CLEAR_CART
});

export const showCartModal = () => ({
    type: SHOW_CART_MODAL
});

export const hideCartModal = () => ({
    type: HIDE_CART_MODAL
});

export default {};
