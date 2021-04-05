import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { Spinner, SpinnerWrapper, CenteredLabel } from '../styled-components/Task';

const DataLoadingModal = ({ modalCloseHandler }) => (
  <Modal modalCloseHandler={modalCloseHandler} color="#4b8ed2">
    <SpinnerWrapper>
      <Spinner data-testid="modal" />
    </SpinnerWrapper>
    <CenteredLabel>Data is loading</CenteredLabel>
  </Modal>
);

DataLoadingModal.propTypes = {
  modalCloseHandler: PropTypes.func.isRequired
};

export default DataLoadingModal;
