import Text from '@component/atoms/Text/Text';
import Modal from '@component/molecules/Modal/Modal';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  args: {
    toggleOpen: fn(),
    children: <Text>Add any children here to design your modal!</Text>,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
