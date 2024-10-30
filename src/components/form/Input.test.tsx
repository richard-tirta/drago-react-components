import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';
import styles from './Input.module.scss';

describe('Input Component', () => {
  test('renders without crashing', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('applies error class when isError is true', () => {
    render(<Input isError={true} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass(styles.error);
  });

  test('does not apply error class when isError is false', () => {
    render(<Input isError={false} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).not.toHaveClass('error');
  });

  test('displays error message when isError is true', () => {
    const errorMessage = 'This is an error';
    render(<Input isError={true} error={errorMessage} />);
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  test('does not display error message when isError is false', () => {
    const errorMessage = 'This is an error';
    render(<Input isError={false} error={errorMessage} />);
    const errorElement = screen.queryByText(errorMessage);
    expect(errorElement).not.toBeInTheDocument();
  });
});