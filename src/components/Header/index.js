import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showCartModal } from '../../actions';
import Style from './style';

const companyLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Font_Awesome_5_brands_react.svg/1200px-Font_Awesome_5_brands_react.svg.png';

export default () => {
    const dispatch = useDispatch();
    const { totalOfProducts: totalCart } = useSelector(state => state.cart);
    const { totalOfProducts: totalWishlit } = useSelector(state => state.wishlist);

    const openCart = () => {
        dispatch(showCartModal());
    };

    return (
        <Style.Header>
            <a href="https://reactjs.org/" target="blank">
                <Style.Logo src={companyLogo} />
            </a>
            <Style.Navbar>
                <Style.NavbarItem>
                    <Style.WishlistIcon />
                    <Style.ProductsLength id="wishlistCounter">
                        {totalWishlit}
                    </Style.ProductsLength>
                </Style.NavbarItem>
                <Style.NavbarItem onClick={openCart} id="openCartButton">
                    <Style.CartIcon />
                    <Style.ProductsLength id="cartCounter">
                        {totalCart}
                    </Style.ProductsLength>
                </Style.NavbarItem>
            </Style.Navbar>
        </Style.Header>
    );
};
