import Spinner from '@component/atoms/Spinner/Spinner';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
