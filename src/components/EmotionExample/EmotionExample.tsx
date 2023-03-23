import * as React from 'react';
import { FC, useState } from 'react';
import variables from '../../variables.scss';
import styled from '@emotion/styled'
import { css } from '@emotion/react';

const common = css`
  font-size: 12px;
  color: #8B97A5;
`;

const Text = styled.div<{ opened: boolean }>`
  ${common};
  display: ${props => props.opened ? 'block' : 'none'};
`

const Root = styled.div`
  .some-global-class {
    ${common};
    color: ${variables.pink}
  }
`

const Button = styled.button`
  border-radius: 8px;
  font-size: 18px;
  padding: 8px 16px;
  outline: none;
  border: 0;
  background-color: ${variables.red};
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${variables.redLight};
  }

  &:active {
    background-color: ${variables.redDark}
  }
`

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const EmotionExample: FC<ButtonProps> = ({ className, ...props }) => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <Root className={className}>
      <Button {...props} onClick={() => setOpened(v => !v)} />
      <Text opened={opened}>Test</Text>
      <div className="some-global-class">Global</div>
    </Root>
  );
}