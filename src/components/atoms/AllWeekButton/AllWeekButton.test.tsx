import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import AllWeekButton from './AllWeekButton';

vi.mock('../../assets/CancelIcon', () => ({
  default: () => <div>CancelIcon</div>,
}));

vi.mock('../../assets/CalendarIcon', () => ({
  default: () => <div>CalendarIcon</div>,
}));

describe(AllWeekButton, () => {
  let isAllSelected = false;
  const setAllSelected = vi.fn().mockImplementation((newValue: boolean) => {
    isAllSelected = newValue;
  });

  beforeEach(() => {
    vi.clearAllMocks();
    isAllSelected = false;
  });

  it('renders correctly', () => {
    const { getByTestId } = render(
      <AllWeekButton
        data-testid={'all.week.button'}
        isAllSelected={isAllSelected}
        setAllSelected={setAllSelected}
      />
    );
    const allWeekButton = getByTestId('all.week.button') as HTMLInputElement;
    expect(allWeekButton).toBeInTheDocument();
    expect(allWeekButton).toBeVisible();
  });

  it('displays cancel icon correctly', () => {
    const { getByTestId } = render(
      <AllWeekButton
        data-testid={'all.week.button'}
        isAllSelected={!isAllSelected}
        setAllSelected={setAllSelected}
      />
    );
    const allWeekButton = getByTestId('all.week.button') as HTMLSpanElement;
    expect(allWeekButton).toBeVisible();
    expect(allWeekButton).toHaveTextContent('CancelIcon');
  });

  it('displays calendar icon correctly', () => {
    const { getByTestId } = render(
      <AllWeekButton
        data-testid={'all.week.button'}
        isAllSelected={isAllSelected}
        setAllSelected={setAllSelected}
      />
    );
    const allWeekButton = getByTestId('all.week.button') as HTMLSpanElement;
    expect(allWeekButton).toBeVisible();
    expect(allWeekButton).toHaveTextContent('CalendarIcon');
  });

  // it('displays correctly after user clicked', async () => {
  //   const { getByTestId } = render(
  //     <AllWeekButton
  //       isAllSelected={isAllSelected}
  //       setAllSelected={setAllSelected}
  //     />
  //   );

  //   expect(isAllSelected).toBeFalsy();
  //   const allWeekButton = getByTestId('all.week.button') as HTMLSpanElement;
  //   expect(allWeekButton).toBeInTheDocument();
  //   expect(allWeekButton).toBeVisible();
  //   expect(allWeekButton).toHaveTextContent('CalendarIcon');

  //   fireEvent.click(allWeekButton);

  //   expect(isAllSelected).toBeTruthy();
  //   expect(setAllSelected).toBeCalledWith(true);
  //   expect(allWeekButton).toHaveTextContent('CancelIcon');
  // });
});
