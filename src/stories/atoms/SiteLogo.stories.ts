import SiteLogo from '@component/atoms/SiteLogo/SiteLogo';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/SiteLogo',
  component: SiteLogo,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SiteLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
