import React, { memo, ReactNode } from 'react';
import styles from './index.module.scss';
import classNamesBind from 'classnames/bind';

const cn = classNamesBind.bind(styles);
const CLASS_NAME = 'item-grid';

type Props = {
  children: ReactNode;
};

const Component = ({ children }: Props) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__list`)}>
        {children}
      </div>
    </div>
  );
};

export const ItemGrid = memo(Component);
