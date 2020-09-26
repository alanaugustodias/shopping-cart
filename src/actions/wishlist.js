import {
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST
} from '../constants';

export const addProductToWishlist = product => ({
    type: ADD_PRODUCT_TO_WISHLIST,
    payload: product
});

export const removeProductFromWishlist = product => ({
    type: REMOVE_PRODUCT_FROM_WISHLIST,
    payload: product
});

export default {};
