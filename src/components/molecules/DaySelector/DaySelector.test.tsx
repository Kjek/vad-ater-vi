import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import DaySelector from './DaySelector';

describe(DaySelector, () => {
  it('renders correctly', () => {
    const setSearchQuery = vi.fn();
    const { container } = render(
      <DaySelector searchQuery='' setSearchQuery={setSearchQuery} />
    );
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(
      <DaySelector searchQuery='' setSearchQuery={vi.fn()} />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
