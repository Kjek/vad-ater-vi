import { CopyIcon, Cross1Icon } from '@radix-ui/react-icons';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import IconButton from './IconButton';

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
    screen.debug();

    const { container: Cross1IconContainer } = render(<Cross1Icon />);

    expect(button).toHaveTextContent(Cross1IconContainer.textContent ?? '');
  });

  it('displays copy correctly', () => {
    const { getByTestId } = render(
      <IconButton data-testid={'icon.button'} variant='copy' />
    );
    const button = getByTestId('icon.button') as HTMLButtonElement;
    expect(button).toBeVisible();
    screen.debug();

    const { container: CopyIconContainer } = render(<CopyIcon />);

    expect(button).toHaveTextContent(CopyIconContainer.textContent ?? '');
  });
});
