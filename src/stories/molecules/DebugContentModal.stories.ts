import DebugContentModal from '@component/molecules/DebugContentModal/DebugContentModal';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/DebugContentModal',
  component: DebugContentModal,
  parameters: {
    layout: 'centered',
  },
  args: { debugData: undefined, restaurantId: undefined, setDebugId: fn() },
} satisfies Meta<typeof DebugContentModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
