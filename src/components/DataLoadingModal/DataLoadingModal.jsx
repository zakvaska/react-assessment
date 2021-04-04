import React from 'react';
import Modal from '../Modal/Modal';
import { Spinner, SpinnerWrapper, CenteredLabel } from '../styled-components/Task';

const DataLoadingModal = ({ modalCloseHandler }) => (
  <Modal modalCloseHandler={modalCloseHandler} color="#4b8ed2">
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
    <CenteredLabel>Data is loading</CenteredLabel>
  </Modal>
);

export default DataLoadingModal;
