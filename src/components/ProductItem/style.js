import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { Minus } from '@styled-icons/boxicons-regular/Minus';
import { Heart } from '@styled-icons/boxicons-solid/Heart';
import Style from '../../style';

const Item = styled.div`
    width: 220px;
    padding: 20px;

    &:hover {
        -webkit-box-shadow: 0px 0px 4px 0px rgba(194,194,194,.7);
        -moz-box-shadow: 0px 0px 4px 0px rgba(194,194,194,.7);
        box-shadow: 0px 0px 4px 0px rgba(194,194,194,.7);
    }
`;

const Figure = styled.figure`
    margin: 0;
    text-align: center;
`;

const Image = styled.img`
    width: 140px;
    height: 140px;
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

const ActionButtons = styled.div`
    display: flex;
    justify-content: space-between;
    height: 36px;
    width: 100%;
`;

const DefaultButton = styled.button`
    font-size: 16px;
    background-color: white;
    border: 1px solid ${Style.GlobalColors.grey};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      outline: none;
    }

    &:hover,
    &.selected {
      background-color: ${Style.GlobalColors.primary};
      border: 1px solid ${Style.GlobalColors.primary};
      border-radius: 0;
      color: white;
      border-radius: 0;

      svg {
        color: white;
      }
    }
`;

const CartButton = styled(DefaultButton)`
    width: 80%;
    border-right: 0;
  `;

const WishlistButton = styled(DefaultButton)`
    width: 20%;
  `;

const PlusIcon = styled(Plus)`
    color: ${Style.GlobalColors.primary};
    width: 24px;
    height: 24px;
  `;

const MinusIcon = styled(Minus)`
    color: ${Style.GlobalColors.primary};
    width: 24px;
    height: 24px;
`;

const HeartIcon = styled(Heart)`
    color: ${Style.GlobalColors.primary};
    width: 20px;
    height: 20px;
  `;

export default {
    ActionButtons,
    CartButton,
    WishlistButton,
    PlusIcon,
    MinusIcon,
    HeartIcon,
    Figure,
    Image,
    Item,
    Caption,
    Description,
    PriceTag
};
