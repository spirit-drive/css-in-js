import React from 'react';
import { render } from '@testing-library/react';
import { CssExample } from './CssExample';

describe('CssButton', () => {
  it('base snapshot', () => {
    const { container } = render(<CssExample>CssButton</CssExample>);
    expect(container).toMatchSnapshot();
  });
});
