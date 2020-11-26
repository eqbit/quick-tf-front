import React, { memo } from 'react';
import { BaseLink, useRoute } from 'react-router5';

const NavComponent = () => {
  const { router } = useRoute();
  return (
    <ul>
      <li><BaseLink routeName="home" router={router}>Home</BaseLink></li>
      <li><BaseLink routeName="trades-made" router={router}>Past trades</BaseLink></li>
    </ul>
  );
};

export const Nav = memo(NavComponent);
