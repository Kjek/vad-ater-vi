import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import AdminMain from './AdminMain';

vi.mock('next-auth/react', async () => {
  const originalModule = await vi.importActual('next-auth/react');
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { username: 'admin' },
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: vi.fn(() => {
      return { data: mockSession, status: 'authenticated' }; // return type is [] in v3 but changed to {} in v4
    }),
  };
});

vi.mock('@util/api', () => ({
  api: {
    admin: {
      debugContent: {
        useQuery: () => ({
          data: undefined,
          refetch: vi.fn(),
        }),
      },
      getRestaurantSettings: {
        useQuery: () => ({
          data: undefined,
          refetch: vi.fn(),
        }),
      },
      createRestaurantSetting: {
        useMutation: () => ({
          mutate: vi.fn(),
        }),
      },
      updateRestaurantSetting: {
        useMutation: () => ({
          mutate: vi.fn(),
        }),
      },
      deleteRestaurant: {
        useMutation: () => ({
          mutate: vi.fn(),
        }),
      },
      reScrape: {
        useMutation: () => ({
          mutate: vi.fn(),
        }),
      },
      reScrapeAll: {
        useMutation: () => ({
          mutate: vi.fn(),
        }),
      },
    },
  },
}));

describe(AdminMain, () => {
  it('renders correctly', () => {
    const { container } = render(<AdminMain />);
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(<AdminMain />);
    expect(defaultRender).toMatchSnapshot();
  });
});
