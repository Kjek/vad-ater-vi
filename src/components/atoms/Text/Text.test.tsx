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
});
