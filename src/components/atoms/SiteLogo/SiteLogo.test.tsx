import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import SiteLogo from './SiteLogo';

describe(SiteLogo, () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<SiteLogo data-testid={'site.logo'} />);
    const siteLogo = getByTestId('site.logo');
    expect(siteLogo).toBeInTheDocument();
    expect(siteLogo).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(<SiteLogo />);
    expect(defaultRender).toMatchSnapshot();
  });
});
