import InputButton from '@component/atoms/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/InputButton',
  component: InputButton,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn(), value: 'Button' },
} satisfies Meta<typeof InputButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
