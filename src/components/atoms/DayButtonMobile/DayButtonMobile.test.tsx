import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import DayButtonMobile from './DayButtonMobile';

describe(DayButtonMobile, () => {
  let isAllSelected = true;
  const setAllSelected = vi.fn().mockImplementation((newValue: boolean) => {
    isAllSelected = newValue;
  });

  beforeEach(() => {
    vi.clearAllMocks();
    isAllSelected = false;
  });

  it('renders correctly', () => {
    const { getByTestId } = render(
      <DayButtonMobile
        data-testid={'day.button'}
        setAllSelected={setAllSelected}
        title='Måndag'
      />
    );
    const dayButton = getByTestId('day.button') as HTMLInputElement;
    expect(dayButton).toBeInTheDocument();
    expect(dayButton).toBeVisible();
  });

  it('displays correctly', () => {
    const { getByTestId } = render(
      <DayButtonMobile
        data-testid={'day.button'}
        setAllSelected={setAllSelected}
        title='Måndag'
      />
    );
    const dayButton = getByTestId('day.button') as HTMLSpanElement;
    expect(dayButton).toBeVisible();
    expect(dayButton).toHaveValue('Må');
  });

  it('changing state correctly', () => {
    const { getByTestId } = render(
      <DayButtonMobile
        data-testid={'day.button'}
        setAllSelected={setAllSelected}
        title='Måndag'
      />
    );
    const dayButton = getByTestId('day.button') as HTMLSpanElement;
    expect(dayButton).toBeInTheDocument();
    expect(dayButton).toBeVisible();

    fireEvent.click(dayButton);

    expect(setAllSelected).toBeCalledWith(false);
    expect(isAllSelected).toBeFalsy();
  });
});
