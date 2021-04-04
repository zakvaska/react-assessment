import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import {
  ModalBody,
  ModalHeader,
  ModalFooter,
  ButtonList,
  StyledButton
} from '../styled-components/Task';

const DeleteFilesModal = ({ modalCloseHandler, onConfirm, onCancel }) => (
  <Modal modalCloseHandler={modalCloseHandler}>
    <ModalHeader>
      <FontAwesomeIcon icon={faExclamationTriangle} color="#d0011b" />
      <div>Are you sure you want to delete all of your files?</div>
    </ModalHeader>
    <ModalBody>This action can not be undone.</ModalBody>
    <ModalFooter>
      <ButtonList justify="flex-end" marginRight="1rem">
        <StyledButton type="button" onClick={onConfirm}>Yes</StyledButton>
        <StyledButton type="button" onClick={onCancel}>No</StyledButton>
      </ButtonList>
    </ModalFooter>
  </Modal>
);

DeleteFilesModal.propTypes = {
  modalCloseHandler: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default DeleteFilesModal;
