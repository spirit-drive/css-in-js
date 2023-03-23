import * as React from 'react';
import { render } from '@testing-library/react';
import { SassModuleExample } from './SassModuleExample';

describe('SassModuleExample', () => {
  it('base snapshot', () => {
    const { container } = render(<SassModuleExample>SassModuleButton</SassModuleExample>);
    expect(container).toMatchSnapshot();
  });
});
