import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import TextBox from './TextBox';

describe(TextBox, () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<TextBox data-testid={'text.box'} />);
    const textBox = getByTestId('text.box');
    expect(textBox).toBeInTheDocument();
    expect(textBox).toBeVisible();
  });

  it('displays correctly', () => {
    const { getByTestId } = render(
      <TextBox data-testid={'text.box'} value={'Test'} onChange={vi.fn()} />
    );
    const textBox = getByTestId('text.box');
    expect(textBox).toBeInTheDocument();
    expect(textBox).toBeVisible();
    expect(textBox).toHaveValue('Test');
  });

  it('contains correct type', () => {
    const { getByTestId } = render(
      <TextBox
        data-testid={'text.box'}
        variant='password'
        value={'Test'}
        onChange={vi.fn()}
      />
    );
    const textBox = getByTestId('text.box') as HTMLInputElement;
    expect(textBox).toBeInTheDocument();
    expect(textBox).toBeVisible();
    expect(textBox.type).toEqual('password');
  });

  it('matches snapshot', () => {
    const password = render(<TextBox variant='password' />);
    expect(password).toMatchSnapshot();
    const defaultRender = render(<TextBox />);
    expect(defaultRender).toMatchSnapshot();
  });
});
