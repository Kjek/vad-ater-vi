import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Main from './Main';

Date.prototype.getWeek = vi.fn();

vi.mock('@util/api', () => ({
  api: {
    lunch: {
      menu: {
        useQuery: () => ({
          data: undefined,
        }),
      },
      menuSearch: {
        useQuery: () => ({
          data: undefined,
        }),
      },
    },
  },
}));

describe(Main, () => {
  it('renders correctly', () => {
    const { container } = render(<Main />);
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(<Main />);
    expect(defaultRender).toMatchSnapshot();
  });
});
