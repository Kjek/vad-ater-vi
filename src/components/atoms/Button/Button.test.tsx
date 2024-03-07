import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import InputButton from './Button';

describe(InputButton, () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <InputButton data-testid={'input.button'} />
    );
    const button = getByTestId('input.button') as HTMLInputElement;
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  it('displays correctly', () => {
    const { getByText } = render(<InputButton value={'Press me!'} />);
    const button = getByText('Press me!') as HTMLInputElement;
    expect(button).toBeVisible();
    expect(button).toHaveValue('Press me!');
  });
});
