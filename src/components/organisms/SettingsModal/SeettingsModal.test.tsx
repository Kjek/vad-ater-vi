import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import SettingsModal from './SettingsModal';

String.prototype.toDotNotation = vi.fn();

describe(SettingsModal, () => {
  it('renders correctly', () => {
    const { container } = render(
      <SettingsModal
        deleteRestaurant={vi.fn()}
        restaurant={{
          id: '0',
          name: 'Example',
          homeUrl: 'www.example.com',
          lunchUrl: 'www.example.com/lunch',
          lunchRegex: null,
          weeklyRegex: null,
          enabled: true,
          restaurantId: '0',
        }}
        toggleOpen={vi.fn()}
        updateSettings={vi.fn()}
      />
    );
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(
      <SettingsModal
        deleteRestaurant={vi.fn()}
        restaurant={{
          id: '0',
          name: 'Example',
          homeUrl: 'www.example.com',
          lunchUrl: 'www.example.com/lunch',
          lunchRegex: null,
          weeklyRegex: null,
          enabled: true,
          restaurantId: '0',
        }}
        toggleOpen={vi.fn()}
        updateSettings={vi.fn()}
      />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
