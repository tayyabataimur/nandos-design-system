import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal from '../';

describe('Modal component', () => {
  it('renders correctly when isOpen is true', () => {
    render(
      <Modal heading="Test Modal" isOpen={true} onClose={() => {}} ariaLabelledby="test-heading">
        <div>Modal content</div>
      </Modal>
    );
    expect(screen.getByRole('dialog')).toMatchSnapshot();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(
      <Modal heading="Test Modal" isOpen={false} onClose={() => {}} ariaLabelledby="test-heading">
        <div>Modal content</div>
      </Modal>
    );
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(
      <Modal heading="Test Modal" isOpen={true} onClose={onCloseMock} ariaLabelledby="test-heading">
        <div>Modal content</div>
      </Modal>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });


  it('renders with disableOnClose set to true', () => {
    render(
      <Modal heading="Test Modal" isOpen={true} onClose={() => {}} ariaLabelledby="test-heading" disableOnClose={true}>
        <div>Modal content</div>
      </Modal>
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('renders without disableOnClose (defaults to false)', () => {
    render(
      <Modal heading="Test Modal" isOpen={true} onClose={() => {}} ariaLabelledby="test-heading">
        <div>Modal content</div>
      </Modal>
    );
    expect(screen.getByRole('button')).not.toBeDisabled();
  });
});
