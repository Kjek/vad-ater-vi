import LoginSection from '@component/organisms/LoginSection/LoginSection';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/LoginSection',
  component: LoginSection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
