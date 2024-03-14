import Main from '@component/organisms/Main/Main';
import { StateProvider } from '@hook/useGlobalState';
import type { Meta, StoryObj } from '@storybook/react';
import { StorybookTrpcProvider } from '../mocks/StorybookTrpcProvider';

const meta = {
  title: 'Organisms/Main',
  component: Main,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <StorybookTrpcProvider>
        <StateProvider>
          <Story />
        </StateProvider>
      </StorybookTrpcProvider>
    ),
  ],
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
