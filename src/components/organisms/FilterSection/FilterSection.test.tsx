import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import FilterSection from './FilterSection';

Date.prototype.getWeek = vi.fn();

describe(FilterSection, () => {
  it('renders correctly', () => {
    const { container } = render(
      <FilterSection searchQuery='' setSearchQuery={vi.fn()} />
    );
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(
      <FilterSection searchQuery='' setSearchQuery={vi.fn()} />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
