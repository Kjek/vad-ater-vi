import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CreateAdminAccountModal from './CreateAdminAccountModal';

vi.mock('@util/api', () => ({
  api: {
    admin: {
      createAdminAccount: {
        useMutation: () => ({
          mutate: vi.fn(),
        }),
      },
    },
  },
}));

describe(CreateAdminAccountModal, () => {
  it('renders correctly', () => {
    const toggleModal = vi.fn();
    const { container } = render(
      <CreateAdminAccountModal toggleModal={toggleModal} />
    );
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = render(
      <CreateAdminAccountModal toggleModal={vi.fn()} />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
