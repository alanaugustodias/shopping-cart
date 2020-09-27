import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Header from '.';
import {
    showCartModal
} from '../../actions';

function mountComponent(store) {
    return mount(<Provider store={store}><Header /></Provider>);
}

describe('Header Unit Tests', () => {
    const initialState = {
        cart: {
            cartProducts: [],
            totalOfProducts: 0
        },
        wishlist: {
            wishlistProducts: [],
            totalOfProducts: 0
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
        expect(wrapper.find('#wishlistCounter').at(0).text()).toBe('0');
        expect(wrapper.find('#cartCounter').at(0).text()).toBe('0');
    });

    it('should increment Wishlist Counter', () => {
        store.getState().wishlist.totalOfProducts = 1;
        const wrapper = mountComponent(store);
        expect(wrapper.find('#wishlistCounter').at(0).text()).toBe('1');
    });

    it('should increment Cart Counter', () => {
        store.getState().cart.totalOfProducts = 1;
        const wrapper = mountComponent(store);
        expect(wrapper.find('#cartCounter').at(0).text()).toBe('1');
    });

    it('should Open Cart', () => {
        const wrapper = mountComponent(store);
        wrapper.find('#openCartButton').at(0).simulate('click');
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            showCartModal()
        );
    });
});
