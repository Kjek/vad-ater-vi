import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CreateRestaurantSettingModal from './CreateRestaurantSettingModal';

describe(CreateRestaurantSettingModal, () => {
  it('renders correctly', () => {
    const createRestaurantSetting = vi.fn();
    const { container } = render(
      <CreateRestaurantSettingModal
        createRestaurantSetting={createRestaurantSetting}
      />
    );
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(
      <CreateRestaurantSettingModal createRestaurantSetting={vi.fn()} />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
