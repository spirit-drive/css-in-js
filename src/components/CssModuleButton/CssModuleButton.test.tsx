import React from 'react';
import { render } from '@testing-library/react';
import { CssModuleButton } from './CssModuleButton';

describe('CssModuleButton', () => {
  it('base snapshot', () => {
    const { container } = render(<CssModuleButton>CssModuleButton</CssModuleButton>);
    expect(container).toMatchSnapshot();
  });
});
