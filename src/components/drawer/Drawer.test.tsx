import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { DrawerProvider, useDrawerContext } from './DrawerContext';
import DrawerWithProvider from './Drawer';
import SubDrawer from './SubDrawer';
import Header from '../component_support/Header';
import Paragraph from '../component_support/Paragraph';

const TestComponent = () => {
  const { expandAll, setExpandAll, updateSubDrawerState } = useDrawerContext();
  
  return (
    <div>
      <span data-testid="expandAll">{expandAll.toString()}</span>
      <button onClick={() => setExpandAll(true)}>Expand All</button>
      <button onClick={() => updateSubDrawerState('drawer1', true)}>Open Drawer 1</button>
      <button onClick={() => updateSubDrawerState('drawer1', false)}>Close Drawer 1</button>
      <button onClick={() => updateSubDrawerState('drawer2', true)}>Open Drawer 2</button>
      <button onClick={() => updateSubDrawerState('drawer2', false)}>Close Drawer 2</button>
    </div>
  );
};

describe('Drawer Context', () => { 
  it('provides initial context values'), () => {
    render(
      <DrawerProvider>
        <TestComponent />
      </DrawerProvider>
    )

    expect(screen.getByTestId('expandAll')).toHaveTextContent('false');
  }

  it('updates expandAll value when setExpandAll is called'), () => {
    render(
      <DrawerProvider>
        <TestComponent />
      </DrawerProvider>
    )

    fireEvent.click(screen.getByText('Expand All'));
    expect(screen.getByTestId('expandAll')).toHaveTextContent('true');
  }

  it('updates subDrawerStates when updateSubDrawerState is called'), () => { 
    render(
      <DrawerProvider>
        <TestComponent />
      </DrawerProvider>
    )

    const openDrawerButton = screen.getByText('Open Drawer 1');
    fireEvent.click(openDrawerButton);
  }

  it('updates expandAll when all drawers are closed', () => {
    render(
      <DrawerProvider>
        <DrawerWithProvider>
          <SubDrawer id="drawer1">
            <Header>Header 1</Header>
            <Paragraph>Drawer 1 Content</Paragraph>
          </SubDrawer>
          <SubDrawer id="drawer2">
            <Header>Header 2</Header>
            <Paragraph>Drawer 2 Content</Paragraph>
          </SubDrawer>
        </DrawerWithProvider>
      </DrawerProvider>
    );

    const toggleDrawer1Button = screen.getByTestId('toggle-drawer1');
    const toggleDrawer2Button = screen.getByTestId('toggle-drawer2');
    const button = screen.getByRole('button', { name: /expand all/i }) as HTMLButtonElement;

    fireEvent.click(toggleDrawer1Button); // Open drawer1
    fireEvent.click(toggleDrawer2Button); // Open drawer2
    fireEvent.click(toggleDrawer1Button); // Close drawer1
    fireEvent.click(toggleDrawer2Button); // Close drawer2

    // Assuming expandAll is reflected in some way in the component
    expect(button).not.toBeDisabled();
  });

  
});


describe('Drawer Component', () => {
  test('renders children correctly', () => {
    render(
      <DrawerProvider>
        <div>Test Child</div>
      </DrawerProvider>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('renders and open each sub-drawer correctly'), () => { 
    render(
      <DrawerProvider>
        <DrawerWithProvider>
          <div>Test Child</div>
        </DrawerWithProvider>
      </DrawerProvider>
    );

    const openDrawer1Button = screen.getByText('Open Drawer 1');
    fireEvent.click(openDrawer1Button);
    // Add assertions to check if Drawer 1 is open

    const openDrawer2Button = screen.getByText('Open Drawer 2');
    fireEvent.click(openDrawer2Button);
    // Add assertions to check if Drawer 2 is open
  }

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

  test('Expand All button is disabled when expandAll is clcked', () => {
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