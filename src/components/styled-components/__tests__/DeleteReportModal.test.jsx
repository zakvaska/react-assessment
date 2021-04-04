import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import DeleteReportModal from '../../DeleteReportModal/DeleteReportModal';

it('DeleteReportsModal renders correctly', () => {
  const handleClose = jest.fn();
  const handleConfirm = jest.fn();
  const handleCancel = jest.fn();
  const { container } = render(
    <DeleteReportModal 
      modalCloseHandler={handleClose}
      onConfirm={handleConfirm}
      onCancel={handleCancel}  
    />
  );
  expect(container).toMatchSnapshot();
});
