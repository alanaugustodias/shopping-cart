import styled from 'styled-components';
import { X } from '@styled-icons/boxicons-regular/X';
import Style from '../../style';

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    opacity: ${props => props.show ? 1 : 0};
    z-index: 1;
    transition: visibility 0.1s ease-in-out,opacity 0.1s ease-in-out;
`;

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`;

const Modal = styled.div`
    width: auto;
    z-index: 2;
    background-color: white;
    -webkit-box-shadow: 0px 0px 4px 0px rgba(100, 100, 100, 1);
    -moz-box-shadow: 0px 0px 4px 0px rgba(100, 100, 100, 1);
    box-shadow: 0px 0px 4px 0px rgba(100, 100, 100, 1);
`;

const ModalHeader = styled.header`
    width: 100%;
    position: relative;
    min-height: 30px;
`;

const ModalExitButton = styled.button`
    background-color: white;
    border: none;
    padding: 8px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;

    &:hover {
      background-color: ${Style.GlobalColors.mediumGrey};
    }

    &:focus {
      outline: none;
    }
`;

const CloseIcon = styled(X)`
    color: ${Style.GlobalColors.grey};
    width: 30px;
    height: 30px;
  `;

const ModalBody = styled.section`
    padding: 30px;
`;

export default {
    ModalContainer,
    ModalBackdrop,
    ModalHeader,
    ModalExitButton,
    CloseIcon,
    ModalBody,
    Modal
};
