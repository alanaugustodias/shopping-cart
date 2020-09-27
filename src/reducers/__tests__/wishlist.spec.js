import {
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST
} from '../../constants';
import reducer from '../wishlist';

describe('Wishlist Reducer Unit Tests', () => {
    let state;

    it('should initialize the state', () => {
        state = reducer(state, {});
        expect(state.wishlistProducts.length).toEqual(0);
        expect(state.totalOfProducts).toEqual(0);
    });

    it('should add a Product to State', () => {
        state = reducer(state, {
            type: ADD_PRODUCT_TO_WISHLIST,
            payload: { id: 1, name: 'Test', price: '10' }
        });

        expect(state.wishlistProducts.length).toEqual(1);
        expect(state.totalOfProducts).toEqual(1);
    });

    it('should try adding the same Product, and not being able to', () => {
        const product = { id: 1, name: 'Test', price: '10' };
        state = reducer(state, {
            type: ADD_PRODUCT_TO_WISHLIST,
            payload: product
        });

        expect(state.wishlistProducts.length).toEqual(1);
        expect(state.totalOfProducts).toEqual(1);

        state = reducer(state, {
            type: ADD_PRODUCT_TO_WISHLIST,
            payload: product
        });

        expect(state.wishlistProducts.length).toEqual(1);
        expect(state.totalOfProducts).toEqual(1);
    });

    it('should remove a Product from State', () => {
        const product1 = { id: 1, name: 'Test', price: '10' };
        const product2 = { id: 2, name: 'Test', price: '5' };
        state = reducer(state, {
            type: ADD_PRODUCT_TO_WISHLIST,
            payload: product1
        });

        state = reducer(state, {
            type: ADD_PRODUCT_TO_WISHLIST,
            payload: product2
        });

        expect(state.totalOfProducts).toEqual(2);

        state = reducer(state, {
            type: REMOVE_PRODUCT_FROM_WISHLIST,
            payload: product2
        });

        expect(state.totalOfProducts).toEqual(1);
    });
});
