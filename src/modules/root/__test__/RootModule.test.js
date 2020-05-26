import { render } from '@testing-library/react';
import React from 'react';

import RootModule from '../RootModule';


test('renders learn react link', () => {
  const { getByText } = render(<RootModule />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
