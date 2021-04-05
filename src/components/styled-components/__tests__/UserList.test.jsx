import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { UserList } from '../../taskone/UserList';


test('change value state via text input', async () => {
  const { container } = render(<UserList />); 
  const input = container.querySelector('input[type="text"]');
  const users = screen.getByTestId('users');    
  await waitFor(() => {
    expect(users).not.toBeEmptyDOMElement();
  });  
  expect(container).toMatchSnapshot();

  fireEvent.change(input, { target: { value: 'a' } });
  expect(input.value).toBe('a');       
});