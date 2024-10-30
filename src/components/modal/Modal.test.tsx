import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Modal from './Modal';
import Button from '../button/Button';

describe('Modal Component', () => {
  beforeEach(() => {
    // Mock the showModal and close methods
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  it('renders with default props', () => {
    render(
      <Modal isModalOpen={true}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('opens and closes the modal', () => {
    const { rerender } = render(
      <Modal isModalOpen={false}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

    rerender(
      <Modal isModalOpen={true}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.getByTestId('modal')).toBeInTheDocument();

    rerender(
      <Modal isModalOpen={false}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  it('renders overlay when withOverlay is true', () => {
    render(
      <Modal isModalOpen={true} withOverlay={true}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.queryByTestId('overlay')).toBeInTheDocument();
  });

  it('does not render overlay when withOverlay is false', () => {
    render(
      <Modal isModalOpen={true} withOverlay={false}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('closes modal on overlay click if not required', () => {
    const handleClose = vi.fn();
    render(
      <Modal isModalOpen={true} onClick={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );
    fireEvent.click(screen.getByTestId('overlay'));
    expect(handleClose).toHaveBeenCalled();
  });

  it('does not close modal on overlay click if required', () => {
    const handleClose = vi.fn();
    render(
      <Modal isModalOpen={true} onClick={handleClose} required={true}>
        <div>Modal Content</div>
      </Modal>
    );
    fireEvent.click(screen.getByTestId('overlay'));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('closes modal on button click if not required', async () => {
    const handleClose = vi.fn();
    render(
      <Modal isModalOpen={true} onClick={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByLabelText('Close modal'));
    await waitFor(() => expect(handleClose).toHaveBeenCalled());
  });

  it('does not render close button if required', () => {
    render(
      <Modal isModalOpen={true} required={true}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
  });
});