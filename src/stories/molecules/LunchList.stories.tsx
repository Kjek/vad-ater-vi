import LunchList from '@component/molecules/LunchList/LunchList';
import LunchListSkeleton from '@component/molecules/LunchList/LunchListSkeleton';
import { StateProvider } from '@hook/useGlobalState';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/LunchList',
  component: LunchList,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    restaurants: [
      {
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
    ],
  },
  argTypes: {
    restaurants: {
      description:
        'Takes information about restaurants and their menus that have been scraped in the backend server',
    },
  },
  decorators: [
    (Story) => (
      <StateProvider>
        <Story />
      </StateProvider>
    ),
  ],
} satisfies Meta<typeof LunchList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  decorators: [() => <LunchListSkeleton />],
};
