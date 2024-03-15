import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorListItem from './ErrorListItem';

describe(ErrorListItem, () => {
  it('renders correctly', () => {
    const { container } = render(
      <ErrorListItem restaurantHomeUrl='www.example.com' />
    );
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(
      <ErrorListItem restaurantHomeUrl='www.example.com' />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
