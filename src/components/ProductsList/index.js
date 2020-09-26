import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../ProductItem';
import Style from './style';

export default () => {
    const { productsList } = useSelector(state => state.products);

    const getProductsList = () => (
        productsList.map(product => <ProductItem key={product.id} {...product} />)
    );

    return (
        <Style.Container>
            {getProductsList()}
        </Style.Container>
    );
};
