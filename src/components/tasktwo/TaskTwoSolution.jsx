import React, { useState } from 'react';
import {
  Content,
  ButtonList,
  Heading,
  Task,
  StyledButton
} from '@components/styled-components/Task';
import DataLoadingModal from '../DataLoadingModal/DataLoadingModal';
import DeleteFilesModal from '../DeleteFilesModal/DeleteFilesModal';
import DeleteReportModal from '../DeleteReportModal/DeleteReportModal';

const TaskTwoSolution = () => {
  const [dataLoadingModalShow, setDataLoadingModalShow] = useState(false);
  const [deleteFilesModalShow, setDeleteFilesModalShow] = useState(false);
  const [deleteReportModalShow, setDeleteReportModalShow] = useState(false);

  const handleReportDeletionConfirm = (reportId) => {
    setDeleteReportModalShow(false);
    console.log(`Start deleting report number ${reportId}`);
  };

  const handleReportDeletionCancel = () => {
    setDeleteReportModalShow(false);
    console.log('Cancel deleting selected report');
  };

  const handleFileDeletionConfirm = () => {
    setDeleteFilesModalShow(false);
    console.log('Start deleting all files');
  };

  const handleFileDeletionCancel = () => {
    setDeleteFilesModalShow(false);
    console.log('Cancel deleting all files');
  };

  return (
    <>
      {dataLoadingModalShow
      && <DataLoadingModal modalCloseHandler={() => { setDataLoadingModalShow(false); }} />}
      {deleteFilesModalShow && (
      <DeleteFilesModal
        modalCloseHandler={() => { setDeleteFilesModalShow(false); }}
        onConfirm={handleFileDeletionConfirm}
        onCancel={handleFileDeletionCancel}
      />
      )}
      {deleteReportModalShow && (
      <DeleteReportModal
        modalCloseHandler={() => { setDeleteReportModalShow(false); }}
        onConfirm={handleReportDeletionConfirm}
        onCancel={handleReportDeletionCancel}
      />
      )}
      <Task>
        <Heading>Task Two Solution</Heading>
        <Content>
          <ButtonList direction="column" minWidth="17rem">
            <StyledButton type="button" onClick={() => { setDataLoadingModalShow(true); }}>Data loading modal</StyledButton>
            <StyledButton type="button" onClick={() => { setDeleteFilesModalShow(true); }}>Delete files modal</StyledButton>
            <StyledButton type="button" onClick={() => { setDeleteReportModalShow(true); }}>Delete report and history modal</StyledButton>
          </ButtonList>
        </Content>
      </Task>
    </>
  );
};

export default TaskTwoSolution;
