import React from 'react';
import { render } from '@testing-library/react';
import { 
  ModalWrapper,
  ModalDialog,
  ModalBody,
  ModalHeader,
  ModalFooter 
 } from '@components/styled-components/Task';
import 'jest-styled-components';

it('ModalHeader renders correctly', () => {
  const { container } = render(<ModalHeader>Hello</ModalHeader>);
  expect(container).toMatchSnapshot();
});

it('ModalBody renders correctly', () => {
  const { container } = render(<ModalBody>World</ModalBody>);
  expect(container).toMatchSnapshot();
});

it('ModalFooter renders correctly', () => {
  const { container } = render(<ModalFooter>Today</ModalFooter>);
  expect(container).toMatchSnapshot();
});

it('Modal renders correctly with callback', () => {
  const handleClose = jest.fn();
  const { container } = render(
    <ModalWrapper onClick={handleClose}>
      <ModalDialog>
        <ModalHeader>Hello</ModalHeader>
        <ModalBody>World</ModalBody>
        <ModalFooter>Today</ModalFooter>
      </ModalDialog>
    </ModalWrapper>
  );
  expect(container).toMatchSnapshot();
});

    