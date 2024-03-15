import MetaHeader from '@component/MetaHeader';
import Header from '@component/molecules/Header/Header';
import Main from '@component/organisms/Main/Main';
import HomeTemplate from '@component/templates/HomeTemplate';
import { StateProvider } from '@hook/useGlobalState';
import type { Meta, StoryObj } from '@storybook/react';
import { StorybookTrpcProvider } from '../mocks/StorybookTrpcProvider';

const meta = {
  title: 'Template/HomeTemplate',
  component: HomeTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    metaHeader: <MetaHeader />,
    header: <Header />,
    main: <Main />,
  },
  argTypes: {
    metaHeader: {
      description: 'All the meta information for the site.',
    },
    header: {
      description: 'The header banner for the site.',
    },
    main: {
      description:
        'The main content of site. Includes the filter section and the list of all the restaurants.',
    },
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
} satisfies Meta<typeof HomeTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
