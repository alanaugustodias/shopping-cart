import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
import Modal from '.';

describe('Modal Unit Tests', () => {
    it('should render Component', () => {
        const wrapper = mount(<Modal />);
        expect(wrapper.length).toBe(1);
        expect(wrapper).toHaveStyleRule('visibility', 'hidden');
    });

    it('should open Modal', () => {
        const wrapper = mount(<Modal show />);
        expect(wrapper).toHaveStyleRule('visibility', 'visible');
    });

    it('should handle onClose', () => {
        const onCloseFn = jest.fn();
        const wrapper = mount(<Modal onClose={onCloseFn} />);
        wrapper.find('button').at(0).simulate('click');
        expect(onCloseFn).toHaveBeenCalledTimes(1);
    });
});
