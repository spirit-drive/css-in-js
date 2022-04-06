import React, { FC, useState } from 'react';
import cn from 'clsx';
import './CssButton.css';

export type ButtonProps = {
  className?: string;
};

export const CssButton: FC<ButtonProps> = ({ className, ...props }) => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div className={cn('CssButton', className)}>
      <button className={'CssButton__button'} {...props} onClick={() => setOpened(v => !v)} />
      <div className={cn('CssButton__text', opened ? 'CssButton__text_opened' : 'CssButton__text_closed')}>Test</div>
      <div className={cn('CssButton__text', !opened && 'CssButton__text_closed')}>Test</div>
    </div>
  );
}
