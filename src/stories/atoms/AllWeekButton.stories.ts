import AllWeekButton from '@component/atoms/AllWeekButton/AllWeekButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/AllWeekButton',
  component: AllWeekButton,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn(), isAllSelected: false, setAllSelected: fn() },
} satisfies Meta<typeof AllWeekButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
