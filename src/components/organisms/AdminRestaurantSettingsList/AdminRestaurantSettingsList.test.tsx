import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import AdminRestaurantSettingsList from './AdminRestaurantSettingsList';

describe(AdminRestaurantSettingsList, () => {
  it('renders correctly', () => {
    const { container } = render(
      <AdminRestaurantSettingsList
        debugData=''
        deleteRestaurant={vi.fn()}
        reScrape={vi.fn()}
        restaurantSettings={undefined}
        setDebugRestaurantId={vi.fn()}
        updateSettings={vi.fn()}
      />
    );
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(
      <AdminRestaurantSettingsList
        debugData=''
        deleteRestaurant={vi.fn()}
        reScrape={vi.fn()}
        restaurantSettings={undefined}
        setDebugRestaurantId={vi.fn()}
        updateSettings={vi.fn()}
      />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
