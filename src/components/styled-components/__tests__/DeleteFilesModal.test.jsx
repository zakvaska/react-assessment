import React from 'react';
import { render } from '@testing-library/react';
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
});
