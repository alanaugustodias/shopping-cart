import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    CLEAR_CART,
    SHOW_CART_MODAL,
    HIDE_CART_MODAL
} from '../../constants';
import reducer from '../cart';

describe('Cart Reducer Unit Tests', () => {
    let state;

    it('should initialize the state', () => {
        state = reducer(state, {});
        expect(state.cartProducts.length).toEqual(0);
        expect(state.totalOfCart).toEqual(0);
        expect(state.totalOfProducts).toEqual(0);
    });

    it('should add a Product to State', () => {
        state = reducer(state, {
            type: ADD_PRODUCT_TO_CART,
            payload: { id: 1, name: 'Test', price: '10' }
        });

        expect(state.cartProducts.length).toEqual(1);
        expect(state.totalOfCart).toEqual('10.00');
        expect(state.totalOfProducts).toEqual(1);
    });

    it('should try adding the same Product, and not being able to', () => {
        const product = { id: 1, name: 'Test', price: '10' };
        state = reducer(state, {
            type: ADD_PRODUCT_TO_CART,
            payload: product
        });

        expect(state.cartProducts.length).toEqual(1);
        expect(state.totalOfCart).toEqual('10.00');
        expect(state.totalOfProducts).toEqual(1);

        state = reducer(state, {
            type: ADD_PRODUCT_TO_CART,
            payload: product
        });

        expect(state.cartProducts.length).toEqual(1);
        expect(state.totalOfCart).toEqual('10.00');
        expect(state.totalOfProducts).toEqual(1);
    });

    it('should remove a Product from State', () => {
        const product1 = { id: 1, name: 'Test', price: '10' };
        const product2 = { id: 2, name: 'Test', price: '5' };
        state = reducer(state, {
            type: ADD_PRODUCT_TO_CART,
            payload: product1
        });

        state = reducer(state, {
            type: ADD_PRODUCT_TO_CART,
            payload: product2
        });

        expect(state.totalOfCart).toEqual('15.00');
        expect(state.totalOfProducts).toEqual(2);

        state = reducer(state, {
            type: REMOVE_PRODUCT_FROM_CART,
            payload: product2
        });

        expect(state.totalOfCart).toEqual('10.00');
        expect(state.totalOfProducts).toEqual(1);
    });

    it('should Clear the Cart', () => {
        const product1 = { id: 1, name: 'Test', price: '10' };
        const product2 = { id: 2, name: 'Test', price: '5' };
        state = reducer(state, {
            type: ADD_PRODUCT_TO_CART,
            payload: product1
        });

        state = reducer(state, {
            type: ADD_PRODUCT_TO_CART,
            payload: product2
        });

        expect(state.totalOfCart).toEqual('15.00');
        expect(state.totalOfProducts).toEqual(2);

        state = reducer(state, {
            type: CLEAR_CART
        });

        expect(state.totalOfCart).toEqual(0);
        expect(state.totalOfProducts).toEqual(0);
    });

    it('should Show/Hide the Cart', () => {
        state = reducer(state, {
            type: SHOW_CART_MODAL
        });

        expect(state.showModal).toEqual(true);

        state = reducer(state, {
            type: HIDE_CART_MODAL
        });

        expect(state.showModal).toEqual(false);
    });
});
