import DaySelector from '@component/molecules/DaySelector/DaySelector';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/DaySelector',
  component: DaySelector,
  parameters: {
    layout: 'centered',
  },
  args: { searchQuery: undefined, setSearchQuery: fn() },
} satisfies Meta<typeof DaySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
