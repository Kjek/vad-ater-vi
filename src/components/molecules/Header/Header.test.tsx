import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header';

describe(Header, () => {
  it('renders correctly', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(<Header />);
    expect(defaultRender).toMatchSnapshot();
  });
});
