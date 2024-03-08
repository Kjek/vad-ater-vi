import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import LoadingIndicator from './LoadingIndicator';

describe(LoadingIndicator, () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <LoadingIndicator data-testid={'loading.indicator'} />
    );
    const button = getByTestId('loading.indicator') as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });
});
