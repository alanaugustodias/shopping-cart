import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import ProductItem from '.';
import {
    addProductToCart,
    removeProductFromCart,
    addProductToWishlist,
    removeProductFromWishlist
} from '../../actions';

function mountComponent(store, product) {
    return mount(<Provider store={store}><ProductItem {...product} /></Provider>);
}

describe('ProductItem Unit Tests', () => {
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
        const product = { id: 1, name: 'ASDASD' };
        const wrapper = mountComponent(store, product);
        expect(wrapper.length).toBe(1);
    });

    it('should dispatch addProductToCart action', () => {
        const product = { id: 1, name: 'ASDASD', price: '20.00' };
        const wrapper = mountComponent(store, product);
        wrapper.find('button').at(0).simulate('click');
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            addProductToCart(product)
        );
    });

    it('should dispatch removeProductFromCart action', () => {
        const product = { id: 1, name: 'ASDASD', price: '20.00' };
        store.getState().cart.cartProducts.push(product);
        const wrapper = mountComponent(store, product);
        wrapper.find('button').at(0).simulate('click');
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            removeProductFromCart(product)
        );
    });

    it('should dispatch addProductToWishlist action', () => {
        const product = { id: 1, name: 'ASDASD', price: '20.00' };
        const wrapper = mountComponent(store, product);
        wrapper.find('button').at(1).simulate('click');
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            addProductToWishlist(product)
        );
    });

    it('should dispatch removeProductFromWishlist action', () => {
        const product = { id: 1, name: 'ASDASD', price: '20.00' };
        store.getState().wishlist.wishlistProducts.push(product);
        const wrapper = mountComponent(store, product);
        wrapper.find('button').at(1).simulate('click');
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            removeProductFromWishlist(product)
        );
    });
});
