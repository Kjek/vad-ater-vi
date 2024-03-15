import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ListItem from './ListItem';

describe(ListItem, () => {
  it('renders correctly', () => {
    const { container } = render(
      <ListItem
        restaurant={{
          name: 'Example',
          menu: [{ day: 'Måndag', food: 'Meatballs' }],
          weeklySpecials: [{ type: 'Veckans sallad', food: 'Ceasarsallad' }],
        }}
      />
    );
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(
      <ListItem
        restaurant={{
          name: 'Example',
          menu: [{ day: 'Måndag', food: 'Meatballs' }],
          weeklySpecials: [{ type: 'Veckans sallad', food: 'Ceasarsallad' }],
        }}
      />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
