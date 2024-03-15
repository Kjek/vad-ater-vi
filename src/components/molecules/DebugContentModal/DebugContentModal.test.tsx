import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import DebugContentModal from './DebugContentModal';

describe(DebugContentModal, () => {
  it('renders correctly', () => {
    const setDebugId = vi.fn();
    const { container } = render(
      <DebugContentModal
        debugData=''
        restaurantId='0'
        setDebugId={setDebugId}
      />
    );
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('displays value correctly', () => {
    const setDebugId = vi.fn();
    const { getByText, getByDisplayValue } = render(
      <DebugContentModal
        debugData='"Debug data"'
        restaurantId='0'
        setDebugId={setDebugId}
      />
    );

    const debugButton = getByDisplayValue('Debug');
    fireEvent.click(debugButton);
    expect(setDebugId).toHaveBeenCalledOnce();

    const textArea = getByText('Debug data');
    expect(textArea).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(
      <DebugContentModal debugData='' restaurantId='0' setDebugId={vi.fn()} />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
