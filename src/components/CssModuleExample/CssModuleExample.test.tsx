import React from 'react';
import { render } from '@testing-library/react';
import { CssModuleExample } from './CssModuleExample';

describe('CssModuleButton', () => {
  it('base snapshot', () => {
    const { container } = render(<CssModuleExample>CssModuleButton</CssModuleExample>);
    expect(container).toMatchSnapshot();
  });
});
