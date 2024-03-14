import AdminRestaurantSettingsList from '@component/organisms/AdminRestaurantSettingsList/AdminRestaurantSettingsList';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Organisms/AdminRestaurantSettingsList',
  component: AdminRestaurantSettingsList,
  parameters: {
    layout: 'centered',
  },
  args: {
    debugData: undefined,
    restaurantSettings: [
      {
        id: '0',
        name: 'Example',
        homeUrl: 'www.example.com',
        lunchUrl: 'www.example.com/lunch',
        lunchRegex: null,
        weeklyRegex: null,
        enabled: true,
        restaurantId: '0',
      },
    ],
    deleteRestaurant: fn(),
    reScrape: fn(),
    setDebugRestaurantId: fn(),
    updateSettings: fn(),
  },
  argTypes: {},
} satisfies Meta<typeof AdminRestaurantSettingsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
