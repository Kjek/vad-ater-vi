import GitHubButton from '@component/atoms/GitHubButton/GitHubButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/GitHubButton',
  component: GitHubButton,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
} satisfies Meta<typeof GitHubButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
