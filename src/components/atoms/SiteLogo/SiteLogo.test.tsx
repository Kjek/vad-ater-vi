import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import SiteLogo from './SiteLogo';

describe(SiteLogo, () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<SiteLogo data-testid={'site.logo'} />);
    const button = getByTestId('site.logo');
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });
});
