import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import Spinner from './Spinner';

describe(Spinner, () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Spinner data-testid={'spinner'} />);
    const spinner = getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(<Spinner />);
    expect(defaultRender).toMatchSnapshot();
  });
});
