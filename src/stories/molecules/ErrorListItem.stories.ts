import ErrorListItem from '@component/molecules/ErrorListItem/ErrorListItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/ErrorListItem',
  component: ErrorListItem,
  parameters: {
    layout: 'centered',
  },
  args: { restaurantHomeUrl: 'www.example.com' },
} satisfies Meta<typeof ErrorListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
