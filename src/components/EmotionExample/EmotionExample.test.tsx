import * as React from 'react';
import { render } from '@testing-library/react';
import { EmotionExample } from './EmotionExample';

describe('EmotionExample', () => {
  it('base snapshot', () => {
    const { container } = render(<EmotionExample>EmotionExample</EmotionExample>);
    expect(container).toMatchSnapshot();
  });
});
