import CreateRestaurantSettingModal from '@component/molecules/CreateRestaurantSettingModal/CreateRestaurantSettingModal';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/CreateRestaurantSettingModal',
  component: CreateRestaurantSettingModal,
  parameters: {
    layout: 'centered',
  },
  args: { createRestaurantSetting: fn() },
} satisfies Meta<typeof CreateRestaurantSettingModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
