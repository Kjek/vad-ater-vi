import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import ThemeButton from './ThemeButton';

vi.mock('@radix-ui/react-icons', async (importOriginal) => ({
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  ...(await importOriginal<typeof import('@radix-ui/react-icons')>()),
  SunIcon: () => <div>SunIcon</div>,
}));

describe(ThemeButton, () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ThemeButton data-testid={'theme.button'} />
    );
    const themeButton = getByTestId('theme.button');
    expect(themeButton).toBeInTheDocument();
    expect(themeButton).toBeVisible();
  });

  it('displays correctly', () => {
    const { getByTestId } = render(
      <ThemeButton data-testid={'theme.button'} />
    );
    const themeButton = getByTestId('theme.button');
    expect(themeButton).toBeVisible();
    expect(themeButton).toHaveTextContent('SunIcon');
  });
});
