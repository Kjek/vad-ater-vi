import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import GitHubButton from './GitHubButton';

vi.mock('@radix-ui/react-icons', async (importOriginal) => ({
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  ...(await importOriginal<typeof import('@radix-ui/react-icons')>()),
  GitHubLogoIcon: () => <div>GitHubLogoIcon</div>,
}));

describe(GitHubButton, () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByTestId } = render(
      <GitHubButton data-testid={'github.button'} />
    );
    const githubButton = getByTestId('github.button') as HTMLInputElement;
    expect(githubButton).toBeInTheDocument();
    expect(githubButton).toBeVisible();
  });

  it('displays correctly', () => {
    const { getByTestId } = render(
      <GitHubButton data-testid={'github.button'} />
    );
    const githubButton = getByTestId('github.button') as HTMLSpanElement;
    expect(githubButton).toBeVisible();
    expect(githubButton).toHaveTextContent('GitHubLogoIcon');
  });

  it('matches snapshot', () => {
    const defaultRender = render(<GitHubButton />);
    expect(defaultRender).toMatchSnapshot();
  });
});
