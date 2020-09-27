import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    hideCartModal,
    removeProductFromCart,
    clearCart
} from '../../actions';
import Modal from '../Modal';
import Style from './style';

export default () => {
    const dispatch = useDispatch();
    const {
        cartProducts,
        totalOfProducts,
        totalOfCart,
        showModal
    } = useSelector(state => state.cart);

    const clearCartClick = () => {
        dispatch(clearCart());
    };

    const removeProductClick = product => {
        dispatch(removeProductFromCart(product));
    };

    const getProductsRows = () => (
        cartProducts.map(product => (
            <Style.Row key={product.id}>
                <Style.ProductColumn width={300}>
                    <Style.ProductImage src={product.imageUrl} />
                    {product.name}
                </Style.ProductColumn>
                <Style.Column width={80} align="center">
                    {product.price}
                </Style.Column>
                <Style.Column width={80} align="center">
                    <Style.RemoveProductButton type="button" onClick={() => removeProductClick(product)}>
                        <Style.TrashIcon />
                    </Style.RemoveProductButton>
                </Style.Column>
            </Style.Row>
        ))
    );

    const getProductsWrapper = () => (
        <Style.ProductsWrapper id="productsWrapper">
            <Style.ClearCartButton
                type="button"
                onClick={clearCartClick}
                id="clearCartButton"
            >
                <Style.TrashIcon />
                Clear Cart
            </Style.ClearCartButton>
            <Style.Table>
                <thead>
                    <Style.Row>
                        <Style.HeadColumn>Product</Style.HeadColumn>
                        <Style.HeadColumn align="center">Price</Style.HeadColumn>
                        <Style.HeadColumn align="center">Remove</Style.HeadColumn>
                    </Style.Row>
                </thead>
                <tbody>
                    {getProductsRows()}
                </tbody>
                <tfoot>
                    <Style.Row>
                        <Style.HeadColumn colSpan={2} align="right">Total</Style.HeadColumn>
                        <Style.HeadColumn width={80} align="center">{totalOfCart}</Style.HeadColumn>
                    </Style.Row>
                </tfoot>
            </Style.Table>
        </Style.ProductsWrapper>
    );

    const getEmptyCartMessage = () => (
        <h2 id="emptyCartTitle">Your shopping cart is empty :(</h2>
    );

    const getModalContent = () => (
        totalOfProducts ? getProductsWrapper() : getEmptyCartMessage()
    );

    const closeCart = () => {
        dispatch(hideCartModal());
    };

    return (
        <Modal show={showModal} onClose={closeCart}>
            {getModalContent()}
        </Modal>
    );
};
