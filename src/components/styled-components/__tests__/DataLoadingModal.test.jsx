import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import DataLoadingModal from '../../DataLoadingModal/DataLoadingModal';
import 'jest-styled-components';

it('DataLoadingModal renders correctly', async () => {
  const handleClose = jest.fn();
  const { container } = render(<DataLoadingModal modalCloseHandler={handleClose} />);
  expect(container).toMatchSnapshot();
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(handleClose).toHaveBeenCalledTimes(1);
});
