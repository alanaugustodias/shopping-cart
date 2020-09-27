import styled from 'styled-components';
import { Cart } from '@styled-icons/boxicons-regular/Cart';
import { Heart } from '@styled-icons/boxicons-regular/Heart';
import Style from '../../style';

const Header = styled.header`
  height: 80px;
  background-color: ${Style.GlobalColors.lightGrey};
  -webkit-box-shadow: 0px 2px 4px 0px rgba(176,176,176,1);
  -moz-box-shadow: 0px 2px 4px 0px rgba(176,176,176,1);
  box-shadow: 0px 2px 4px 0px rgba(176,176,176,1);
`;

const Logo = styled.img`
  width: 150px;
  height: 40px;
  padding: 15px 20px;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;
  height: 100%;
  float: right;
  padding: 0 40px;
`;

const NavbarItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 60px;
  height: 100%;
  cursor: pointer;
`;

const CartIcon = styled(Cart)`
    color: ${Style.GlobalColors.primary};
    width: 36px;
    height: 36px;
  `;

const WishlistIcon = styled(Heart)`
    color: ${Style.GlobalColors.primary};
    width: 36px;
    height: 36px;
  `;

const ProductsLength = styled.div`
  position: absolute;
  bottom: 15px;
  right: 5px;
  background-color: ${Style.GlobalColors.primary};
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 14px;
  text-align: center;
  line-height: 24px;
`;

export default {
    CartIcon,
    Header,
    Logo,
    Navbar,
    NavbarItem,
    ProductsLength,
    WishlistIcon,
};
