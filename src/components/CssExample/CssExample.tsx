import React, { FC, useState } from 'react';
import cn from 'clsx';
import './CssExample.css';

export type ButtonProps = {
  className?: string;
};

export const CssExample: FC<ButtonProps> = ({ className, ...props }) => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div className={cn('css-example', className)}>
      <button className={'css-example__button'} {...props} onClick={() => setOpened(v => !v)} />
      <div className={cn('css-example__text', opened ? 'css-example__text_opened' : 'css-example__text_closed')}>Test</div>
      <div className={cn('css-example__text', !opened && 'css-example__text_closed')}>Test</div>
    </div>
  );
}
