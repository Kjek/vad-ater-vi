import SearchButton from '@component/atoms/SearchButton/SearchButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/SearchButton',
  component: SearchButton,
  parameters: {
    layout: 'centered',
  },
  args: { isSearchBarVisible: false, toggleSearchBar: fn() },
} satisfies Meta<typeof SearchButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
