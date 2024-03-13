import { CopyIcon, Cross1Icon } from '@radix-ui/react-icons';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import IconButton from './IconButton';

vi.mock('@radix-ui/react-icons', async (importOriginal) => ({
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  ...(await importOriginal<typeof import('@radix-ui/react-icons')>()),
  CopyIcon: () => <div>CopyIcon</div>,
  Cross1Icon: () => <div>Cross1Icon</div>,
}));

describe(IconButton, () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <IconButton data-testid={'icon.button'} variant='cancel' />
    );
    const button = getByTestId('icon.button') as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  it('displays cancel correctly', () => {
    const { getByTestId } = render(
      <IconButton data-testid={'icon.button'} variant='cancel' />
    );
    const button = getByTestId('icon.button') as HTMLButtonElement;
    expect(button).toBeVisible();

    expect(button).toHaveTextContent('Cross1Icon');
  });

  it('displays copy correctly', () => {
    const { getByTestId } = render(
      <IconButton data-testid={'icon.button'} variant='copy' />
    );
    const button = getByTestId('icon.button') as HTMLButtonElement;
    expect(button).toBeVisible();

    expect(button).toHaveTextContent('CopyIcon');
  });

  it('matches snapshot', () => {
    const copy = render(
      <IconButton data-testid={'icon.button'} variant='copy' />
    );
    expect(copy).toMatchSnapshot();

    const cancel = render(
      <IconButton data-testid={'icon.button'} variant='cancel' />
    );
    expect(cancel).toMatchSnapshot();
  });
});
