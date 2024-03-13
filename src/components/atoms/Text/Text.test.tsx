import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import Text from './Text';

describe(Text, () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Text data-testid={'text'} />);
    const textComponent = getByTestId('text');
    expect(textComponent).toBeInTheDocument();
    expect(textComponent).toBeVisible();
  });

  it('displays correctly', () => {
    const { getByTestId } = render(<Text data-testid={'text'}>Test</Text>);
    const textComponent = getByTestId('text');
    expect(textComponent).toBeInTheDocument();
    expect(textComponent).toBeVisible();
    expect(textComponent).toHaveTextContent('Test');
  });

  it('render correct tag', () => {
    const { getByTestId } = render(
      <Text data-testid={'text'} variant='h1'>
        Test
      </Text>
    );
    const textComponent = getByTestId('text');
    expect(textComponent).toBeInTheDocument();
    expect(textComponent).toBeVisible();
    expect(textComponent.tagName).toEqual('H1');
  });

  it('matches snapshot', () => {
    const h1 = render(<Text variant='h1'>Test</Text>);
    expect(h1).toMatchSnapshot();
    const h2 = render(<Text variant='h2'>Test</Text>);
    expect(h2).toMatchSnapshot();
    const h3 = render(<Text variant='h3'>Test</Text>);
    expect(h3).toMatchSnapshot();
    const h4 = render(<Text variant='h4'>Test</Text>);
    expect(h4).toMatchSnapshot();
    const h5 = render(<Text variant='h5'>Test</Text>);
    expect(h5).toMatchSnapshot();
    const h6 = render(<Text variant='h6'>Test</Text>);
    expect(h6).toMatchSnapshot();
    const p = render(<Text variant='p'>Test</Text>);
    expect(p).toMatchSnapshot();
    const defaultRender = render(<Text>Test</Text>);
    expect(defaultRender).toMatchSnapshot();
  });
});
