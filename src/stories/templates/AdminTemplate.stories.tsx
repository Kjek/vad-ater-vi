import AdminMetaHeader from '@component/AdminMetaHeader';
import AdminMain from '@component/organisms/AdminMain/AdminMain';
import AdminTemplate from '@component/templates/AdminTemplate';
import type { Meta, StoryObj } from '@storybook/react';
import { SessionProvider } from 'next-auth/react';
import { StorybookTrpcProvider } from '../mocks/StorybookTrpcProvider';

const meta = {
  title: 'Template/AdminTemplate',
  component: AdminTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    metaHeader: <AdminMetaHeader />,
    main: <AdminMain />,
  },
  argTypes: {
    metaHeader: {
      description: 'All the meta information for the site.',
    },
    main: {
      description:
        'The main content of site. Includes the filter section and the list of all the restaurants.',
    },
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
} satisfies Meta<typeof AdminTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
