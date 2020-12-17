import React, { memo } from 'react';
import { BaseLink, useRoute } from 'react-router5';
import classnames from 'classnames/bind';
import styles from './index.module.scss';
import { Container } from '../../../ui/container';

const cn = classnames.bind(styles);
const CLASS_NAME = 'nav';

const NavComponent = () => {
  const { router } = useRoute();
  return (
    <nav className={cn(CLASS_NAME)}>
      <Container>
        <ul className={cn(`${CLASS_NAME}__menu`)}>
          <BaseLink routeName="home" router={router}>
            <li className={cn(`${CLASS_NAME}__link`)}>Home</li>
          </BaseLink>

          <BaseLink routeName="trades-made" router={router}>
            <li className={cn(`${CLASS_NAME}__link`)}>Past trades</li>
          </BaseLink>

          <BaseLink routeName="unusuals" router={router}>
            <li className={cn(`${CLASS_NAME}__link`)}>Unusuals</li>
          </BaseLink>

          <BaseLink routeName="regular-items" router={router}>
            <li className={cn(`${CLASS_NAME}__link`)}>Regular items</li>
          </BaseLink>
        </ul>
      </Container>
    </nav>
  );
};

export const Nav = memo(NavComponent);
