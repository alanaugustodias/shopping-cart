import React from 'react';
import { useDispatch } from 'react-redux';
import {
    addProductToCart,
    addProductToWishlist
} from '../../actions';
import Style from './style';

export default product => {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(addProductToCart(product.name));
    };

    const addToWishlist = () => {
        dispatch(addProductToWishlist(product.name));
    };

    return (
        <Style.Item>
            <Style.Figure>
                <Style.Image src={product.imageUrl} />
                <Style.Caption>{product.name}</Style.Caption>
            </Style.Figure>
            <Style.Description>{product.description}</Style.Description>
            <Style.PriceTag>{`${product.currency}${product.price}`}</Style.PriceTag>
            <Style.ActionButtons>
                <Style.AddToCartButton type="button" onClick={addToCart}>
                    <Style.CartIcon />
                    Add to Cart
                </Style.AddToCartButton>
                <Style.AddToWishlistButton type="button" onClick={addToWishlist}>
                    <Style.HeartIcon />
                </Style.AddToWishlistButton>
            </Style.ActionButtons>
        </Style.Item>
    );
};
