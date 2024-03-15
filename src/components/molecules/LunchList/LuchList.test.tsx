import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LunchList from './LunchList';

describe(LunchList, () => {
  it('renders correctly', () => {
    const { container } = render(
      <LunchList
        restaurants={[
          {
            name: 'Example',
            menu: [{ day: 'Måndag', food: 'Meatballs' }],
            weeklySpecials: [{ type: 'Veckans sallad', food: 'Ceasarsallad' }],
          },
        ]}
      />
    );
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(
      <LunchList
        restaurants={[
          {
            name: 'Example',
            menu: [{ day: 'Måndag', food: 'Meatballs' }],
            weeklySpecials: [{ type: 'Veckans sallad', food: 'Ceasarsallad' }],
          },
        ]}
      />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
