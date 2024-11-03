import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Item from '../components/Item';

test('renders an Item component with the correct name and category', () => {
  const testName = 'Bananas';
  const testCategory = 'Fruit';

  render(<Item name={testName} category={testCategory} />);

  expect(screen.getByText(testName)).toBeInTheDocument();

  expect(screen.getByText(testCategory)).toBeInTheDocument();
});

