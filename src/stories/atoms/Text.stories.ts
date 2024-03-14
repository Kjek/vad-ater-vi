import Text from '@component/atoms/Text/Text';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  args: { children: 'Text' },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
