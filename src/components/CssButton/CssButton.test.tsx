import React from 'react';
import { render } from '@testing-library/react';
import { CssButton } from './CssButton';

describe('CssButton', () => {
  it('base snapshot', () => {
    const { container } = render(<CssButton>CssButton</CssButton>);
    expect(container).toMatchSnapshot();
  });
});
