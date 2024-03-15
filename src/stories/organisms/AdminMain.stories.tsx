import AdminMain from '@component/organisms/AdminMain/AdminMain';
import type { Meta, StoryObj } from '@storybook/react';
import { SessionProvider } from 'next-auth/react';
import { StorybookTrpcProvider } from '../mocks/StorybookTrpcProvider';

const meta = {
  title: 'Organisms/AdminMain',
  component: AdminMain,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <StorybookTrpcProvider>
        <SessionProvider session={{ user: { id: '0' }, expires: '1000000000' }}>
          <Story />
        </SessionProvider>
      </StorybookTrpcProvider>
    ),
  ],
} satisfies Meta<typeof AdminMain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
