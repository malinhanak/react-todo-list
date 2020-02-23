import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import AddTodo from './AddTodo';

describe('<App />', () => {
  it('should start with empty string in input', async () => {
    const { getByTestId } = render(<AddTodo />);
    // Arrange
    const input = await waitForElement(() => getByTestId('add-input'));

    // Act

    // Assert
    expect(input.value).toBe('');
  });

  it('should update input value onChange', async () => {
    const { getByTestId } = render(<AddTodo />);
    // Arrange
    const input = await waitForElement(() => getByTestId('add-input'));

    // Act
    fireEvent.change(input, { target: { value: 'Do homework' } });

    // Assert
    expect(input.value).toBe('Do homework');
  });
});
