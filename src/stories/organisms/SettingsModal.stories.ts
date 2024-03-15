import SettingsModal from '@component/organisms/SettingsModal/SettingsModal';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Organisms/SettingsModal',
  component: SettingsModal,
  parameters: {
    layout: 'centered',
  },
  args: {
    restaurant: {
      id: '0',
      name: 'Example',
      homeUrl: 'www.example.com',
      lunchUrl: 'www.example.com/lunch',
      lunchRegex: null,
      weeklyRegex: null,
      enabled: true,
      restaurantId: '0',
    },
    deleteRestaurant: fn(),
    toggleOpen: fn(),
    updateSettings: fn(),
  },
} satisfies Meta<typeof SettingsModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
