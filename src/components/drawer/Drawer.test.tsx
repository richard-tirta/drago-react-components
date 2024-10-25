import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { DrawerProvider, DrawerContext } from './DrawerContext';
import DrawerWithProvider from './Drawer';

interface CustomDrawerProviderProps {
  value: any;
  children: React.ReactNode;
}

const CustomDrawerProvider: React.FC<CustomDrawerProviderProps> = ({ value, children }) => {
  return (
    <DrawerContext.Provider value={value}>
      {children}
    </DrawerContext.Provider>
  );
};

describe('Drawer Component', () => {
  test('renders children correctly', () => {
    render(
      <DrawerProvider>
        <div>Test Child</div>
      </DrawerProvider>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  test('renders Expand All button', () => {
    render(
      <DrawerProvider>
        <DrawerWithProvider>
          <div>Test Child</div>
        </DrawerWithProvider>
      </DrawerProvider>
    );
    expect(screen.getByRole('button', { name: /expand all/i })).toBeInTheDocument();
  });

  test('Expand All button is disabled when expandAll is true', () => {
    render(
      <DrawerProvider>
        <DrawerWithProvider>
          <div>Test Child</div>
        </DrawerWithProvider>
      </DrawerProvider>
    );
    const button = screen.getByRole('button', { name: /expand all/i }) as HTMLButtonElement;
    fireEvent.click(button);
    expect(button).toBeDisabled();
  });

});