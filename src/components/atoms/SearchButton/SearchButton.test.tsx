import { fireEvent, render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SearchButton from './SearchButton';

vi.mock('@radix-ui/react-icons', async (importOriginal) => {
  return {
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    ...(await importOriginal<typeof import('@radix-ui/react-icons')>()),
    MagnifyingGlassIcon: () => <div>MagnifyingGlassIcon</div>,
  };
});

describe(SearchButton, () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    const toggleSearchBar = vi.fn();
    const { getByTestId } = render(
      <SearchButton
        data-testid={'search.button'}
        isSearchBarVisible={false}
        toggleSearchBar={toggleSearchBar}
      />
    );
    const searchButton = getByTestId('search.button') as HTMLSpanElement;
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toBeVisible();
  });

  it('displays icon correctly', () => {
    const toggleSearchBar = vi.fn();
    const { getByTestId } = render(
      <SearchButton
        data-testid={'search.button'}
        isSearchBarVisible={false}
        toggleSearchBar={toggleSearchBar}
      />
    );
    const searchButton = getByTestId('search.button') as HTMLSpanElement;
    expect(searchButton).toBeVisible();
    expect(searchButton).toHaveTextContent('MagnifyingGlassIcon');
  });

  it('user interaction works correctly', async () => {
    const toggleSearchBar = vi.fn();
    const { getByTestId } = render(
      <SearchButton
        data-testid={'search.button'}
        isSearchBarVisible={false}
        toggleSearchBar={toggleSearchBar}
      />
    );

    const searchButton = getByTestId('search.button') as HTMLSpanElement;

    fireEvent.click(searchButton);

    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toBeVisible();
    expect(toggleSearchBar).toBeCalledTimes(1);
  });

  it('matches snapshot', () => {
    const defaultRender = render(
      <SearchButton isSearchBarVisible={false} toggleSearchBar={vi.fn()} />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
