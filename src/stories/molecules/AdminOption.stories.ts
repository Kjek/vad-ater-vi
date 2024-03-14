import AdminOption from '@component/molecules/AdminOption/AdminOption';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/AdminOption',
  component: AdminOption,
  parameters: {
    layout: 'centered',
  },
  args: { buttonValue: 'Button', onClick: fn(), text: 'Text' },
  argTypes: {
    buttonValue: { description: 'The value of the `<InputButton>` element.' },
    onClick: {
      description:
        'The on click event handler for the `<InputButton>` element.',
    },
    text: { description: 'The text for the `<Text>` element.' },
  },
} satisfies Meta<typeof AdminOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
