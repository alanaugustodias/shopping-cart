import React from 'react';
import Style from './style';

export default ({
    children,
    show,
    onClose
}) => {
    const handleCloseClick = event => {
        if (onClose) {
            onClose(event);
        }
    };

    return (
        <Style.ModalContainer show={show}>
            <Style.ModalBackdrop />
            <Style.Modal>
                <Style.ModalHeader>
                    <Style.ModalExitButton onClick={handleCloseClick}>
                        <Style.CloseIcon />
                    </Style.ModalExitButton>
                </Style.ModalHeader>
                <Style.ModalBody>
                    {children}
                </Style.ModalBody>
            </Style.Modal>
        </Style.ModalContainer>
    );
};
