import React from 'react';
import { mount } from 'enzyme';
import Footer from '.';

describe('Footer Unit Tests', () => {
    it('should render Component', () => {
        const wrapper = mount(<Footer />);
        expect(wrapper.length).toBe(1);
    });
});
