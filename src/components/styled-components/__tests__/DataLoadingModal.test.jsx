import React from 'react';
import { render } from '@testing-library/react';
import DataLoadingModal from '../../DataLoadingModal/DataLoadingModal';
import 'jest-styled-components';

it('DataLoadingModal renders correctly', () => {
  const handleClose = jest.fn();
  const { container } = render(<DataLoadingModal modalCloseHandler={handleClose}/>);
  expect(container).toMatchSnapshot();
});
