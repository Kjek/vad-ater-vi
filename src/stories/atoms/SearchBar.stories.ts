import SearchBar from '@component/atoms/SearchBar/SearchBar';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  args: { searchQuery: undefined, setSearchQuery: fn() },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
