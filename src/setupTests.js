// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '@testing-library/react'; // library 
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);  // Render method ( app, )

                      // ( kun ma pathaunee ho ?? )
  const linkElement = getByText(/learn react/i);  // Get by text
  expect(linkElement).toBeInTheDocument();

  // Expect().toBeInTheDocument().
});

