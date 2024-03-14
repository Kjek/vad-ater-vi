import FilterSection from '@component/organisms/FilterSection/FilterSection';
import { StateProvider } from '@hook/useGlobalState';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Organisms/FilterSection',
  component: FilterSection,
  parameters: {
    layout: 'centered',
  },
  args: {
    searchQuery: undefined,
    setSearchQuery: fn(),
  },
  argTypes: {
    searchQuery: {
      defaultValue: undefined,
      description: 'The search query to search and filter for restaurants.',
    },
  },
  decorators: [
    (Story) => (
      <StateProvider>
        <Story />
      </StateProvider>
    ),
  ],
} satisfies Meta<typeof FilterSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
