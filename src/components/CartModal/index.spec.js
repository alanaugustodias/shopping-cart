import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import CartModal from '.';
import {
    clearCart,
    hideCartModal,
    removeProductFromCart
} from '../../actions';

function mountComponent(store) {
    return mount(<Provider store={store}><CartModal /></Provider>);
}

describe('CartModal Unit Tests', () => {
    const initialState = {
        cart: {
            cartProducts: []
        },
        wishlist: {
            wishlistProducts: []
        }
    };

    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
        store.dispatch = jest.fn();
    });

    it('should render Component', () => {
        const wrapper = mountComponent(store);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('#emptyCartTitle').length).toBeGreaterThan(0);
        expect(wrapper.find('#productsWrapper').length).toBe(0);
    });

    it('should render Cart with Products', () => {
        store.getState().cart.cartProducts = [{ id: 1, name: 'Test', price: '20' }];
        store.getState().cart.totalOfProducts = 1;
        store.getState().cart.totalOfCart = '20';
        const wrapper = mountComponent(store);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('#emptyCartTitle').length).toBe(0);
        expect(wrapper.find('#productsWrapper').length).toBeGreaterThan(0);
    });

    it('should Close CartModal', () => {
        const wrapper = mountComponent(store);
        wrapper.find('button').at(0).simulate('click');
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            hideCartModal()
        );
    });

    it('should Clear Cart', () => {
        store.getState().cart.cartProducts = [{ id: 1, name: 'Test', price: '20' }];
        store.getState().cart.totalOfProducts = 1;
        store.getState().cart.totalOfCart = '20';
        const wrapper = mountComponent(store);
        wrapper.find('#clearCartButton').at(0).simulate('click');
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            clearCart()
        );
    });

    it('should Remove a Product', () => {
        const product = { id: 1, name: 'Test', price: '20' };
        store.getState().cart.cartProducts = [product];
        store.getState().cart.totalOfProducts = 1;
        store.getState().cart.totalOfCart = '20';
        const wrapper = mountComponent(store);
        wrapper.find('table').find('button').at(0).simulate('click');
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            removeProductFromCart(product)
        );
    });
});
