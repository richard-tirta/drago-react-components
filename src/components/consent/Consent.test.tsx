import { render, screen, fireEvent } from '@testing-library/react';
import Consent from './Consent';
import { vi } from 'vitest';

describe('Consent Component', () => {
  beforeEach(() => {
    localStorage.clear();
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  test('renders correctly', () => {
    render(<Consent />);
    const modalText = screen.getByText(/We use cookies/i, { selector: 'h3' });
    expect(modalText).toBeInTheDocument();
  });

  test('initial state is correct', () => {
    render(<Consent />);
    expect(screen.getByText(/Allow cookies/i)).toBeInTheDocument();
    expect(screen.getByText(/Manage cookies/i)).toBeInTheDocument();
    expect(screen.getByText(/Decline all/i)).toBeInTheDocument();
  });

  test('allows cookies', () => {
    render(<Consent />);
    fireEvent.click(screen.getByText(/Allow cookies/i));
    expect(localStorage.getItem('cookieConsent')).toBe(JSON.stringify(['essential', 'analytics', 'marketing']));
  });

  test('manages cookies', () => {
    render(<Consent />);
    fireEvent.click(screen.getByTestId('Manage Cookies'));
    expect(screen.getByText(/Manage cookies/i, { selector: 'h3' })).toBeInTheDocument();
    expect(screen.getByText(/Essentials/i, { selector: 'h3' })).toBeInTheDocument();
    expect(screen.getByText(/Analytics/i, { selector: 'h3' })).toBeInTheDocument();
    expect(screen.getByText(/Marketing/i, { selector: 'h3' })).toBeInTheDocument();
  });

  test('declines cookies', () => {
    render(<Consent />);
    fireEvent.click(screen.getByText(/Decline all/i));
    expect(localStorage.getItem('cookieConsent')).toBe(JSON.stringify(['essential']));
  });

  test('manage cookies modal interactions', () => {
    render(<Consent />);
    fireEvent.click(screen.getByTestId('Manage Cookies'));
    
    const analyticsCheckbox = screen.getByTestId('analytics');
    const marketingCheckbox = screen.getByTestId('marketing');
    
    fireEvent.click(analyticsCheckbox);
    fireEvent.click(marketingCheckbox);
    
    fireEvent.click(screen.getByTestId("Save Cookies"));
    expect(localStorage.getItem('cookieConsent')).toBe(JSON.stringify(['essential', 'analytics', 'marketing']));
  });
});