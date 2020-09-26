import React from 'react';
import { useSelector } from 'react-redux';
import Style from './style';

const companyLogo = "https://fuel.ventures/wp-content/uploads/2019/11/Moteefe_Logo.png";

export default () => {
    const { totalOfProducts: totalCart } = useSelector(state => state.cart);
    const { totalOfProducts: totalWishlit } = useSelector(state => state.wishlist);
    return (
        <Style.Header>
            <a href="https://moteefe.com/" target="blank">
                <Style.Logo src={companyLogo} />
            </a>
            <Style.Navbar>
                <Style.NavbarItem>
                    <Style.CartIcon />
                    <Style.ProductsLength>{totalCart}</Style.ProductsLength>
                </Style.NavbarItem>
                <Style.NavbarItem>
                    <Style.WishlistIcon />
                    <Style.ProductsLength>{totalWishlit}</Style.ProductsLength>
                </Style.NavbarItem>
            </Style.Navbar>
        </Style.Header>
    );
};
