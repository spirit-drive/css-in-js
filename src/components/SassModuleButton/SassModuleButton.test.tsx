import React from 'react';
import { render } from '@testing-library/react';
import { SassModuleButton } from './SassModuleButton';

describe('SassModuleButton', () => {
  it('base snapshot', () => {
    const { container } = render(<SassModuleButton>SassModuleButton</SassModuleButton>);
    expect(container).toMatchSnapshot();
  });
});
