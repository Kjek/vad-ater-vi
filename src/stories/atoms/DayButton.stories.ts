import DayButton from '@component/atoms/DayButton/DayButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/DayButton',
  component: DayButton,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn(), title: 'Måndag', setAllSelected: fn() },
} satisfies Meta<typeof DayButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
