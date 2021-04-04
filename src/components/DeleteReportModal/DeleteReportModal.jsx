import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import {
  ModalBody,
  ModalHeader,
  ModalFooter,
  ButtonList,
  StyledButton,
  StyledSelect,
  TextInput
} from '../styled-components/Task';

const DeleteReportModal = ({ modalCloseHandler, onConfirm, onCancel }) => {
  const [textInputValue, setTextInputValue] = useState('');
  const [selectedReport, setSelectedReport] = useState([]);
  const [canDelete, setCanDelete] = useState(false);

  const changeSelection = (e) => {
    setSelectedReport(e.target.value);
  };

  const changeValue = (e) => {
    setTextInputValue(e.target.value);
  };

  const handleDeletion = () => {
    console.log(`Rerort number ${selectedReport} will be deleted`);
    onConfirm(selectedReport);
  };

  useEffect(() => {
    if (textInputValue === 'Delete' && !Array.isArray(selectedReport)) {
      setCanDelete(true);
    } else {
      setCanDelete(false);
    }
  }, [textInputValue, selectedReport]);

  return (
    <Modal modalCloseHandler={modalCloseHandler}>
      <ModalHeader>
        <FontAwesomeIcon icon={faExclamationTriangle} color="#d0011b" />
        <div>Are you sure you want to delete this report and its history?</div>
      </ModalHeader>
      <ModalBody>
        If you delete the&nbsp;
        <strong>Executive metrics</strong>
        &nbsp;report, you will also delete the associated history:
        <StyledSelect multiple onChange={changeSelection}>
          <option value="1">January 2020</option>
          <option value="2">February 2020</option>
          <option value="3">March 2020</option>
          <option value="4">April 2020</option>
          <option value="5">May 2020</option>
          <option value="6">June 2020</option>
          <option value="7">Jule 2020</option>
          <option value="8">August 2020</option>
          <option value="9">September 2020</option>
          <option value="10">October 2020</option>
          <option value="11">November 2020</option>
          <option value="12">December 2020</option>
        </StyledSelect>
        Please type the word &apos;Delete&apos; to remove the&nbsp;
        <strong>Executive metrics</strong>
        &nbsp;report and its associated history:
        <TextInput type="text" onChange={changeValue} />
      </ModalBody>
      <ModalFooter>
        <ButtonList justify="flex-end" marginRight="1rem">
          <StyledButton type="button" onClick={handleDeletion} disabled={!canDelete}>Delete all</StyledButton>
          <StyledButton type="button" onClick={onCancel}>Cancel</StyledButton>
        </ButtonList>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteReportModal;
