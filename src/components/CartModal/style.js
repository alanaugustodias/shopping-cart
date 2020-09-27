import styled from 'styled-components';
import { Trash } from '@styled-icons/boxicons-regular/Trash';
import Style from '../../style';

const ProductsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Table = styled.table`
    width: 100%;
`;

const Row = styled.tr`
    padding: 10px;
    height: 40px;
`;

const HeadColumn = styled.th`
    text-align: ${props => props.align || 'left'};
`;

const Column = styled.td`
    border-bottom: 1px solid ${Style.GlobalColors.mediumGrey};
    text-align: ${props => props.align || 'left'};
`;

const ProductColumn = styled(Column)`
    display: flex;
    align-items: center;
`;

const ProductImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`;

const ClearCartButton = styled.button`
    align-self: flex-end;
    display: flex;
    justify-content: space-evenly;
    width: 150px;
    padding: 8px;
    background-color: white;
    border: 1px solid ${Style.GlobalColors.grey};
    font-size: 16px;
    line-height: 26px;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
        background-color: ${Style.GlobalColors.grey};
        color: white;

        svg {
            color: white;
        }
    }

    &:focus {
        outline: none;
    }
`;

const RemoveProductButton = styled.button`
    padding: 4px;
    background-color: white;
    border: 1px solid ${Style.GlobalColors.grey};
    cursor: pointer;

    &:hover {
        background-color: ${Style.GlobalColors.grey};
        color: white;

        svg {
            color: white;
        }
    }

    &:focus {
        outline: none;
    }
`;

const TrashIcon = styled(Trash)`
    color: ${Style.GlobalColors.grey};
    width: 24px;
    height: 24px;
`;

export default {
    ProductsWrapper,
    Table,
    Row,
    HeadColumn,
    Column,
    ProductColumn,
    ProductImage,
    ClearCartButton,
    RemoveProductButton,
    TrashIcon
};
