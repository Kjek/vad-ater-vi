import Header from '@component/molecules/Header/Header';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/Header',
  component: Header,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
