import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
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
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(handleClose).toHaveBeenCalledTimes(1);
  const agree = screen.getByText('Delete all');
  const disagree = screen.getByText('Cancel');
  expect(agree).toHaveAttribute('disabled');
  fireEvent.click(agree);
  expect(handleConfirm).toHaveBeenCalledTimes(0);
  fireEvent.click(disagree);
  expect(handleCancel).toHaveBeenCalledTimes(1);
  const input = container.querySelector('input[type="text"]');
  const select = container.querySelector('select');
  fireEvent.change(input, { target: { value: 'a' } });
  expect(input.value).toBe('a'); 
  expect(agree).toHaveAttribute('disabled');
  fireEvent.change(input, { target: { value: 'Delete' } });
  fireEvent.change(select, { target: { value: '1' } });
  expect(agree).not.toHaveAttribute('disabled');
  fireEvent.click(agree);
  expect(handleConfirm).toHaveBeenCalledTimes(1);
});
