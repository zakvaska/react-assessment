import React from 'react';
import { render } from '@testing-library/react';
import { 
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
