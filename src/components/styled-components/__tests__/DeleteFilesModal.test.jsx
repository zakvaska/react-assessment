import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DeleteFilesModal from '../../DeleteFilesModal/DeleteFilesModal';
import 'jest-styled-components';

it('DeleteFilesModal renders correctly', () => {
  const handleClose = jest.fn();
  const handleConfirm = jest.fn();
  const handleCancel = jest.fn();
  const { container } = render(
    <DeleteFilesModal 
      modalCloseHandler={handleClose}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
  expect(container).toMatchSnapshot();
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(handleClose).toHaveBeenCalledTimes(1);
  const agree = screen.getByText('Yes');
  const disagree = screen.getByText('No');
  fireEvent.click(agree);
  expect(handleConfirm).toHaveBeenCalledTimes(1);
  fireEvent.click(disagree);
  expect(handleCancel).toHaveBeenCalledTimes(1);
});
