import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import SettingsItem from './SettingsItem';

String.prototype.toDotNotation = vi.fn();

describe(SettingsItem, () => {
  it('renders correctly', () => {
    const onChange = vi.fn();
    const { container } = render(
      <SettingsItem
        title='Example'
        inputDefaultValue={''}
        inputPlaceholder='Type something here...'
        onChange={onChange}
      />
    );
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });

  it('displays value correctly', () => {
    const onChange = vi.fn();
    const { getByDisplayValue } = render(
      <SettingsItem
        title='Example'
        inputDefaultValue={'Default Value'}
        inputPlaceholder='Type something here...'
        onChange={onChange}
      />
    );

    const textBox = getByDisplayValue('Default Value');
    fireEvent.change(textBox, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalledOnce();
    expect(textBox).toHaveValue('test');
  });

  it('matches snapshot', () => {
    const defaultRender = render(
      <SettingsItem
        title='Example'
        inputDefaultValue={''}
        inputPlaceholder='Type something here...'
        onChange={vi.fn()}
      />
    );
    expect(defaultRender).toMatchSnapshot();
  });
});
