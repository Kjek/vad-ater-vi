import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Modal from './Modal';

describe(Modal, () => {
  it('renders correctly', () => {
    const toggleOpen = vi.fn();
    const { container } = render(
      <Modal toggleOpen={toggleOpen}>
        <div>Test</div>
      </Modal>
    );
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('displays value correctly', () => {
    const toggleOpen = vi.fn();
    const { getByText } = render(
      <Modal toggleOpen={toggleOpen}>
        <button type='button' onClick={toggleOpen}>
          Toggle
        </button>
      </Modal>
    );

    const toggleButton = getByText('Toggle');
    fireEvent.click(toggleButton);
    expect(toggleOpen).toHaveBeenCalledOnce();
  });

  it('matches snapshot', () => {
    const defaultRender = render(
      <Modal toggleOpen={vi.fn()}>
        <div>Test</div>
      </Modal>
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
