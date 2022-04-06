import React from 'react';
import { render } from '@testing-library/react';
import { EmotionExample } from './EmotionExample';

describe('EmotionExample', () => {
  it('base snapshot', () => {
    const { container } = render(<EmotionExample>SassModuleButton</EmotionExample>);
    expect(container).toMatchSnapshot();
  });
});
