import React from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    addProductToCart,
    removeProductFromCart,
    addProductToWishlist,
    removeProductFromWishlist
} from '../../actions';
import Style from './style';

export default product => {
    const dispatch = useDispatch();
    const { cartProducts } = useSelector(state => state.cart);
    const { wishlistProducts } = useSelector(state => state.wishlist);

    const addToCart = () => {
        dispatch(addProductToCart(product));
    };

    const removeFromCart = () => {
        dispatch(removeProductFromCart(product));
    };

    const addToWishlist = () => {
        dispatch(addProductToWishlist(product));
    };

    const removeFromWishlist = () => {
        dispatch(removeProductFromWishlist(product));
    };

    const isProductOnCart = () => (
        cartProducts.some(cartProduct => cartProduct.id === product.id)
    );

    const isProductOnWishlist = () => (
        wishlistProducts.some(wishlistProduct => wishlistProduct.id === product.id)
    );

    const getCartButton = () => (
        isProductOnCart() ?
            (
                <Style.CartButton type="button" onClick={removeFromCart}>
                    <Style.MinusIcon />
                    Remove from Cart
                </Style.CartButton>
            ) :
            (
                <Style.CartButton type="button" onClick={addToCart}>
                    <Style.PlusIcon />
                    Add to Cart
                </Style.CartButton>
            )
    );

    const getWishlistButton = () => (
        isProductOnWishlist() ?
            (
                <Style.WishlistButton className="selected" type="button" onClick={removeFromWishlist}>
                    <Style.HeartIcon />
                </Style.WishlistButton>
            ) :
            (
                <Style.WishlistButton type="button" onClick={addToWishlist}>
                    <Style.HeartIcon />
                </Style.WishlistButton>
            )
    );

    return (
        <Style.Item>
            <Style.Figure>
                <Style.Image src={product.imageUrl} />
                <Style.Caption>{product.name}</Style.Caption>
            </Style.Figure>
            <Style.Description>{product.description}</Style.Description>
            <Style.PriceTag>{`${product.currency}${product.price}`}</Style.PriceTag>
            <Style.ActionButtons>
                {getCartButton()}
                {getWishlistButton()}
            </Style.ActionButtons>
        </Style.Item>
    );
};
