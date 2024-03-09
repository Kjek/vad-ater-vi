import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import AdminOption from './AdminOption';

describe(AdminOption, () => {
  const onClick = vi.fn();
  let adminOption: HTMLElement;

  beforeEach(async () => {
    vi.resetAllMocks();
    adminOption = render(
      <AdminOption buttonValue='Press me!' onClick={onClick} />
    ).container;
  });

  it('renders correctly', () => {
    expect(adminOption).toBeInTheDocument();
    expect(adminOption).toBeVisible();
  });

  it('matches snapshot', () => {
    const defaultRender = (
      <AdminOption buttonValue='Press me!' onClick={vi.fn()} />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
