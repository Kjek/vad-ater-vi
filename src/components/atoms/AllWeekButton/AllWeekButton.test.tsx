import { fireEvent, render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import AllWeekButton from './AllWeekButton';

vi.mock('@radix-ui/react-icons', async (importOriginal) => {
  return {
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    ...(await importOriginal<typeof import('@radix-ui/react-icons')>()),
    CalendarIcon: () => <div>CalendarIcon</div>,
    Cross1Icon: () => <div>Cross1Icon</div>,
  };
});

describe(AllWeekButton, () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    const setAllSelected = vi.fn();
    const { getByTestId } = render(
      <AllWeekButton
        data-testid={'all.week.button'}
        isAllSelected={false}
        setAllSelected={setAllSelected}
      />
    );
    const allWeekButton = getByTestId('all.week.button') as HTMLInputElement;
    expect(allWeekButton).toBeInTheDocument();
    expect(allWeekButton).toBeVisible();
  });

  it('displays cancel icon correctly', () => {
    const setAllSelected = vi.fn();
    const { getByTestId } = render(
      <AllWeekButton
        data-testid={'all.week.button'}
        isAllSelected={true}
        setAllSelected={setAllSelected}
      />
    );
    const allWeekButton = getByTestId('all.week.button') as HTMLSpanElement;
    expect(allWeekButton).toBeVisible();
    expect(allWeekButton).toHaveTextContent('Cross1Icon');
  });

  it('displays calendar icon correctly', () => {
    const setAllSelected = vi.fn();
    const { getByTestId } = render(
      <AllWeekButton
        data-testid={'all.week.button'}
        isAllSelected={false}
        setAllSelected={setAllSelected}
      />
    );
    const allWeekButton = getByTestId('all.week.button') as HTMLSpanElement;
    expect(allWeekButton).toBeVisible();
    expect(allWeekButton).toHaveTextContent('CalendarIcon');
  });

  it('user interaction works correctly', () => {
    const setAllSelected = vi.fn();
    const { getByTestId } = render(
      <AllWeekButton
        data-testid={'all.week.button'}
        isAllSelected={false}
        setAllSelected={setAllSelected}
      />
    );

    const allWeekButton = getByTestId('all.week.button') as HTMLSpanElement;

    fireEvent.click(allWeekButton);

    expect(allWeekButton).toBeInTheDocument();
    expect(allWeekButton).toBeVisible();
    expect(setAllSelected).toBeCalledWith(true);
  });

  it('matches snapshot', () => {
    const setAllSelected = vi.fn();
    const defaultRender = render(
      <AllWeekButton
        data-testid={'all.week.button'}
        isAllSelected={false}
        setAllSelected={setAllSelected}
      />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
