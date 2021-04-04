import React from 'react';
import { render } from '@testing-library/react';
import { StyledSelect } from '@components/styled-components/Task';
import 'jest-styled-components';

it('StyledSelect renders correctly', () => {
  const { container } = render(<StyledSelect marginTop="5rem" marginBottom="5rem" />);
  expect(container).toMatchSnapshot();
});

it('StyledSelect renders correctly', () => {
  const { container } = render(<StyledSelect />);
  expect(container).toMatchSnapshot();
});