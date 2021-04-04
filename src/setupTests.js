import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';
// import { render, unmountComponentAtNode } from "react-dom";
// import { act as domAct } from "react-dom/test-utils";
// import TestRenderer, { act as renderAct} from 'react-test-renderer';
import DataLoadingModal from './components/DataLoadingModal/DataLoadingModal';

import { UserList, Users } from './components/taskone/UserList';

afterEach(cleanup);
test('change value state via text input', () => {
  act(() => {
    const { container } = render(<UserList />);  
  })    
  const input = container.querySelector('input[type="text"]');
  act(() => {
    fireEvent.change(input, { target: { value: 'a' } });
  });
  expect(input.value).toBe('a');  
});

// it('renders correctly', () => {
//     const { container } = render(<Users />);
//     expect(container).toMatchSnapshot();
// });

// test('UserList renders correctly', () => {
//   const { container } = render(<UserList />);
//   expect(container).toMatchSnapshot();
// });


