import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import ProductsList from '.';
import ProductItem from '../ProductItem';

function mountComponent(store) {
    return mount(<Provider store={store}><ProductsList /></Provider>);
}

describe('ProductsList Unit Tests', () => {
    const initialState = {
        products: {
            productsList: [
                {
                    id: 1,
                    name: 'Test',
                    price: '20',
                    imageUrl: 'url',
                    description: 'Test'
                },
                {
                    id: 2,
                    name: 'Test',
                    price: '20',
                    imageUrl: 'url',
                    description: 'Test'
                },
                {
                    id: 3,
                    name: 'Test',
                    price: '20',
                    imageUrl: 'url',
                    description: 'Test'
                },
                {
                    id: 4,
                    name: 'Test',
                    price: '20',
                    imageUrl: 'url',
                    description: 'Test'
                }
            ]
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

    it('should render all ProductItems', () => {
        const wrapper = mountComponent(store);
        expect(wrapper.find(ProductItem).length).toBe(4);
    });
});
