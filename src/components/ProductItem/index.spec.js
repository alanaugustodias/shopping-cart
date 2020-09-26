import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import ProductItem from '.';
import { addProductToCart } from '../../actions/cart';

function mountComponent(store, product) {
    return mount(<Provider store={store}><ProductItem {...product} /></Provider>);
}

describe('ProductItem Unit Tests', () => {
    const initialState = {
        products: {
            productsList: [
                { id: 1, name: 'Test 1' },
                { id: 2, name: 'Test 2' },
                { id: 3, name: 'Test 3' },
                { id: 4, name: 'Test 4' }
            ]
        },
        cart: {
            cartProducts: []
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
        expect(wrapper.find('button').length).toBe(1);
    });

    it('should add Product to Cart', () => {
        const product = { id: 1, name: 'ASDASD' };
        const wrapper = mountComponent(store, product);
        wrapper.find('button').simulate('click');
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            addProductToCart(product)
        );
    });
});
