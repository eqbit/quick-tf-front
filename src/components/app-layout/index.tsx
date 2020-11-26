import React, { memo, ReactNode } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { Nav } from './components/nav';

const cn = classnames.bind(styles);
const CLASS_NAME = 'app-layout';

type Props = {
  children: ReactNode;
};

const AppLayoutComponent = ({ children }: Props) => {
  return (
    <div className={cn(CLASS_NAME)}>
      <div className={cn(`${CLASS_NAME}__nav`)}><Nav/></div>
      <div className={cn(`${CLASS_NAME}__content`)}>{children}</div>
    </div>
  )
};

export const AppLayout = memo(AppLayoutComponent);
