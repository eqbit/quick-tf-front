import React, { memo, ReactNode } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'container';

type Props = {
  children: ReactNode;
}

const ContainerComponent = ({ children }: Props) => {
  return <div className={cn(CLASS_NAME)}>{children}</div>
};

export const Container = memo(ContainerComponent);
