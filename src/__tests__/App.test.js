import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders the App component with the Shopping List', () => {
  render(<App />);
  
  expect(screen.getByText(/Shopping List/i)).toBeInTheDocument();
  expect(screen.getByText(/Milk/i)).toBeInTheDocument();
  expect(screen.getByText(/Bread/i)).toBeInTheDocument();
  expect(screen.getByText(/Eggs/i)).toBeInTheDocument();
});
