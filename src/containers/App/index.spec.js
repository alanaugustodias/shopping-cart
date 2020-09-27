import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import App from '.';

function mountComponent(store, product) {
    return mount(<Provider store={store}><App /></Provider>);
}

describe('ProductItem Unit Tests', () => {
    const initialState = {
        products: {
            productsList: [{ id: 1, name: 'Test' }]
        },
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
    });
});
