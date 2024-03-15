import ThemeButton from '@component/atoms/ThemeButton/ThemeButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/ThemeButton',
  component: ThemeButton,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ThemeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
