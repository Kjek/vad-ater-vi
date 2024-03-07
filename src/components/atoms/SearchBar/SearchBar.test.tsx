import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SearchBar from './SearchBar';

describe(SearchBar, () => {
  let searchQuery = '';
  const setSearchQuery = vi.fn().mockImplementation((newValue: string) => {
    searchQuery = newValue;
  });

  beforeEach(() => {
    vi.clearAllMocks();
    searchQuery = '';
  });

  it('renders correctly', () => {
    const { getByDisplayValue } = render(
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    );
    const searchBar = getByDisplayValue('') as HTMLInputElement;
    expect(searchBar).toBeInTheDocument();
    expect(searchBar).toBeVisible();
  });

  it('displays value correctly', () => {
    const { getByDisplayValue } = render(
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    );

    const searchBar = getByDisplayValue('') as HTMLInputElement;
    expect(searchBar).toBeVisible();
    expect(searchBar).toHaveValue('');
    expect(searchBar).toHaveValue(searchQuery);
    fireEvent.change(searchBar, { target: { value: 'test' } });
    expect(searchBar).toHaveValue('test');
    expect(searchBar).toHaveValue(searchQuery);
  });
});
