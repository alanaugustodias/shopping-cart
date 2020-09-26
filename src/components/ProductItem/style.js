import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Heart } from '@styled-icons/boxicons-solid/Heart';

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
  width: 100%;
`;

const DefaultButton = styled.button`
    font-size: 16px;
    background-color: white;
    border: 1px solid #656565;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: #5125db;
      border: 1px solid #5125db;
      border-radius: 0;
      color: white;
      border-radius: 0;

      svg {
        color: white;
      }
    }
`;

const AddToCartButton = styled(DefaultButton)`
    width: 70%;
    border-right: 0;
  `;

const AddToWishlistButton = styled(DefaultButton)`
    width: 30%;
  `;

const CartIcon = styled(Plus)`
    color: #5125db;
    width: 24px;
    height: 24px;
  `;

const HeartIcon = styled(Heart)`
    color: #5125db;
    width: 20px;
    height: 20px;
  `;

const Figure = styled.figure`
  margin: 0;
  text-align: center;
`;

const Image = styled.img`
  width: 140px;
  height: 140px;
`;

const Item = styled.div`
  width: 180px;
  padding: 20px;

  &:hover {
    -webkit-box-shadow: 0px 0px 4px 0px rgba(194,194,194,.7);
    -moz-box-shadow: 0px 0px 4px 0px rgba(194,194,194,.7);
    box-shadow: 0px 0px 4px 0px rgba(194,194,194,.7);
  }
`;

const Caption = styled.figcaption`
  text-align: left;
  font-size: 18px;
  margin: 0;
`;

const Description = styled.p`
  margin: 5px 0;
  font-size: 14px;
  font-weight: 300;
`;

const PriceTag = styled.p`
  text-align: left;
  font-size: 24px;
  margin: 0 0 10px;
`;

export default {
  ActionButtons,
  AddToCartButton,
  AddToWishlistButton,
  CartIcon,
  HeartIcon,
  Figure,
  Image,
  Item,
  Caption,
  Description,
  PriceTag
};
