import SettingsItem from '@component/molecules/SettingsItem/SettingsItem';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/SettingsItem',
  component: SettingsItem,
  parameters: {
    layout: 'centered',
  },
  args: {
    inputDefaultValue: undefined,
    inputPlaceholder: 'Type something',
    onChange: fn(),
    title: 'Title',
  },
  argTypes: {},
} satisfies Meta<typeof SettingsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
