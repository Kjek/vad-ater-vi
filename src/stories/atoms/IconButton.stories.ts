import IconButton from '@component/atoms/IconButton/IconButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cancel: Story = {
  args: {
    variant: 'cancel',
  },
};

export const Copy: Story = {
  args: {
    variant: 'copy',
  },
};
