import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    CLEAR_CART,
    SHOW_CART_MODAL,
    HIDE_CART_MODAL
} from '../constants';

const getInitialState = () => ({
    cartProducts: [],
    totalOfCart: 0,
    totalOfProducts: 0,
    showModal: false
});

const addProduct = (currentState, product) => {
    const newState = { ...currentState };
    if (!newState.cartProducts.some(prd => prd.id === product.id)) {
        newState.cartProducts.push(product);
        newState.totalOfProducts = newState.cartProducts.length;
        newState.totalOfCart = (Number(newState.totalOfCart) + Number(product.price)).toFixed(2);
    }
    return newState;
};

const removeProduct = (currentState, product) => {
    const newState = { ...currentState };
    newState.cartProducts = newState.cartProducts.filter(prd => prd.id !== product.id);
    newState.totalOfProducts = newState.cartProducts.length;
    newState.totalOfCart = newState.cartProducts.reduce((prev, curr) => (
        prev + Number(curr.price)
    ), 0);
    newState.totalOfCart = newState.totalOfCart.toFixed(2);
    return newState;
};

export default (state = getInitialState(), { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_TO_CART: {
            return addProduct(state, payload);
        }
        case REMOVE_PRODUCT_FROM_CART: {
            return removeProduct(state, payload);
        }
        case CLEAR_CART: {
            return getInitialState();
        }
        case SHOW_CART_MODAL: {
            return {
                ...state,
                showModal: true
            };
        }
        case HIDE_CART_MODAL: {
            return {
                ...state,
                showModal: false
            };
        }
        default: {
            return state;
        }
    }
};
