import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('Applications renders correctly', async () => {
    const { getByTestId } = render(<App />);
    // Arrange
    const app = await waitForElement(() => getByTestId('application'));

    // Act

    // Assert
    expect(app).toHaveTextContent(/In my Todo list/i);
  });
});
