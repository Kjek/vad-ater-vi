import LoadingIndicator from '@component/atoms/LoadingIndicator/LoadingIndicator';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LoadingIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
