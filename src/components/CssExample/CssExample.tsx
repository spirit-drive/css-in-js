import React, { FC, useState } from 'react';
import cn from 'clsx';
import './CssExample.css';

export type ButtonProps = {
  className?: string;
};

export const CssExample: FC<ButtonProps> = ({ className, ...props }) => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div className={cn('CssExample', className)}>
      <button className={'CssExample__button'} {...props} onClick={() => setOpened(v => !v)} />
      <div className={cn('CssExample__text', opened ? 'CssExample__text_opened' : 'CssExample__text_closed')}>Test</div>
      <div className={cn('CssExample__text', !opened && 'CssExample__text_closed')}>Test</div>
    </div>
  );
}
