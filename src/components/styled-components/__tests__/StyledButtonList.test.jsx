import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ButtonList, StyledButton } from '@components/styled-components/Task';
import 'jest-styled-components';

it('ButtonList renders correctly', () => {
  const { container } = render(
  <ButtonList direction="column" minWidth="17rem">
    <StyledButton type="button">Data loading modal</StyledButton>
    <StyledButton type="button">Delete files modal</StyledButton>
    <StyledButton type="button">Delete report and history modal</StyledButton>
  </ButtonList>
  );
  expect(container).toMatchSnapshot();
});
