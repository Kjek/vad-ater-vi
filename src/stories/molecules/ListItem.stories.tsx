import ListItem from '@component/molecules/ListItem/ListItem';
import { StateProvider } from '@hook/useGlobalState';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/ListItem',
  component: ListItem,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    restaurant: {
      name: 'Example',
      menu: [
        { day: 'Måndag', food: 'Köttbullar' },
        { day: 'Tisdag', food: 'Köttbullar' },
        { day: 'Onsdag', food: 'Köttbullar' },
        { day: 'Torsdag', food: 'Köttbullar' },
        { day: 'Fredag', food: 'Köttbullar' },
      ],
      weeklySpecials: [{ type: 'Veckans sallad', food: 'Ceasarsallad' }],
      homeUrl: 'www.example.com',
    },
  },
  argTypes: {
    restaurant: {
      description:
        "Takes information about a restaurant and it's menu that has been scraped in the backend server",
    },
  },
  decorators: [
    (Story) => (
      <StateProvider>
        <Story />
      </StateProvider>
    ),
  ],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
