import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import LoginSection from './LoginSection';

Date.prototype.getWeek = vi.fn();

describe(LoginSection, () => {
  it('renders correctly', () => {
    const { container } = render(<LoginSection />);
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(<LoginSection />);
    expect(defaultRender).toMatchSnapshot();
  });
});
