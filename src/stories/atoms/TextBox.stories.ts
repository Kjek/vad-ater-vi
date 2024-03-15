import TextBox from '@component/atoms/TextBox/TextBox';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/TextBox',
  component: TextBox,
  parameters: {
    layout: 'centered',
  },
  args: { placeholder: 'Type something here...' },
} satisfies Meta<typeof TextBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
