import CreateAdminAccountModal from '@component/molecules/CreateAdminAccountModal/CreateAdminAccountModal';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { StorybookTrpcProvider } from 'src/stories/mocks/StorybookTrpcProvider';

const meta = {
  title: 'Molecules/CreateAdminAccountModal',
  component: CreateAdminAccountModal,
  parameters: {
    layout: 'centered',
  },
  args: { toggleModal: fn() },
  decorators: [
    (Story) => (
      <StorybookTrpcProvider>
        <Story />
      </StorybookTrpcProvider>
    ),
  ],
} satisfies Meta<typeof CreateAdminAccountModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
