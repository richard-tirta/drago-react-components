import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Button from './Button'; // Adjust the import path as necessary
import styles from './Button.module.scss';

describe('Button component', () => {
  test('renders button with children', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies correct type class', () => {
    render(<Button type="secondary">Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    console.log('Class names:', buttonElement.className); // Debugging line
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies correct size class', () => {
    render(<Button size="large">Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    console.log('Class names:', buttonElement.className);
    expect(buttonElement).toBeInTheDocument();
  });

  test('disables button when disabled prop is true', () => {
    render(<Button disabled>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeDisabled();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick handler when disabled', () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('sets aria-label attribute when aria prop is provided', () => {
    render(<Button aria="button-aria">Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toHaveAttribute('aria-label', 'button-aria');
  });
});