import React, { useEffect } from 'react';
import { ModalDialog, ModalWrapper } from '../styled-components/Task';

const Modal = ({ modalCloseHandler, children, color }) => {
  const handleEscapeButtonPress = (e) => {
    if (e.key === 'Escape') modalCloseHandler();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeButtonPress);
    return () => {
      window.removeEventListener('keydown', handleEscapeButtonPress);
    };
  }, []);

  const onClose = (e) => {
    if (e.target === e.currentTarget) modalCloseHandler();
  };

  return (
    <ModalWrapper onClick={onClose}>
      <ModalDialog inputColor={color}>
        {children}
      </ModalDialog>
    </ModalWrapper>
  );
};

export default Modal;
